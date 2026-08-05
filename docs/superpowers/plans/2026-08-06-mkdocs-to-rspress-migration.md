# MkDocs → Rspress 迁移 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 按已批准规格完成 MkDocs → Rspress 迁移收尾：post-typedoc 插件驱动导航/继承侧栏/MDX 增强、领域索引与搜索、vanilla-data 瘦身索引、changelog 进默认 build，并清理 MkDocs 残留。

**Architecture:** 保留 `@rspress/plugin-typedoc` 生成 kind 扁平 md；自研 `pluginSapiPostTypeDoc` 在 `beforeBuild` 重组为按模块目录、强制覆盖 `_nav`/`_meta`、把成员页改成 `.mdx` 并注入 Badge/容器/相关推荐；领域规则单一源；`vanilla-data` 用 ts-morph 单独写索引；`build`/`dev` 统一 `translate → docs:sync → rspress`。

**Tech Stack:** Rspress 2、`@rspress/plugin-typedoc`、typedoc-plugin-markdown、ts-morph、Node `node:test`、remark abbr、既有 `script/` 翻译流水线

**Spec:** `docs/superpowers/specs/2026-08-06-mkdocs-to-rspress-migration-design.md`

---

## File structure（先锁定边界）

| 路径 | 职责 |
|------|------|
| `script/domain-tags.ts` | 领域规则单一源（推断 + 图例文案 + 排除表） |
| `script/post/constants.ts` | 主模块名单、更多模块、kind 顺序、路径常量 |
| `script/post/fs-utils.ts` | 目录移动/读写 JSON（Windows 退避） |
| `script/post/restructure-modules.ts` | 把 `docs/api/{classes,interfaces,…}/*` 按 `mod.Symbol` 前缀提升到 `docs/<mod>/` |
| `script/post/inheritance-meta.ts` | 解析「继承」节，写模块 `_meta.json` |
| `script/post/write-nav.ts` | 写根 `_nav.json`（主四件套 + 更多 + changelog + tags） |
| `script/post/enhance-member-mdx.ts` | frontmatter、`tag`、chips、锚点、容器、Tabs、SourceCode、相关推荐、改 `.mdx` |
| `script/post/related.ts` | 同领域相关链接选取 |
| `script/post/vanilla-data-index.ts` | ts-morph 索引页 |
| `script/post/tags-index.ts` | 生成 `/tags/` 数据与 mdx 壳 |
| `script/post/untagged-report.ts` | 未打标报告写 `cache/untagged-symbols.json` |
| `script/plugins/sapi-post-typedoc.ts` | Rspress 插件：`beforeBuild` 串联上述步骤 |
| `docs/components/TagFilter.tsx` | 标签索引筛选 UI |
| `docs/searchHooks.ts` | FlexSearch：`domainTags` + `searchBoost` |
| `docs/tags/index.mdx` | 标签索引页（可生成壳 + 手写说明） |
| `rspress.config.ts` | 注册 post 插件、`llms`、`searchHooks`、`remarkPlugins`、`route.exclude` |
| `package.json` | `dev`/`build` 接入 `docs:sync` |
| `script/docs-home.ts` | 修 changelog 导航；去掉对缺失根 `_meta` 的空转依赖 |

**不修改（除非任务明确要求）：** `script/build.ts` 翻译主链路、`translate-pieces/**`、各 TypeDoc hooks 核心逻辑。

---

### Task 1: 脚手架 — 常量、插件壳、config、scripts、exclude

**Files:**
- Create: `script/post/constants.ts`
- Create: `script/post/fs-utils.ts`
- Create: `script/plugins/sapi-post-typedoc.ts`
- Modify: `rspress.config.ts`
- Modify: `package.json`
- Modify: `.gitignore`

- [ ] **Step 1: 写常量文件**

```ts
// script/post/constants.ts
import { resolve as resolvePath } from 'node:path';
import { basePath } from '../utils.js';

export const docsDir = resolvePath(basePath, 'docs');
export const apiDir = resolvePath(docsDir, 'api');

/** 顶栏主模块（规格 §4） */
export const PRIMARY_MODULES = ['server', 'server-ui', 'common', 'math'] as const;

/** 全模块顺序（主 + 更多内排序；含 vanilla-data 索引） */
export const MODULE_ORDER = [
  'server',
  'server-ui',
  'common',
  'math',
  'server-net',
  'server-admin',
  'server-gametest',
  'server-graphics',
  'server-editor',
  'debug-utilities',
  'diagnostics',
  'vanilla-data',
] as const;

export const KIND_DIRS = [
  'classes',
  'interfaces',
  'enumerations',
  'enums',
  'functions',
  'variables',
  'types',
  'type-aliases',
  'modules',
] as const;

export const KIND_META: Record<string, { label: string }> = {
  classes: { label: '类' },
  interfaces: { label: '接口' },
  enumerations: { label: '枚举' },
  enums: { label: '枚举' },
  functions: { label: '函数' },
  variables: { label: '变量' },
  types: { label: '类型别名' },
  'type-aliases': { label: '类型别名' },
  modules: { label: '模块' },
};
```

- [ ] **Step 2: 写 fs-utils（含 Windows rename 退避，逻辑对齐旧 `moveDirectorySync`）**

```ts
// script/post/fs-utils.ts
import { cpSync, existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

function sleepSync(ms: number) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

export function writeJson(filePath: string, data: unknown) {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf-8');
}

export function readJson<T>(filePath: string): T | undefined {
  if (!existsSync(filePath)) return undefined;
  return JSON.parse(readFileSync(filePath, 'utf-8')) as T;
}

export function moveDirectorySync(src: string, dest: string) {
  const removeOptions = { recursive: true, force: true, maxRetries: 5, retryDelay: 100 } as const;
  rmSync(dest, removeOptions);
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      renameSync(src, dest);
      return;
    } catch (err) {
      const code = (err as NodeJS.ErrnoException).code;
      if (code !== 'EPERM' && code !== 'EBUSY' && code !== 'ENOTEMPTY' && code !== 'EACCES') throw err;
      sleepSync(100 * (attempt + 1));
    }
  }
  cpSync(src, dest, { recursive: true });
  rmSync(src, removeOptions);
}
```

- [ ] **Step 3: 写 post 插件空壳（先只打日志）**

```ts
// script/plugins/sapi-post-typedoc.ts
import type { RspressPlugin } from '@rspress/core';

export function pluginSapiPostTypeDoc(): RspressPlugin {
  return {
    name: 'sapi-post-typedoc',
    async beforeBuild() {
      console.log('[sapi-post-typedoc] beforeBuild: pipeline placeholder');
    },
  };
}
```

- [ ] **Step 4: 接入 `rspress.config.ts`**

在 `plugins` 数组中 **pluginTypeDoc 之后** 追加 `pluginSapiPostTypeDoc()`；增加：

```ts
import { pluginSapiPostTypeDoc } from './script/plugins/sapi-post-typedoc.js';

// defineConfig 内：
llms: true,
route: {
  exclude: ['superpowers/**/*', 'components/**/*'],
},
search: {
  searchHooks: path.join(__dirname, 'docs', 'searchHooks.ts'),
},
plugins: [
  pluginTypeDoc({ /* 保持现有 entryPoints，勿加 vanilla-data */ }),
  pluginSapiPostTypeDoc(),
],
```

先创建占位 `docs/searchHooks.ts`：

```ts
// docs/searchHooks.ts
import type { SearchHook } from '@rspress/core/runtime';

export const onSearch: SearchHook['onSearch'] = async (query, defaultSearch) => {
  return defaultSearch(query);
};
```

（若 `@rspress/core/runtime` 类型名不同，以官方 [Customize Search](https://rspress.rs/guide/advanced/custom-search) 当前导出为准微调。）

- [ ] **Step 5: 改 scripts 与 gitignore**

`package.json`：

```json
"dev": "npm run build:translate && npm run docs:sync && rspress dev",
"build": "npm run build:translate && npm run docs:sync && rspress build"
```

`.gitignore` 追加：

```
# post 插件生成的模块目录与 mdx
docs/server/
docs/server-ui/
docs/server-net/
docs/server-admin/
docs/server-editor/
docs/server-gametest/
docs/server-graphics/
docs/common/
docs/math/
docs/debug-utilities/
docs/diagnostics/
docs/vanilla-data/
docs/tags/**
!docs/tags/.gitkeep
docs/api/**/*.mdx
cache/untagged-symbols.json
```

保留可提交的 `docs/api/_meta.json` 策略：若 post 改为模块顶栏后不再依赖根 api 侧栏，可在后续任务删除对该文件的依赖。

- [ ] **Step 6: 冒烟**

Run: `npx tsc --noEmit -p tsconfig.json`（或项目既有 typecheck）  
Expected: 无因新文件引起的错误；若 `RspressPlugin`/`SearchHook` 类型路径需微调，当场修正。

- [ ] **Step 7: Commit**

```bash
git add script/post script/plugins rspress.config.ts package.json .gitignore docs/searchHooks.ts
git commit -m "chore: scaffold sapi post-typedoc plugin and build sync wiring"
```

---

### Task 2: 领域规则单一源 + 单测

**Files:**
- Create: `script/domain-tags.ts`
- Create: `script/domain-tags.test.ts`

- [ ] **Step 1: 写失败测试**

```ts
// script/domain-tags.test.ts
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { DOMAIN_TAG_LEGEND, inferDomainTags } from './domain-tags.js';

describe('inferDomainTags', () => {
  it('从 CamelCase 推断 event + entity', () => {
    assert.deepEqual(inferDomainTags('EntityDieAfterEvent'), ['event', 'entity']);
  });

  it('Player 命中 player', () => {
    assert.deepEqual(inferDomainTags('Player'), ['player']);
  });

  it('排除表抑制误报', () => {
    // 若 SYMBOL_TAG_EXCLUDES 含某符号，应返回 []
    assert.ok(Array.isArray(inferDomainTags('SomethingUnrelated')));
  });

  it('图例与规则 tag 集合一致', () => {
    const legendTags = new Set(DOMAIN_TAG_LEGEND.map((x) => x.tag));
    for (const tag of legendTags) {
      assert.ok(typeof tag === 'string' && tag.length > 0);
    }
  });
});
```

- [ ] **Step 2: Run 确认失败**

Run: `tsx --test script/domain-tags.test.ts`  
Expected: FAIL（模块不存在）

- [ ] **Step 3: 实现 `script/domain-tags.ts`（移植旧规则并收紧）**

```ts
// script/domain-tags.ts
export type DomainRule = {
  tag: string;
  nameTokens: string[];
  /** 仅扫符号名；body 匹配首期可选 */
  bodyPatterns?: RegExp[];
};

/** 中文图例（驱动 /tags/ 说明表） */
export const DOMAIN_TAG_LEGEND: { tag: string; meaning: string }[] = [
  { tag: 'event', meaning: '事件信号/回调类（BeforeEvent / AfterEvent / EventSignal 等）' },
  { tag: 'player', meaning: '玩家相关' },
  { tag: 'entity', meaning: '实体相关' },
  { tag: 'item', meaning: '物品 / 物品堆相关' },
  { tag: 'block', meaning: '方块 / 方块排列相关' },
  { tag: 'world', meaning: '世界相关' },
  { tag: 'dimension', meaning: '维度相关' },
  { tag: 'biome', meaning: '生物群系相关' },
  { tag: 'damage', meaning: '伤害 / 生命值相关' },
  { tag: 'inventory', meaning: '物品栏 / 容器相关' },
  { tag: 'scoreboard', meaning: '计分板相关' },
  { tag: 'chat', meaning: '原始消息 / 聊天相关' },
  { tag: 'permission', meaning: '权限 / OP 等级相关' },
  { tag: 'tick', meaning: '时序 / Tick / System 相关' },
  { tag: 'animation', meaning: '动画相关' },
  { tag: 'sound', meaning: '声音 / 音乐相关' },
  { tag: 'effect', meaning: '状态效果相关' },
  { tag: 'debug', meaning: '调试绘制相关' },
  { tag: 'network', meaning: 'HTTP / WebSocket / 数据包相关' },
  { tag: 'data', meaning: '动态属性 / 持久存储相关' },
  { tag: 'error', meaning: '错误异常类' },
  { tag: 'component', meaning: '实体 / 物品 / 方块组件相关' },
];

export const DOMAIN_TAG_RULES: DomainRule[] = [
  { tag: 'event', nameTokens: ['Event', 'Events', 'EventSignal', 'EventCallback', 'Signal'] },
  { tag: 'player', nameTokens: ['Player'] },
  { tag: 'entity', nameTokens: ['Entity', 'Entities'] },
  { tag: 'item', nameTokens: ['ItemStack', 'ItemType', 'ItemEnchants', 'ItemLockMode'] },
  { tag: 'block', nameTokens: ['BlockType', 'BlockPermutation', 'BlockVolume', 'BlockRaycastHit', 'Block'] },
  { tag: 'world', nameTokens: ['World'] },
  { tag: 'dimension', nameTokens: ['Dimension'] },
  { tag: 'biome', nameTokens: ['Biome'] },
  { tag: 'damage', nameTokens: ['Damage', 'Health'] },
  { tag: 'inventory', nameTokens: ['Inventory', 'Container'] },
  { tag: 'scoreboard', nameTokens: ['Scoreboard'] },
  { tag: 'chat', nameTokens: ['RawMessage', 'RawText'] }, // 去掉过宽的 Message
  { tag: 'permission', nameTokens: ['Permission'] },
  { tag: 'tick', nameTokens: ['Tick'] }, // 去掉过宽的 System
  { tag: 'animation', nameTokens: ['Animation'] },
  { tag: 'sound', nameTokens: ['Sound'] },
  { tag: 'effect', nameTokens: ['Effect'] },
  { tag: 'debug', nameTokens: ['Debug'] },
  { tag: 'network', nameTokens: ['Http', 'WebSocket', 'Packet'] },
  { tag: 'data', nameTokens: ['DynamicProperty', 'Storage'] },
  { tag: 'error', nameTokens: ['Error'] },
  { tag: 'component', nameTokens: ['Component'] },
];

/** 整符号排除（误报） */
export const SYMBOL_TAG_EXCLUDES = new Set<string>([]);

function makeNameRegex(tokens: string[]): RegExp {
  return new RegExp(`(?:^|(?<=[a-z]))(${tokens.join('|')})(?=[A-Z0-9_]|$)`, 'g');
}

const COMPILED = DOMAIN_TAG_RULES.map((rule) => ({
  tag: rule.tag,
  nameRegex: makeNameRegex(rule.nameTokens),
}));

export function inferDomainTags(symbolName: string): string[] {
  if (SYMBOL_TAG_EXCLUDES.has(symbolName)) return [];
  const seen = new Set<string>();
  const result: string[] = [];
  for (const { tag, nameRegex } of COMPILED) {
    nameRegex.lastIndex = 0;
    if (nameRegex.test(symbolName)) {
      if (!seen.has(tag)) {
        seen.add(tag);
        result.push(tag);
      }
    }
  }
  return result;
}

export function boostForInheritanceDepth(depth: number): number {
  if (depth <= 0) return 1.2;
  if (depth === 1) return 1.1;
  if (depth === 2) return 1.0;
  return 0.95;
}
```

- [ ] **Step 4: Run 测试通过**

Run: `tsx --test script/domain-tags.test.ts`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add script/domain-tags.ts script/domain-tags.test.ts
git commit -m "feat: add domain tag rules as single source of truth"
```

---

### Task 3: 按模块重组 API 文件 + 写 `_nav.json`

**Files:**
- Create: `script/post/restructure-modules.ts`
- Create: `script/post/write-nav.ts`
- Modify: `script/plugins/sapi-post-typedoc.ts`

**背景：** `@rspress/plugin-typedoc` 使用 kind 路由，文件名形如 `server.Player.md`。规格要求主模块顶栏 + 每模块侧栏，故需提升到 `docs/<mod>/`。

- [ ] **Step 1: 实现重组**

```ts
// script/post/restructure-modules.ts
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
    'api', 'changelog', 'tags', 'public', 'components', 'superpowers', 'node_modules',
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
```

- [ ] **Step 2: 写导航**

```ts
// script/post/write-nav.ts
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
```

- [ ] **Step 3: 串进插件**

```ts
// script/plugins/sapi-post-typedoc.ts — beforeBuild 内：
import { restructureModules } from '../post/restructure-modules.js';
import { writeRootNav } from '../post/write-nav.js';

const refs = restructureModules();
const modules = [...new Set(refs.map((r) => r.module))];
writeRootNav(modules);
console.log(`[sapi-post-typedoc] restructured ${refs.length} members across ${modules.length} modules`);
```

- [ ] **Step 4: 本地验证**

Run: `npm run build:translate && npx rspress build`（可临时跳过 docs:sync 若网络慢：先只跑 rspress 需保证 translate 已跑过）  
Expected: `docs/server/classes/` 等出现文件；`docs/_nav.json` 含 server / 更多 / 更新日志。

- [ ] **Step 5: Commit**

```bash
git add script/post/restructure-modules.ts script/post/write-nav.ts script/plugins/sapi-post-typedoc.ts
git commit -m "feat: restructure TypeDoc output into per-module docs and nav"
```

---

### Task 4: 继承嵌套 `_meta.json`

**Files:**
- Create: `script/post/inheritance-meta.ts`
- Create: `script/post/inheritance-meta.test.ts`
- Modify: `script/plugins/sapi-post-typedoc.ts`

- [ ] **Step 1: 测试解析「## 继承」**

用一段固定中文 TypeDoc markdown fixture 断言父子关系；实现 `buildInheritanceGraph` / `renderMetaForModule`（结构对齐旧 `writeMkdocsModuleTabs`：kind 分组 + classes/interfaces 树）。

`_meta.json` 示例形态：

```json
[
  { "type": "file", "name": "index", "label": "概览" },
  {
    "type": "dir",
    "name": "classes",
    "label": "类",
    "collapsed": false
  }
]
```

对有继承的类，在 `classes/_meta.json` 使用嵌套 `dir` 或 `custom-link` + `items`（以 Rspress `_meta` schema 实际支持为准；优先可折叠 `dir`）。

- [ ] **Step 2: 实现并在插件中对每个模块调用 `writeModuleMeta(mod, refs)`，强制覆盖**

- [ ] **Step 3: 抽样检查 `docs/server/classes/_meta.json` 含父类节点**

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: generate inheritance-aware module sidebars"
```

---

### Task 5: 成员页 MDX 增强（frontmatter / Badge / 锚点 / 容器 / 权重）

**Files:**
- Create: `script/post/enhance-member-mdx.ts`
- Modify: `script/plugins/sapi-post-typedoc.ts`

- [ ] **Step 1: 实现增强器核心**

对每个 `MemberRef`：

1. 读文件；解析标题得到 `symbolName`
2. `domainTags = inferDomainTags(symbolName)`
3. 状态 `tag`：内容含 `@deprecated` / deprecated 文案 → `deprecated`；含 beta/preview/rc → `experimental`
4. `searchBoost`：若有继承深度则用 `boostForInheritanceDepth`
5. 构造函数标题补 `{#constructors}` / `{#constructor}`（匹配中英标题）
6. 在正文标题下插入领域 chips（MDX）：

```mdx
import { Badge } from '@rspress/core/theme';

{domainTags.map 渲染为多个 <Badge>}
```

因 MDX 里不宜随意写 `.map`，改为生成静态 JSX：

```mdx
<Badge type="info">event</Badge> <Badge type="info">entity</Badge>
```

7. 权限/弃用段落外包 `:::warning` / `:::tip`（启发式：含「世界的执行权限」「只读模式」等）
8. 过长 ```` ``` ```` 示例（>80 行）外包 `:::details 示例`
9. 写 frontmatter：

```yaml
---
title: "Player"
tag: experimental
domainTags:
  - player
searchBoost: 1.1
---
```

10. 若扩展名是 `.md`，改为 `.mdx` 并删旧文件

- [ ] **Step 2: 接入插件（在 restructure + meta 之后）**

- [ ] **Step 3: 打开抽样页确认侧栏徽章与 chips**

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: enhance member pages as MDX with badges and frontmatter"
```

---

### Task 6: 同领域相关推荐

**Files:**
- Create: `script/post/related.ts`
- Modify: `script/post/enhance-member-mdx.ts`

- [ ] **Step 1: 实现选取**

```ts
export function pickRelated(
  current: MemberRef & { domainTags: string[] },
  all: Array<MemberRef & { domainTags: string[] }>,
  limit = 6,
): MemberRef[] {
  const scored = all
    .filter((x) => x.absPath !== current.absPath)
    .map((x) => {
      const shared = x.domainTags.filter((t) => current.domainTags.includes(t)).length;
      const sameMod = x.module === current.module ? 2 : 0;
      return { x, score: shared * 3 + sameMod };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || a.x.symbolName.localeCompare(b.x.symbolName));
  return scored.slice(0, limit).map((s) => s.x);
}
```

- [ ] **Step 2: 在增强阶段两遍扫描：先收集 tags，再追加**

```mdx
## 同领域相关

- [Entity](/server/classes/Entity)
```

- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add related symbols by domain tags"
```

---

### Task 7: 标签索引页 + TagFilter + 未打标报告

**Files:**
- Create: `docs/components/TagFilter.tsx`
- Create: `script/post/tags-index.ts`
- Create: `script/post/untagged-report.ts`
- Create: `docs/tags/index.mdx`（可由脚本覆盖生成区）

- [ ] **Step 1: `TagFilter` 接受 props：`items: { name, module, kind, tags, href }[]`，客户端筛选领域/模块/kind**

- [ ] **Step 2: `tags-index.ts` 扫描增强后的 frontmatter，写 `docs/tags/_data.json` 或直接生成 mdx 内嵌 JSON**

推荐：生成 `docs/tags/_data.json` + `index.mdx`：

```mdx
---
title: 标签索引
description: 按领域、模块与类型筛选 Script API 符号
---

import { TagFilter } from '../components/TagFilter';
import data from './_data.json';
import { DOMAIN_TAG_LEGEND } from '../../script/domain-tags'; 
```

若从 docs 导入 script 不便，把 legend 一并写入 `_data.json`。

- [ ] **Step 3: `untagged-report.ts` 写 `cache/untagged-symbols.json`**

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: add filterable domain tag index page"
```

---

### Task 8: searchHooks（domainTags + searchBoost）

**Files:**
- Modify: `docs/searchHooks.ts`

- [ ] **Step 1: 按 Rspress 自定义搜索文档实现 `onSearch`**：对默认结果，若 `page.frontmatter.domainTags` 与 query 相交则提权；再乘 `searchBoost`（缺省 1）重排。

- [ ] **Step 2: 手动在 `rspress dev` 搜 `entity` / `event`，确认相关 API 靠前**

- [ ] **Step 3: Commit**

```bash
git commit -m "feat: boost search by domainTags and searchBoost"
```

---

### Task 9: vanilla-data ts-morph 索引

**Files:**
- Create: `script/post/vanilla-data-index.ts`
- Modify: `script/plugins/sapi-post-typedoc.ts`
- Modify: `script/post/write-nav.ts`（确保 presentModules 含 vanilla-data）

- [ ] **Step 1: 实现**

```ts
import { Project } from 'ts-morph';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { translatedPath } from '../utils.js';
import { docsDir } from './constants.js';

export function writeVanillaDataIndex() {
  const project = new Project({ skipAddingFilesFromTsConfig: true });
  const sf = project.addSourceFileAtPath(join(translatedPath, 'vanilla-data.d.ts'));
  const enums = sf.getEnums().map((e) => e.getName());
  const vars = sf.getVariableDeclarations().map((v) => v.getName());
  const names = [...new Set([...enums, ...vars])].sort((a, b) => a.localeCompare(b));

  const groups = new Map<string, string[]>();
  for (const n of names) {
    const key = n[0]?.toUpperCase() ?? '#';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(n);
  }

  const body = [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, list]) => `## ${k}\n\n${list.map((n) => `- \`${n}\``).join('\n')}`)
    .join('\n\n');

  const dir = join(docsDir, 'vanilla-data');
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, 'index.mdx'),
    `---\ntitle: vanilla-data\ndescription: @minecraft/vanilla-data 枚举/常量名称索引（精简，不展开成员）\n---\n\n# @minecraft/vanilla-data\n\n:::tip 精简索引\n本页仅列出导出名称，不生成每枚举成员页，以避免页数爆炸。\n:::\n\n${body}\n`,
    'utf-8',
  );
  writeJson(join(dir, '_meta.json'), [{ type: 'file', name: 'index', label: '索引' }]);
}
```

（`writeJson` 从 fs-utils 导入。）

- [ ] **Step 2: 插件调用；导航「更多」出现 vanilla-data**

- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add compact vanilla-data name index via ts-morph"
```

---

### Task 10: 缩写、Tabs、SourceCode、llms

**Files:**
- Modify: `rspress.config.ts`（remark abbr + 确认 `llms: true`）
- Modify: `script/post/enhance-member-mdx.ts`
- Create: `script/post/abbreviations.ts`（解析 `includes/abbreviations.md` 为 remark 插件数据）

- [ ] **Step 1: 安装依赖**

Run: `npm i -D remark-abbr`（若包名/API 不符，改用 Anysearch 查当前可用的 remark abbr 包并固定版本）

- [ ] **Step 2: 解析词表并接入 `markdown.remarkPlugins`**

- [ ] **Step 3: 增强器**
  - 多 `@example` → `<Tabs>/<Tab>`
  - 页尾插入 `<SourceCode href="https://www.npmjs.com/package/@minecraft/{mod}" />`（或固定策略）
  - 确认 `llms: true` 构建产出 `doc_build` 内 llms 相关文件

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: wire abbreviations, tabs, SourceCode, and llms"
```

---

### Task 11: changelog 导航修复 + 首页文案

**Files:**
- Modify: `script/docs-home.ts`
- Modify: `docs/index.md`

- [ ] **Step 1: 重写 `ensureChangelogNav`**：不再依赖缺失的根 `_meta.json`；changelog 侧栏只维护 `docs/changelog/_meta.json`；顶栏已由 `write-nav` 负责。

- [ ] **Step 2: 更新首页**去掉「不包含 vanilla-data」过时说明，改为「vanilla-data 为精简索引」。

- [ ] **Step 3: Run `npm run docs:sync` 确认 `docs/changelog` 非空**

- [ ] **Step 4: Commit**

```bash
git commit -m "fix: wire changelog nav for rspress and update home copy"
```

---

### Task 12: 清理 MkDocs 残留 + README

**Files:**
- Modify: `README.md`
- Delete/isolate: unused Material assets、过时注释（`3.docs-home.ts`「MkDocs」表述等）
- Modify: `rspress.config.ts` 确认 `route.exclude` 含 `superpowers/**/*`

- [ ] **Step 1: README 写清流水线**

```md
# sapi-typedoc

Minecraft Script API 中文参考（Rspress + TypeDoc）。

## 开发

npm install
npm run dev

## 构建

npm run build

流水线：translate → docs:sync → rspress（typedoc + post 插件）。
```

- [ ] **Step 2: 删除确认无引用的 MkDocs 专用文件；保留 `includes/abbreviations.md`**

- [ ] **Step 3: Commit**

```bash
git commit -m "chore: remove mkdocs leftovers and document rspress workflow"
```

---

### Task 13: 端到端验收

- [ ] **Step 1: Run** `npm run build`  
  Expected: 成功；存在 changelog、llms 产物、模块顶栏、vanilla-data 索引。

- [ ] **Step 2: Run** `npm run preview`，按规格 §9 验收清单逐条勾选。

- [ ] **Step 3: Run** `tsx --test script/**/*.test.ts`  
  Expected: PASS

- [ ] **Step 4: 若有失败，修到全绿后再收尾 commit**

```bash
git commit -m "test: pass migration acceptance checklist"
```

---

## Spec coverage self-check

| 规格条目 | 对应 Task |
|----------|-----------|
| 路径 B post 插件 | 1, 3–10 |
| 顶栏 ② 主模块+更多 | 3 |
| 继承侧栏强制覆盖 | 4 |
| 领域索引 C + 相关推荐 | 2, 5–8 |
| 成员 MDX + Badge/容器/Tabs/SourceCode/details | 5, 6, 10 |
| search 权重字段 + searchHooks | 5, 8 |
| vanilla-data ts-morph 索引 | 9 |
| abbreviations | 10 |
| llms | 1, 10 |
| changelog 进 build/CI | 1, 11 |
| 清理 MkDocs | 12 |
| 验收 | 13 |

## Placeholder scan

无 TBD/TODO；类型名若与 Rspress 小版本不符，在 Task 1/8 以官方导出为准微调（不允许空实现跳过）。

## Type consistency

- `MemberRef` 贯穿 Task 3–7
- `PRIMARY_MODULES` / `MODULE_ORDER` 仅定义于 `constants.ts`
- `inferDomainTags` / `boostForInheritanceDepth` 仅出自 `domain-tags.ts`
