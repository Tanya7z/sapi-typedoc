import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { docsDir, MODULE_ORDER, PRIMARY_MODULES } from './constants.js';
import { writeJson } from './fs-utils.js';

function hasModuleIndex(moduleName: string): boolean {
  const dir = join(docsDir, moduleName);
  return (
    existsSync(join(dir, 'index.mdx')) ||
    existsSync(join(dir, 'index.md')) ||
    existsSync(join(dir, 'index.html'))
  );
}

/**
 * 从 docs 下已有模块目录推断 presentModules（按 MODULE_ORDER）。
 * 用于 typedoc refs 为空时仍能刷新导航（含 vanilla-data 索引）。
 */
export function listPresentModulesFromDocs(): string[] {
  if (!existsSync(docsDir)) return [];
  const dirs = new Set(
    readdirSync(docsDir).filter((name) => {
      try {
        return statSync(join(docsDir, name)).isDirectory();
      } catch {
        return false;
      }
    }),
  );
  return MODULE_ORDER.filter((m) => dirs.has(m) && hasModuleIndex(m));
}

/**
 * 写根 `_nav.json`。
 * presentModules 需显式包含 `vanilla-data`（索引写出成功后由插件传入）。
 */
export function writeRootNav(presentModules: string[]) {
  const primary = PRIMARY_MODULES.filter((m) => presentModules.includes(m));
  const more = MODULE_ORDER.filter(
    (m) => presentModules.includes(m) && !(PRIMARY_MODULES as readonly string[]).includes(m),
  );

  const nav: unknown[] = [
    ...primary.map((m) => ({
      text: m,
      link: `/${m}/`,
      activeMatch: `/${m}/`,
    })),
    {
      text: '更多',
      items: [
        ...more.map((m) => ({ text: m, link: `/${m}/` })),
        { text: '标签索引', link: '/tags/' },
      ],
    },
    {
      text: '更新日志',
      link: '/changelog/',
      activeMatch: '/changelog/',
    },
    {
      text: 'GitHub',
      link: 'https://github.com/Tanya7z/sapi-typedoc',
    },
  ];

  writeJson(join(docsDir, '_nav.json'), nav);
}
