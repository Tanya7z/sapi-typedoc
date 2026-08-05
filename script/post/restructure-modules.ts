import { existsSync, mkdirSync, readdirSync, renameSync, rmSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';
import { apiDir, docsDir, KIND_DIRS, MODULE_ORDER } from './constants.js';

export type MemberRef = {
  module: string;
  kind: string;
  symbolName: string;
  fileName: string; // e.g. Player.mdx
  absPath: string;
};

/** 从 `server.Player.md` 解析模块与符号 */
export function parseApiFileName(file: string): { module: string; symbol: string } | undefined {
  const base = basename(file).replace(/\.(md|mdx)$/i, '');
  const dot = base.indexOf('.');
  if (dot <= 0) return undefined;
  return { module: base.slice(0, dot), symbol: base.slice(dot + 1) };
}

export function restructureModules(): MemberRef[] {
  const refs: MemberRef[] = [];
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
  for (const name of readdirSync(docsDir)) {
    if (reserved.has(name)) continue;
    if ((MODULE_ORDER as readonly string[]).includes(name)) {
      rmSync(join(docsDir, name), { recursive: true, force: true });
    }
  }

  for (const kind of KIND_DIRS) {
    const kindPath = join(apiDir, kind);
    if (!existsSync(kindPath) || !statSync(kindPath).isDirectory()) continue;
    for (const file of readdirSync(kindPath)) {
      if (!/\.(md|mdx)$/i.test(file)) continue;
      const parsed = parseApiFileName(file);
      if (!parsed) continue;
      const destDir = join(docsDir, parsed.module, kind);
      mkdirSync(destDir, { recursive: true });
      const destName = `${parsed.symbol}${file.endsWith('.mdx') ? '.mdx' : '.md'}`;
      const dest = join(destDir, destName);
      renameSync(join(kindPath, file), dest);
      refs.push({
        module: parsed.module,
        kind,
        symbolName: parsed.symbol,
        fileName: destName,
        absPath: dest,
      });
    }
  }
  return refs;
}
