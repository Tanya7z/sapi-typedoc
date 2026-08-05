import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginTypeDoc } from '@rspress/plugin-typedoc';
import { remarkAbbrGlossary } from './script/post/abbreviations.js';
import { pluginSapiPostTypeDoc } from './script/plugins/sapi-post-typedoc.js';
import { setupTypeDoc } from './script/rspress-setup.js';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: 'Minecraft Script API 文档',
  description: '基于官方 @minecraft/*.d.ts 生成的中文 Script API 参考（sapi-typedoc）',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  llms: true,
  markdown: {
    // 外部词表缩写；不用过时的 remark-abbr（需页内定义且不适配 remark 13+ / MDX）
    remarkPlugins: [remarkAbbrGlossary()],
  },
  route: {
    exclude: ['superpowers/**/*', 'components/**/*'],
  },
  search: {
    searchHooks: path.join(__dirname, 'docs', 'searchHooks.ts'),
  },
  plugins: [
    pluginTypeDoc({
      entryPoints: [
        './translated/common.d.ts',
        './translated/debug-utilities.d.ts',
        './translated/diagnostics.d.ts',
        './translated/math.d.ts',
        './translated/server.d.ts',
        './translated/server-admin.d.ts',
        './translated/server-editor.d.ts',
        './translated/server-gametest.d.ts',
        './translated/server-graphics.d.ts',
        './translated/server-net.d.ts',
        './translated/server-ui.d.ts',
      ],
      outDir: 'api',
      setup: setupTypeDoc,
    }),
    pluginSapiPostTypeDoc(),
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Tanya7z/sapi-typedoc',
      },
    ],
  },
});
