import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';
import { apiDir, docsDir, KIND_DIRS, MODULE_ORDER } from './constants.js';
import { moveFileSync, rmTreeSync } from './fs-utils.js';

export type MemberRef = {
  module: string;
  kind: string;
  symbolName: string;
  fileName: string; // e.g. Player.mdx
  absPath: string;
};

export type RestructureOptions = {
  docsDir?: string;
  apiDir?: string;
};

function destExt(file: string): '.md' | '.mdx' {
  return /\.mdx$/i.test(file) ? '.mdx' : '.md';
}

/** 从 `server.Player.md` 解析模块与符号 */
export function parseApiFileName(file: string): { module: string; symbol: string } | undefined {
  const base = basename(file).replace(/\.(md|mdx)$/i, '');
  const dot = base.indexOf('.');
  if (dot <= 0) return undefined;
  return { module: base.slice(0, dot), symbol: base.slice(dot + 1) };
}

/**
 * 模块概览页：`api/modules/server.md`（无第二段）→ `docs/server/index.md`
 * 仅在 kind 为 modules 时生效。
 */
export function parseModuleOverviewFileName(file: string): string | undefined {
  const base = basename(file).replace(/\.(md|mdx)$/i, '');
  if (!base || base.includes('.')) return undefined;
  return base;
}

/** 统计 docs/api 下可搬迁的成员/概览文件数 */
export function countMovableApiSources(apiRoot: string = apiDir): number {
  let count = 0;
  for (const kind of KIND_DIRS) {
    const kindPath = join(apiRoot, kind);
    if (!existsSync(kindPath) || !statSync(kindPath).isDirectory()) continue;
    for (const file of readdirSync(kindPath)) {
      if (!/\.(md|mdx)$/i.test(file)) continue;
      if (kind === 'modules' && parseModuleOverviewFileName(file)) {
        count += 1;
        continue;
      }
      if (parseApiFileName(file)) count += 1;
    }
  }
  return count;
}

export function restructureModules(options: RestructureOptions = {}): MemberRef[] {
  const root = options.docsDir ?? docsDir;
  const api = options.apiDir ?? apiDir;
  const refs: MemberRef[] = [];

  const movable = countMovableApiSources(api);
  if (movable === 0) {
    console.warn(
      '[restructure-modules] docs/api 下没有可搬迁的成员文件（mod.Symbol.md / modules 概览）；跳过清理与重组，保留现有模块目录',
    );
    return [];
  }

  // 清理旧模块目录（保留 api/changelog/tags/public/components/superpowers）
  const reserved = new Set([
    'api',
    'changelog',
    'tags',
    'public',
    'components',
    'superpowers',
    'node_modules',
  ]);
  for (const name of readdirSync(root)) {
    if (reserved.has(name)) continue;
    if ((MODULE_ORDER as readonly string[]).includes(name)) {
      rmTreeSync(join(root, name));
    }
  }

  let skippedUnparseable = 0;
  let overviewCount = 0;

  for (const kind of KIND_DIRS) {
    const kindPath = join(api, kind);
    if (!existsSync(kindPath) || !statSync(kindPath).isDirectory()) continue;
    for (const file of readdirSync(kindPath)) {
      if (!/\.(md|mdx)$/i.test(file)) continue;

      // 模块概览：无点号文件名 → docs/<mod>/index.md(x)
      if (kind === 'modules') {
        const overviewMod = parseModuleOverviewFileName(file);
        if (overviewMod) {
          const destDir = join(root, overviewMod);
          mkdirSync(destDir, { recursive: true });
          const destName = `index${destExt(file)}`;
          const dest = join(destDir, destName);
          moveFileSync(join(kindPath, file), dest);
          refs.push({
            module: overviewMod,
            kind,
            symbolName: 'index',
            fileName: destName,
            absPath: dest,
          });
          overviewCount += 1;
          continue;
        }
      }

      const parsed = parseApiFileName(file);
      if (!parsed) {
        skippedUnparseable += 1;
        continue;
      }
      const destDir = join(root, parsed.module, kind);
      mkdirSync(destDir, { recursive: true });
      const destName = `${parsed.symbol}${destExt(file)}`;
      const dest = join(destDir, destName);
      moveFileSync(join(kindPath, file), dest);
      refs.push({
        module: parsed.module,
        kind,
        symbolName: parsed.symbol,
        fileName: destName,
        absPath: dest,
      });
    }
  }

  if (overviewCount > 0) {
    console.log(`[restructure-modules] moved ${overviewCount} module overview page(s) to docs/<mod>/index`);
  }
  if (skippedUnparseable > 0) {
    console.warn(
      `[restructure-modules] skipped ${skippedUnparseable} unparseable file(s) under docs/api/ (非 mod.Symbol 命名)`,
    );
  }

  return refs;
}
