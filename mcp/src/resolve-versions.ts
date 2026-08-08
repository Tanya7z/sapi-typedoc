import type { VersionMapIndex, VersionMapPackage, VersionMapRow } from './types.js';

export type ResolveTrack = 'stable' | 'preview' | 'auto';

export type ResolvedPackage = {
  module: string;
  packageName: string;
  apiVersion: string;
  /** Bedrock manifest dependencies[].version */
  manifest: string;
  /** 匹配到的表内 MC 版本 */
  matchedMc: string;
  track: 'stable' | 'preview';
  /** npm 完整版本（若映射里有 dist-tag） */
  npmVersion?: string;
};

export type ResolveVersionsResult = {
  inputGameVersion: string;
  normalizedGameVersion: string;
  track: 'stable' | 'preview';
  minEngineVersion: number[];
  packages: Record<string, ResolvedPackage>;
  /** 常用短键，如 server / serverUi */
  aliases: {
    server?: string;
    serverUi?: string;
    serverNet?: string;
    vanillaData?: string;
  };
  warnings: string[];
};

export function compareGameVersions(a: string, b: string): number {
  const pa = a.split('.').map((x) => Number.parseInt(x, 10) || 0);
  const pb = b.split('.').map((x) => Number.parseInt(x, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

/** 规范化用户输入：去 v 前缀、空白；保留数字段 */
export function normalizeGameVersion(raw: string): string {
  let s = raw.trim().replace(/^v/i, '');
  s = s.replace(/[^\d.]/g, (ch) => (ch === '.' ? '.' : ''));
  s = s.replace(/\.+/g, '.').replace(/^\./, '').replace(/\.$/, '');
  return s;
}

export function parseMinEngineVersion(gameVersion: string): number[] {
  const parts = normalizeGameVersion(gameVersion)
    .split('.')
    .map((x) => Number.parseInt(x, 10))
    .filter((n) => Number.isFinite(n));
  if (parts.length === 0) return [1, 21, 0];
  // Bedrock min_engine_version 通常取前三段
  return parts.slice(0, 3);
}

function compareApiVersion(a: string, b: string): number {
  const pa = a.split('.').map((x) => Number.parseInt(x, 10) || 0);
  const pb = b.split('.').map((x) => Number.parseInt(x, 10) || 0);
  for (let i = 0; i < 3; i += 1) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

function inferTrack(gameVersion: string, track: ResolveTrack): 'stable' | 'preview' {
  if (track === 'stable' || track === 'preview') return track;
  // 四段及以上常见于预览构建号（1.26.50.20）
  const parts = normalizeGameVersion(gameVersion).split('.');
  return parts.length >= 4 ? 'preview' : 'stable';
}

function toCamelModule(module: string): string {
  return module.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

function pickManifest(
  pkg: VersionMapPackage,
  apiVersion: string,
  track: 'stable' | 'preview',
): { manifest: string; npmVersion?: string } {
  if (track === 'stable') {
    const npm = pkg.npmStable;
    // 若 npm latest 的核心版本正好等于解析结果，用完整 npm 串（便于 package.json）
    if (npm && npm.startsWith(apiVersion)) {
      return { manifest: apiVersion, npmVersion: npm };
    }
    return { manifest: apiVersion, npmVersion: npm?.startsWith(apiVersion) ? npm : undefined };
  }

  const npm = pkg.npmPreview;
  if (npm) {
    const core = /^(\d+\.\d+\.\d+)/.exec(npm)?.[1];
    if (core === apiVersion) {
      // 2.11.0-beta.1.26... → manifest 2.11.0-beta
      const m = /^(\d+\.\d+\.\d+(?:-[a-zA-Z]+)?)/.exec(npm);
      return { manifest: m?.[1] ?? `${apiVersion}-beta`, npmVersion: npm };
    }
  }
  // 预览轨常见 beta 后缀；vanilla-data 等用 preview 形态
  if (pkg.module === 'vanilla-data') {
    return { manifest: apiVersion, npmVersion: npm };
  }
  return { manifest: `${apiVersion}-beta`, npmVersion: npm };
}

function resolvePackage(
  pkg: VersionMapPackage,
  gameVersion: string,
  track: 'stable' | 'preview',
): ResolvedPackage | undefined {
  const field: keyof VersionMapRow = track === 'stable' ? 'stableMc' : 'previewMc';
  let best: VersionMapRow | undefined;
  for (const row of pkg.rows) {
    const mc = row[field];
    if (!mc) continue;
    if (compareGameVersions(mc, gameVersion) > 0) continue; // 表内 MC 高于玩家版本，不可用
    if (!best || compareApiVersion(row.apiVersion, best.apiVersion) > 0) {
      best = row;
    }
  }

  // vanilla-data：行可能只有 apiVersion≈游戏版本
  if (!best && pkg.module === 'vanilla-data') {
    for (const row of pkg.rows) {
      if (compareGameVersions(row.apiVersion, gameVersion) > 0) continue;
      if (!best || compareApiVersion(row.apiVersion, best.apiVersion) > 0) {
        best = row;
      }
    }
  }

  if (!best) return undefined;
  const matchedMc = (best[field] ?? best.apiVersion)!;
  const { manifest, npmVersion } = pickManifest(pkg, best.apiVersion, track);
  return {
    module: pkg.module,
    packageName: pkg.packageName,
    apiVersion: best.apiVersion,
    manifest,
    matchedMc,
    track,
    npmVersion,
  };
}

/**
 * 由游戏版本解析各 @minecraft/* 包的推荐 API 版本。
 * 规则：在指定轨道上，选取「表内 MC ≤ 玩家版本」中 API 版本最高的一行。
 */
export function resolveVersions(
  map: VersionMapIndex,
  options: {
    gameVersion: string;
    track?: ResolveTrack;
    /** 只解析这些短模块名；默认全部 */
    modules?: string[];
  },
): ResolveVersionsResult {
  const normalizedGameVersion = normalizeGameVersion(options.gameVersion);
  if (!normalizedGameVersion) {
    throw new Error('gameVersion 无效，请传入如 1.26.42 或 1.26.50.20');
  }
  const track = inferTrack(normalizedGameVersion, options.track ?? 'auto');
  const warnings: string[] = [];
  if ((options.track ?? 'auto') === 'auto') {
    warnings.push(
      `track=auto → 推断为 ${track}（四段版本号倾向 preview；可显式传 track=stable|preview）`,
    );
  }

  const want = options.modules?.map((m) => m.trim().toLowerCase());
  const packages: Record<string, ResolvedPackage> = {};

  for (const pkg of Object.values(map.packages)) {
    if (want && !want.includes(pkg.module.toLowerCase())) continue;
    const resolved = resolvePackage(pkg, normalizedGameVersion, track);
    if (!resolved) {
      warnings.push(`${pkg.packageName}: 在 ${track} 轨未找到 ≤ ${normalizedGameVersion} 的映射行`);
      continue;
    }
    packages[pkg.packageName] = resolved;
  }

  const aliases: ResolveVersionsResult['aliases'] = {};
  const server = packages['@minecraft/server'];
  const serverUi = packages['@minecraft/server-ui'];
  const serverNet = packages['@minecraft/server-net'];
  const vanillaData = packages['@minecraft/vanilla-data'];
  if (server) aliases.server = server.manifest;
  if (serverUi) aliases.serverUi = serverUi.manifest;
  if (serverNet) aliases.serverNet = serverNet.manifest;
  if (vanillaData) aliases.vanillaData = vanillaData.manifest;

  return {
    inputGameVersion: options.gameVersion,
    normalizedGameVersion,
    track,
    minEngineVersion: parseMinEngineVersion(normalizedGameVersion),
    packages,
    aliases,
    warnings,
  };
}

export function formatResolveVersionsResult(result: ResolveVersionsResult): string {
  const lines = [
    `# 版本解析`,
    `游戏版本: ${result.normalizedGameVersion}（输入: ${result.inputGameVersion}）`,
    `轨道: ${result.track}`,
    `min_engine_version: [${result.minEngineVersion.join(', ')}]`,
    '',
    '## 推荐包版本',
  ];
  const entries = Object.values(result.packages).sort((a, b) =>
    a.packageName.localeCompare(b.packageName),
  );
  for (const p of entries) {
    lines.push(
      `- ${p.packageName}: manifest=\`${p.manifest}\` api=${p.apiVersion} matchedMc=${p.matchedMc}` +
        (p.npmVersion ? ` npm=${p.npmVersion}` : ''),
    );
  }
  if (result.aliases.server || result.aliases.serverUi) {
    lines.push('', '## 别名摘要');
    if (result.aliases.server) lines.push(`- server: ${result.aliases.server}`);
    if (result.aliases.serverUi) lines.push(`- serverUi: ${result.aliases.serverUi}`);
    if (result.aliases.serverNet) lines.push(`- serverNet: ${result.aliases.serverNet}`);
    if (result.aliases.vanillaData) lines.push(`- vanillaData: ${result.aliases.vanillaData}`);
  }
  if (result.warnings.length) {
    lines.push('', '## 提示', ...result.warnings.map((w) => `- ${w}`));
  }
  lines.push(
    '',
    '可用 init_script_project 并传入相同 gameVersion / track 生成匹配脚手架。',
  );
  return lines.join('\n');
}

/** 供测试：按模块取包 */
export function getPackageByModule(
  map: VersionMapIndex,
  module: string,
): VersionMapPackage | undefined {
  const m = module.toLowerCase().replace(/^@minecraft\//, '');
  return Object.values(map.packages).find((p) => p.module.toLowerCase() === m);
}

export { toCamelModule };
