import { execSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve as resolvePath } from 'node:path';
import { Node, Project, type ExportedDeclarations } from 'ts-morph';
import {
  fetchNpmPackument,
  resolveTrackVersions,
} from '../official-data.js';
import { basePath, translatedPath } from '../utils.js';

const namespacePrefix = '@minecraft/';
const packageCacheRoot = resolvePath(basePath, 'cache', 'npm-packages');
const diffCachePath = resolvePath(basePath, 'cache', 'experimental-diff.json');

export type SymbolSurface = Map<string, Set<string>>;

export type ModuleExperimentalDiff = {
  module: string;
  stableVersion?: string;
  previewVersion?: string;
  /** 无独立 npm latest：全部导出视为实验性 */
  allExperimental: boolean;
  experimentalSymbols: string[];
  /** 稳定版已有符号上的新增成员 */
  experimentalMembers: Record<string, string[]>;
};

export type ExperimentalDiffResult = {
  generatedAt: string;
  modules: Record<string, ModuleExperimentalDiff>;
};

export type BuildExperimentalDiffOptions = {
  modules: string[];
  /** 预览侧 d.ts 根（默认 translated/） */
  previewRoot?: string;
  /** 强制忽略结果缓存 */
  force?: boolean;
};

function packageName(module: string) {
  return `${namespacePrefix}${module}`;
}

function safeVersionDir(version: string) {
  return version.replace(/[\\/:*?"<>|]/g, '_');
}

/** 从入口声明收集导出符号 → 成员名集合 */
export function collectExportSurface(entryPath: string, extraGlobs: string[] = []): SymbolSurface {
  const surface: SymbolSurface = new Map();
  if (!existsSync(entryPath)) return surface;

  const project = new Project({ skipAddingFilesFromTsConfig: true });
  const entry = project.addSourceFileAtPath(entryPath);
  for (const glob of extraGlobs) {
    project.addSourceFilesAtPaths(glob);
  }

  for (const [exportName, decls] of entry.getExportedDeclarations()) {
    const members = new Set<string>();
    for (const decl of decls) {
      for (const name of membersOfDeclaration(decl)) {
        members.add(name);
      }
    }
    surface.set(exportName, members);
  }
  return surface;
}

function membersOfDeclaration(decl: ExportedDeclarations): string[] {
  const names: string[] = [];
  if (Node.isClassDeclaration(decl) || Node.isInterfaceDeclaration(decl)) {
    for (const member of decl.getMembers()) {
      if (Node.isConstructorDeclaration(member)) {
        names.push('constructor');
        continue;
      }
      if (
        Node.isMethodDeclaration(member) ||
        Node.isMethodSignature(member) ||
        Node.isPropertyDeclaration(member) ||
        Node.isPropertySignature(member) ||
        Node.isGetAccessorDeclaration(member) ||
        Node.isSetAccessorDeclaration(member)
      ) {
        const n = member.getName();
        if (n) names.push(n);
      }
    }
    return names;
  }
  if (Node.isEnumDeclaration(decl)) {
    for (const member of decl.getMembers()) {
      names.push(member.getName());
    }
  }
  return names;
}

function setDiff(a: Set<string>, b: Set<string>): string[] {
  return [...a].filter((x) => !b.has(x)).sort((x, y) => x.localeCompare(y));
}

/** 纯函数：预览相对稳定的符号/成员差异 */
export function diffSurfaces(
  preview: SymbolSurface,
  stable: SymbolSurface | undefined,
  versions: { stable?: string; preview?: string },
): Omit<ModuleExperimentalDiff, 'module'> {
  const previewVersion = versions.preview;
  const stableVersion = versions.stable;
  const sameTrack = Boolean(stableVersion && previewVersion && stableVersion === previewVersion);

  // 无 npm latest：整包视为实验性
  if (!stableVersion) {
    return {
      stableVersion,
      previewVersion,
      allExperimental: true,
      experimentalSymbols: [...preview.keys()].sort((a, b) => a.localeCompare(b)),
      experimentalMembers: {},
    };
  }

  // 文档轨与 latest 相同（如 common/math）：无预览增量（无需稳定表面）
  if (sameTrack) {
    return {
      stableVersion,
      previewVersion,
      allExperimental: false,
      experimentalSymbols: [],
      experimentalMembers: {},
    };
  }

  // 有 latest 但未能加载稳定表面：保守视为整包实验性
  if (!stable) {
    return {
      stableVersion,
      previewVersion,
      allExperimental: true,
      experimentalSymbols: [...preview.keys()].sort((a, b) => a.localeCompare(b)),
      experimentalMembers: {},
    };
  }

  const experimentalSymbols = setDiff(new Set(preview.keys()), new Set(stable.keys()));
  const experimentalMembers: Record<string, string[]> = {};
  for (const [sym, previewMembers] of preview) {
    if (!stable.has(sym)) continue;
    const added = setDiff(previewMembers, stable.get(sym) ?? new Set());
    if (added.length > 0) experimentalMembers[sym] = added;
  }

  return {
    stableVersion,
    previewVersion,
    allExperimental: false,
    experimentalSymbols,
    experimentalMembers,
  };
}

function resolvePackageEntry(pkgRoot: string): string | undefined {
  const pkgJsonPath = join(pkgRoot, 'package.json');
  if (!existsSync(pkgJsonPath)) return undefined;
  try {
    const pkg = JSON.parse(readFileSync(pkgJsonPath, 'utf-8')) as {
      types?: string;
      typings?: string;
      main?: string;
    };
    const rel = pkg.types ?? pkg.typings ?? 'index.d.ts';
    const abs = resolvePath(pkgRoot, rel);
    if (existsSync(abs)) return abs;
  } catch {
    /* fall through */
  }
  const fallback = join(pkgRoot, 'index.d.ts');
  return existsSync(fallback) ? fallback : undefined;
}

/** npm pack 并解压到 cache/npm-packages/<mod>/<version>/，返回包根目录 */
export function ensureNpmPackageExtracted(module: string, version: string): string {
  const outRoot = join(packageCacheRoot, module, safeVersionDir(version));
  const marker = join(outRoot, '.extracted');
  if (existsSync(marker) && resolvePackageEntry(outRoot)) {
    return outRoot;
  }

  mkdirSync(outRoot, { recursive: true });
  // 清空旧内容再解压
  for (const name of readdirSync(outRoot)) {
    rmSync(join(outRoot, name), { recursive: true, force: true });
  }

  const packDir = join(packageCacheRoot, '_tarballs');
  mkdirSync(packDir, { recursive: true });
  const spec = `${packageName(module)}@${version}`;
  console.log(`[experimental-diff] npm pack ${spec}`);
  const tarballName = execSync(`npm pack ${JSON.stringify(spec)} --pack-destination ${JSON.stringify(packDir)}`, {
    encoding: 'utf-8',
    cwd: basePath,
  })
    .trim()
    .split(/\r?\n/)
    .pop()!;
  const tarballPath = join(packDir, tarballName);
  const staging = join(packageCacheRoot, '_staging', module, safeVersionDir(version));
  rmSync(staging, { recursive: true, force: true });
  mkdirSync(staging, { recursive: true });
  execSync(`tar -xzf ${JSON.stringify(tarballPath)} -C ${JSON.stringify(staging)}`, {
    encoding: 'utf-8',
    cwd: basePath,
  });
  // npm pack 解压后内容在 package/
  const packageDir = join(staging, 'package');
  if (!existsSync(packageDir)) {
    throw new Error(`[experimental-diff] npm pack 解压后缺少 package/: ${staging}`);
  }
  // 把 package/* 挪到 outRoot
  for (const name of readdirSync(packageDir)) {
    const from = join(packageDir, name);
    const to = join(outRoot, name);
    renameSync(from, to);
  }
  rmSync(staging, { recursive: true, force: true });
  writeFileSync(marker, `${spec}\n`, 'utf-8');
  return outRoot;
}

function previewEntryPaths(module: string, previewRoot: string): { entry?: string; globs: string[] } {
  const entry = join(previewRoot, `${module}.d.ts`);
  const globs: string[] = [];
  const sub = join(previewRoot, module);
  if (existsSync(sub) && statSync(sub).isDirectory()) {
    globs.push(join(sub, '**', '*.d.ts'));
  }
  return { entry: existsSync(entry) ? entry : undefined, globs };
}

function serializeSurface(surface: SymbolSurface): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const [k, v] of [...surface.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    out[k] = [...v].sort((a, b) => a.localeCompare(b));
  }
  return out;
}

function isFreshDiffCache(path: string, modules: string[]): ExperimentalDiffResult | undefined {
  if (process.env.SAPI_FORCE_FETCH === '1' || !existsSync(path)) return undefined;
  try {
    const data = JSON.parse(readFileSync(path, 'utf-8')) as ExperimentalDiffResult;
    if (!data.modules) return undefined;
    // 请求的模块都已覆盖才复用
    if (modules.every((m) => m in data.modules)) return data;
  } catch {
    return undefined;
  }
  return undefined;
}

export function writeExperimentalDiffCache(result: ExperimentalDiffResult, path = diffCachePath): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(result, null, 2)}\n`, 'utf-8');
}

export function loadExperimentalDiffCache(path = diffCachePath): ExperimentalDiffResult | undefined {
  if (!existsSync(path)) return undefined;
  try {
    return JSON.parse(readFileSync(path, 'utf-8')) as ExperimentalDiffResult;
  } catch {
    return undefined;
  }
}

/** 查询：符号是否整页实验性 */
export function isSymbolExperimental(diff: ModuleExperimentalDiff | undefined, symbolName: string): boolean {
  if (!diff) return false;
  if (diff.allExperimental) return true;
  return diff.experimentalSymbols.includes(symbolName);
}

/** 查询：某符号下仅预览新增的成员 */
export function experimentalMembersOf(
  diff: ModuleExperimentalDiff | undefined,
  symbolName: string,
): string[] {
  if (!diff || diff.allExperimental) return [];
  return diff.experimentalMembers[symbolName] ?? [];
}

/**
 * 为给定模块构建稳定↔预览差异，并写入 cache/experimental-diff.json。
 */
export async function buildExperimentalDiff(
  options: BuildExperimentalDiffOptions,
): Promise<ExperimentalDiffResult> {
  const modules = [...new Set(options.modules)].filter(Boolean).sort();
  const force = options.force === true || process.env.SAPI_FORCE_FETCH === '1';
  if (!force) {
    const cached = isFreshDiffCache(diffCachePath, modules);
    if (cached) {
      console.log(`[experimental-diff] 使用缓存 ${relative(basePath, diffCachePath)}`);
      return cached;
    }
  }

  const previewRoot = options.previewRoot ?? translatedPath;
  const result: ExperimentalDiffResult = {
    generatedAt: new Date().toISOString(),
    modules: {},
  };

  for (const mod of modules) {
    const npmName = packageName(mod);
    let stableVersion: string | undefined;
    let previewVersion: string | undefined;
    try {
      const packument = await fetchNpmPackument(npmName);
      const tracks = resolveTrackVersions(packument.distTags);
      stableVersion = tracks.stable;
      previewVersion = tracks.preview ?? packument.distTags.beta ?? packument.distTags.preview;
      // 文档站锁定版本优先作为 preview 对照说明
      const locked = readLockedPreviewVersion(mod);
      if (locked) previewVersion = locked;
    } catch (error) {
      console.warn(`[experimental-diff] ${mod} packument 失败：${String(error)}`);
    }

    const previewPaths = previewEntryPaths(mod, previewRoot);
    const previewSurface = previewPaths.entry
      ? collectExportSurface(previewPaths.entry, previewPaths.globs)
      : new Map<string, Set<string>>();

    let stableSurface: SymbolSurface | undefined;
    if (stableVersion && stableVersion !== previewVersion) {
      try {
        const pkgRoot = ensureNpmPackageExtracted(mod, stableVersion);
        const entry = resolvePackageEntry(pkgRoot);
        if (entry) {
          const globs: string[] = [];
          // 包内可能有子路径 .d.ts
          globs.push(join(pkgRoot, '**', '*.d.ts'));
          stableSurface = collectExportSurface(entry, globs);
        } else {
          console.warn(`[experimental-diff] ${mod}@${stableVersion} 未找到 types 入口`);
        }
      } catch (error) {
        console.warn(`[experimental-diff] ${mod}@${stableVersion} 拉取失败：${String(error)}`);
      }
    }

    const diff = diffSurfaces(previewSurface, stableSurface, {
      stable: stableVersion,
      preview: previewVersion,
    });
    result.modules[mod] = { module: mod, ...diff };
    console.log(
      `[experimental-diff] ${mod}: stable=${stableVersion ?? '-'} preview=${previewVersion ?? '-'} ` +
        `newSymbols=${diff.experimentalSymbols.length} memberTouches=${Object.keys(diff.experimentalMembers).length}` +
        (diff.allExperimental ? ' (allExperimental)' : ''),
    );
  }

  writeExperimentalDiffCache(result);
  return result;
}

function readLockedPreviewVersion(module: string): string | undefined {
  const snapshot = join(translatedPath, 'package.json');
  if (!existsSync(snapshot)) return undefined;
  try {
    const pkg = JSON.parse(readFileSync(snapshot, 'utf-8')) as {
      dependencies?: Record<string, string>;
    };
    return pkg.dependencies?.[packageName(module)];
  } catch {
    return undefined;
  }
}

/** 供测试：不写盘的内存 diff */
export function buildModuleDiffFromSurfaces(
  module: string,
  preview: SymbolSurface,
  stable: SymbolSurface | undefined,
  versions: { stable?: string; preview?: string },
): ModuleExperimentalDiff {
  return { module, ...diffSurfaces(preview, stable, versions) };
}

export function surfaceFromRecord(record: Record<string, string[]>): SymbolSurface {
  const map: SymbolSurface = new Map();
  for (const [k, v] of Object.entries(record)) {
    map.set(k, new Set(v));
  }
  return map;
}

export { serializeSurface, diffCachePath };
