/**
 * 构建 MCP 混合索引：api-index / examples-index / versions → doc_build/mcp/
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { DOMAIN_TAG_LEGEND } from '../domain-tags.js';
import { MODULE_ORDER } from '../post/constants.js';
import type { ExperimentalDiffResult } from '../post/experimental-diff.js';
import type { TagsIndexData } from '../post/tags-index.js';
import {
  basePath,
  buildMetaPath,
  docBuildPath,
  parsePackageVersion,
  translatedPath,
} from '../utils.js';
import {
  buildExperimentalLookup,
  buildTagLookup,
  extractModuleSymbols,
} from './extract-symbols.js';
import type {
  ApiIndex,
  ExampleRef,
  ExamplesIndex,
  PackageVersionInfo,
  VersionsIndex,
} from './types.js';

type BuildMeta = {
  dependencies?: Record<string, string>;
  examples?: Record<
    string,
    Array<{
      content: string;
      hash?: string;
      fileName: string;
      sources?: Array<{ source: string; path: string }>;
    }>
  >;
};

function readJsonSafe<T>(path: string): T | undefined {
  if (!existsSync(path)) return undefined;
  try {
    return JSON.parse(readFileSync(path, 'utf-8')) as T;
  } catch {
    return undefined;
  }
}

/** npm 完整版本 → manifest 短版本（2.11.0-beta.1.26… → 2.11.0-beta） */
export function toManifestVersion(locked: string): string {
  const parsed = parsePackageVersion(locked);
  if (parsed) return parsed.version;
  const m = /^(\d+\.\d+\.\d+(?:-[a-zA-Z]+)?)/.exec(locked);
  return m?.[1] ?? locked;
}

export function buildVersionsIndex(
  meta: BuildMeta | undefined,
  diff: ExperimentalDiffResult | undefined,
): VersionsIndex {
  const packages: Record<string, PackageVersionInfo> = {};
  const deps = meta?.dependencies ?? {};
  for (const [name, locked] of Object.entries(deps)) {
    const mod = name.replace(/^@minecraft\//, '');
    const modDiff = diff?.modules[mod];
    const info: PackageVersionInfo = {
      locked,
      manifest: toManifestVersion(locked),
    };
    if (modDiff?.stableVersion) info.stable = modDiff.stableVersion;
    if (modDiff?.previewVersion) info.preview = modDiff.previewVersion;
    const gv = parsePackageVersion(locked)?.gameVersion;
    if (gv) info.gameVersion = gv;
    packages[name] = info;
  }

  let gameVersion: string | undefined;
  for (const info of Object.values(packages)) {
    if (info.gameVersion) {
      gameVersion = info.gameVersion;
      break;
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    gameVersion,
    packages,
  };
}

export function buildExamplesIndex(meta: BuildMeta | undefined): ExamplesIndex {
  const examples: ExampleRef[] = [];
  const bySymbol: Record<string, number[]> = {};

  const raw = meta?.examples ?? {};
  for (const group of Object.values(raw)) {
    for (const ex of group) {
      const symbols = (ex.sources ?? []).map((s) => `${s.source}:${s.path}`);
      const idx = examples.length;
      examples.push({
        fileName: ex.fileName,
        hash: ex.hash,
        content: ex.content,
        symbols,
      });
      for (const key of symbols) {
        if (!bySymbol[key]) bySymbol[key] = [];
        bySymbol[key].push(idx);
      }
      // 也挂到符号根（Player.teleport → Player）
      for (const key of symbols) {
        const root = key.replace(/^([^:]+:[^.]+).*$/, '$1');
        if (root !== key) {
          if (!bySymbol[root]) bySymbol[root] = [];
          if (!bySymbol[root].includes(idx)) bySymbol[root].push(idx);
        }
      }
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    examples,
    bySymbol,
  };
}

export type GenerateApiIndexOptions = {
  translatedRoot?: string;
  tagsPath?: string;
  diffPath?: string;
  metaPath?: string;
  outDir?: string;
  modules?: string[];
};

export function generateApiIndex(options: GenerateApiIndexOptions = {}): {
  api: ApiIndex;
  examples: ExamplesIndex;
  versions: VersionsIndex;
  outDir: string;
} {
  const translatedRoot = options.translatedRoot ?? translatedPath;
  const tagsPath = options.tagsPath ?? join(basePath, 'docs', 'tags', '_data.json');
  const diffPath = options.diffPath ?? join(basePath, 'cache', 'experimental-diff.json');
  const metaPath = options.metaPath ?? buildMetaPath;
  // 勿使用 doc_build/mcp/：会与 Rspress 的 mcp.html（路由 /mcp/）冲突导致 403
  const outDir = options.outDir ?? join(docBuildPath, 'mcp-data');
  const modules = options.modules ?? [...MODULE_ORDER];

  const tagsData = readJsonSafe<TagsIndexData>(tagsPath);
  const tagLookup = buildTagLookup(tagsData?.items ?? []);
  const diff = readJsonSafe<ExperimentalDiffResult>(diffPath);
  const meta = readJsonSafe<BuildMeta>(metaPath);

  const symbols = [];
  for (const mod of modules) {
    const experimental = buildExperimentalLookup(diff?.modules[mod]);
    const extracted = extractModuleSymbols(mod, translatedRoot, {
      tagLookup,
      experimental,
    });
    symbols.push(...extracted);
  }

  const api: ApiIndex = {
    generatedAt: new Date().toISOString(),
    symbolCount: symbols.length,
    legend: (tagsData?.legend ?? DOMAIN_TAG_LEGEND).map((x) => ({
      tag: x.tag,
      meaning: x.meaning,
    })),
    symbols,
  };

  const examples = buildExamplesIndex(meta);
  const versions = buildVersionsIndex(meta, diff);

  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'api-index.json'), `${JSON.stringify(api)}\n`, 'utf-8');
  writeFileSync(join(outDir, 'examples-index.json'), `${JSON.stringify(examples)}\n`, 'utf-8');
  writeFileSync(
    join(outDir, 'versions.json'),
    `${JSON.stringify(versions, null, 2)}\n`,
    'utf-8',
  );

  console.log(
    `[mcp-index] symbols=${api.symbolCount} examples=${examples.examples.length} packages=${Object.keys(versions.packages).length} -> ${outDir}`,
  );

  return { api, examples, versions, outDir };
}

function main() {
  generateApiIndex();
}

const isDirect =
  process.argv[1] &&
  (process.argv[1].endsWith('generate-api-index.ts') ||
    process.argv[1].endsWith('generate-api-index.js'));

if (isDirect) {
  main();
}
