import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { docsDir, MODULE_ORDER, PRIMARY_MODULES } from './constants.js';
import { readJson, writeJson } from './fs-utils.js';

const VANILLA_NAV_ITEM = {
  text: 'vanilla-data',
  link: '/vanilla-data/',
} as const;

type NavItem = {
  text: string;
  link?: string;
  activeMatch?: string;
  items?: NavItem[];
};

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

/**
 * empty refs：在现有 `_nav.json` 上补齐「更多」中的 vanilla-data，不整表重写。
 * 文件缺失时跳过（仅保留索引页）。
 */
export function ensureVanillaDataNav(options: { docsDir?: string } = {}): boolean {
  const root = options.docsDir ?? docsDir;
  const navPath = join(root, '_nav.json');
  if (!existsSync(navPath)) {
    console.warn('[write-nav] docs/_nav.json 不存在，跳过 vanilla-data 导航补丁');
    return false;
  }

  const nav = readJson<NavItem[]>(navPath);
  if (!Array.isArray(nav)) {
    console.warn('[write-nav] docs/_nav.json 格式无效，跳过 vanilla-data 导航补丁');
    return false;
  }

  let more = nav.find((item) => item.text === '更多');
  if (!more) {
    more = { text: '更多', items: [] };
    const changelogIdx = nav.findIndex((item) => item.text === '更新日志');
    if (changelogIdx >= 0) {
      nav.splice(changelogIdx, 0, more);
    } else {
      nav.push(more);
    }
  }

  const items = more.items ?? (more.items = []);
  if (items.some((item) => item.text === 'vanilla-data' || item.link === '/vanilla-data/')) {
    return true;
  }

  const tagsIdx = items.findIndex(
    (item) => item.text === '标签索引' || item.link === '/tags/',
  );
  const entry = { text: VANILLA_NAV_ITEM.text, link: VANILLA_NAV_ITEM.link };
  if (tagsIdx >= 0) {
    items.splice(tagsIdx, 0, entry);
  } else {
    items.push(entry);
  }

  writeJson(navPath, nav);
  return true;
}
