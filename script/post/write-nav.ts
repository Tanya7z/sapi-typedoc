import { join } from 'node:path';
import { docsDir, MODULE_ORDER, PRIMARY_MODULES } from './constants.js';
import { writeJson } from './fs-utils.js';

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
