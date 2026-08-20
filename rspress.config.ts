import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginTypeDoc } from '@rspress/plugin-typedoc';
import { remarkAbbrGlossary } from './script/post/abbreviations.js';
import { pluginSapiPostTypeDoc } from './script/plugins/sapi-post-typedoc.js';
import { setupTypeDoc } from './script/rspress-setup.js';

const SITE_ORIGIN = 'https://sapi.dogelake.cn';
const IMG_ORIGIN = 'https://img.ovo7.cc/sapi';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Minecraft Script API 文档',
      url: SITE_ORIGIN,
      description:
        '基于官方 @minecraft/*.d.ts 生成的中文 Script API 参考（sapi-typedoc）',
      inLanguage: 'zh-CN',
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'sapi-typedoc',
      codeRepository: 'https://github.com/Tanya7z/sapi-typedoc',
      programmingLanguage: 'TypeScript',
      url: SITE_ORIGIN,
    },
  ],
};

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: 'Minecraft Script API 文档',
  description: '基于官方 @minecraft/*.d.ts 生成的中文 Script API 参考（sapi-typedoc）',
  icon: `${IMG_ORIGIN}/logo.png`,
  logo: {
    light: `${IMG_ORIGIN}/sapi_cn_docs_logo.png`,
    dark: `${IMG_ORIGIN}/sapi_cn_docs_logo.png`,
  },
  llms: true,
  builderConfig: {
    html: {
      // 站点级 JSON-LD；不写全局 canonical，避免所有页面都指向首页
      tags: [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(jsonLd),
          head: true,
        },
      ],
    },
  },
  // GA 仅在 Cookie 同意后由 theme 动态加载，不再无条件注入 head
  globalUIComponents: [
    path.join(__dirname, 'theme', 'CookieConsent.tsx'),
    path.join(__dirname, 'theme', 'GoogleAnalytics.tsx'),
  ],
  markdown: {
    // 外部词表缩写；不用过时的 remark-abbr（需页内定义且不适配 remark 13+ / MDX）
    remarkPlugins: [remarkAbbrGlossary()],
    link: {
      checkDeadLinks: {
        excludes: [
          '/sitemap.xml',
          '/llms.txt',
          '/llms-full.txt',
          '/robots.txt',
          '/mcp',
          '/mcp-install.md',
          'https://sapi.dogelake.cn/mcp-install.md',
          'https://sapi.dogelake.cn/mcp',
        ],
      },
    },
  },
  route: {
    exclude: ['superpowers/**/*', 'components/**/*', '**/*.test.ts', 'searchHooks.ts', 'api/**/*'],
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
    // 备案号由 theme/SiteFooter（Layout bottom）全站展示，避免与首页 footer 重复
  },
});
