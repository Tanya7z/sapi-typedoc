import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import {
  addConstructorAnchors,
  applySourceCode,
  buildFrontmatter,
  collectExampleTabItems,
  detectStatusTag,
  enhanceMemberContent,
  enhanceMemberPages,
  escapeBadgeChildren,
  escapeMdxProse,
  escapeTabLabel,
  insertDomainChips,
  isEnhanceableMember,
  markExperimentalMembers,
  npmPackageForModule,
  parseSymbolFromTitle,
  resolveStatusTag,
  sourceCodeHref,
  stripExampleTabs,
  stripExperimentalMemberBadges,
  stripSourceCode,
  wrapExampleTabs,
  wrapLongCodeBlocks,
  wrapPrivilegeParagraphs,
} from './enhance-member-mdx.js';
import type { ExperimentalDiffResult } from './experimental-diff.js';
import type { MemberRef } from './restructure-modules.js';

function countMatches(content: string, pattern: RegExp): number {
  return (content.match(pattern) ?? []).length;
}

function mockDiff(partial: ExperimentalDiffResult['modules']): ExperimentalDiffResult {
  return { generatedAt: '2026-01-01T00:00:00.000Z', modules: partial };
}

describe('parseSymbolFromTitle / detectStatusTag', () => {
  it('解析 Class: / 类: 标题', () => {
    assert.equal(parseSymbolFromTitle('# Class: Player\n\nbody'), 'Player');
    assert.equal(parseSymbolFromTitle('# 类: Entity\n\n'), 'Entity');
  });

  it('正文只识别弃用；experimental 由符号差异决定', () => {
    assert.equal(detectStatusTag('# X\n\n@deprecated\n**`Beta`**'), 'deprecated');
    assert.equal(detectStatusTag('# X\n\n**`Beta`**'), undefined);
    assert.equal(resolveStatusTag('# X\n\n**`Beta`**', true), 'experimental');
    assert.equal(resolveStatusTag('# X\n\n**`Beta`**', false), undefined);
    assert.equal(resolveStatusTag('# X\n\n@deprecated', true), 'deprecated');
  });
});

describe('markExperimentalMembers', () => {
  it('在 ### 成员标题下插入实验性 Badge，且幂等', () => {
    const raw = ['## Properties', '', '### getFoo', '', '说明', '', '### id', '', '稳定成员', ''].join('\n');
    const once = markExperimentalMembers(raw, ['getFoo']);
    assert.match(once, /### getFoo\n\n<Badge type="warning">实验性<\/Badge>\n\n说明/);
    assert.doesNotMatch(once, /### id\n\n<Badge type="warning">/);
    const twice = markExperimentalMembers(once, ['getFoo']);
    assert.equal(countMatches(twice, /实验性/g), 1);
    assert.equal(stripExperimentalMemberBadges(twice).includes('实验性'), false);
  });

  it('Constructor / 构造函数 对应 constructor', () => {
    const raw = addConstructorAnchors('### Constructor\n\nbody\n');
    const out = markExperimentalMembers(raw, ['constructor']);
    assert.match(out, /### Constructor \{#constructor\}\n\n<Badge type="warning">实验性<\/Badge>/);
  });
});

describe('addConstructorAnchors', () => {
  it('中英构造函数标题补锚点且幂等', () => {
    const once = addConstructorAnchors('## Constructors\n\n### Constructor\n\n## 构造函数\n\n### 构造函数\n');
    assert.match(once, /## Constructors \{#constructors\}\n\n### Constructor \{#constructor\}/);
    assert.match(once, /## 构造函数 \{#constructors\}\n\n### 构造函数 \{#constructor\}/);
    assert.equal(addConstructorAnchors(once), once);
  });
});

describe('wrapPrivilegeParagraphs / wrapLongCodeBlocks', () => {
  it('权限段落外包 tip，弃用外包 warning', () => {
    const input = ['# T', '', '无法在只读模式下调用此函数。', '', '此 API 已弃用。', ''].join('\n');
    const out = wrapPrivilegeParagraphs(input);
    assert.match(out, /:::tip\n无法在只读模式下调用此函数。\n:::/);
    assert.match(out, /:::warning\n此 API 已弃用。\n:::/);
  });

  it('长代码块外包 details', () => {
    const lines = Array.from({ length: 85 }, (_, i) => `line${i}`);
    const fence = ['```ts', ...lines, '```'].join('\n');
    const out = wrapLongCodeBlocks(fence);
    assert.match(out, /^:::details 示例\n```ts\n/);
    assert.ok(out.trimEnd().endsWith('```\n:::') || out.includes('```\n:::'));
    assert.equal(wrapLongCodeBlocks(out), out);
  });
});


describe('escapeMdxProse', () => {
  it('escapes braces and angles, keeps fences', () => {
    const input = ['size {x:1} and <= max, see <x, y>', '', '```', 'const a = {x:1};', '```', ''].join(String.fromCharCode(10));
    const out = escapeMdxProse(input);
    assert.match(out, /size \\{x:1\\}/);
    assert.match(out, /\\<= max/);
    assert.match(out, /\\<x, y>/);
    assert.match(out, /const a = \{x:1\};/);
  });
  it('is idempotent', () => {
    const once = escapeMdxProse('guarantee <= max');
    assert.equal(escapeMdxProse(once), once);
  });
});
describe('escapeBadgeChildren / insertDomainChips', () => {
  it('转义 Badge 子文本中的 & < >', () => {
    assert.equal(escapeBadgeChildren('a&b<c>'), 'a&amp;b&lt;c&gt;');
    const out = insertDomainChips('# T\n\n', ['a&b', 'x<y>']);
    assert.match(out, /<Badge type="info">a&amp;b<\/Badge>/);
    assert.match(out, /<Badge type="info">x&lt;y&gt;<\/Badge>/);
  });
});

describe('wrapExampleTabs / SourceCode', () => {
  it('Examples 下 2+ 围栏包 Tabs，单示例不包', () => {
    const multi = [
      '## Examples',
      '',
      '**addSign.ts**',
      '',
      '```ts',
      'a()',
      '```',
      '',
      '**addTwoSidedSign.ts**',
      '',
      '```ts',
      'b()',
      '```',
      '',
    ].join('\n');
    const tabbed = wrapExampleTabs(multi);
    assert.match(tabbed, /<Tabs>/);
    assert.match(tabbed, /<Tab label="addSign\.ts" value="ex-1">/);
    assert.match(tabbed, /<Tab label="addTwoSidedSign\.ts" value="ex-2">/);
    assert.equal(collectExampleTabItems(multi.replace(/^## Examples\n/, '')).length, 2);

    const single = ['## Example', '', '```ts', 'only()', '```', ''].join('\n');
    assert.equal(wrapExampleTabs(single), single);
  });

  it('Examples 内 ### 小标题不截断节，仍包成 Tabs', () => {
    const withSubheads = [
      '## Examples',
      '',
      '### addSign.ts',
      '',
      '```ts',
      'a()',
      '```',
      '',
      '### addTwoSidedSign.ts',
      '',
      '```ts',
      'b()',
      '```',
      '',
      '## Constructors',
      '',
      'ctor',
      '',
    ].join('\n');
    const tabbed = wrapExampleTabs(withSubheads);
    assert.match(tabbed, /<Tabs>/);
    assert.equal(countMatches(tabbed, /<Tab\b/g), 2);
    assert.match(tabbed, /## Constructors\n\nctor/);
    // ### 作为围栏前说明并入对应 Tab（首个 ### 在 Tabs 外 preface，第二个并入 Tab 2）
    assert.match(tabbed, /### addSign\.ts/);
    assert.match(tabbed, /<Tab[^>]*>\s*\n*### addTwoSidedSign\.ts/);
  });

  it('围栏之间的说明保留在后续 Tab 内', () => {
    const withNote = [
      '## Examples',
      '',
      '**one.ts**',
      '',
      '```ts',
      'a()',
      '```',
      '',
      ':::tip',
      '注意：第二个示例需开启 beta。',
      ':::',
      '',
      '**two.ts**',
      '',
      '```ts',
      'b()',
      '```',
      '',
    ].join('\n');
    const tabbed = wrapExampleTabs(withNote);
    assert.match(tabbed, /<Tabs>/);
    assert.match(
      tabbed,
      /<Tab label="two\.ts" value="ex-2">\s*\n*:::tip\n注意：第二个示例需开启 beta。\n:::\s*\n*```ts\nb\(\)\n```/,
    );
    assert.doesNotMatch(tabbed, /<\/Tab>\s*\n*:::tip/);
  });

  it('escapeTabLabel 用反斜杠转义双引号，不用 HTML 实体', () => {
    assert.equal(escapeTabLabel('say "hi"'), 'say \\"hi\\"');
    assert.doesNotMatch(escapeTabLabel('say "hi"'), /&quot;/);

    const quoted = [
      '## Examples',
      '',
      '**say "hi".ts**',
      '',
      '```ts',
      'a()',
      '```',
      '',
      '**other.ts**',
      '',
      '```ts',
      'b()',
      '```',
      '',
    ].join('\n');
    const tabbed = wrapExampleTabs(quoted);
    assert.match(tabbed, /<Tab label="say \\"hi\\"\.ts" value="ex-1">/);
    assert.doesNotMatch(tabbed, /&quot;/);

    const restored = stripExampleTabs(tabbed);
    assert.match(restored, /\*\*say "hi"\.ts\*\*/);
  });

  it('stripExampleTabs 还原标签且与 wrap 幂等', () => {
    const multi = [
      '## Examples',
      '',
      '**foo.ts**',
      '',
      '```ts',
      '1',
      '```',
      '',
      '**bar.ts**',
      '',
      '```ts',
      '2',
      '```',
      '',
    ].join('\n');
    const once = wrapExampleTabs(multi);
    const restored = stripExampleTabs(once);
    assert.match(restored, /\*\*foo\.ts\*\*/);
    assert.match(restored, /\*\*bar\.ts\*\*/);
    assert.doesNotMatch(restored, /<Tabs>/);
    const twice = wrapExampleTabs(restored);
    assert.equal(countMatches(twice, /<Tabs>/g), 1);
    assert.equal(countMatches(twice, /<Tab\b/g), 2);
  });

  it('SourceCode 按模块映射 npm 且幂等', () => {
    assert.equal(npmPackageForModule('server-ui'), '@minecraft/server-ui');
    assert.equal(npmPackageForModule('vanilla-data'), '@minecraft/vanilla-data');
    assert.equal(sourceCodeHref('server'), 'https://www.npmjs.com/package/@minecraft/server');
    const once = applySourceCode('# T\n\nbody\n', 'server');
    assert.match(once, /<SourceCode href="https:\/\/www\.npmjs\.com\/package\/@minecraft\/server" \/>/);
    assert.equal(applySourceCode(once, 'server'), once);
    assert.equal(countMatches(applySourceCode(once, 'server'), /<SourceCode\b/g), 1);
    assert.doesNotMatch(stripSourceCode(once), /SourceCode/);
  });
});

describe('enhanceMemberContent', () => {
  it('写入 frontmatter、Badge chips、SourceCode，并支持幂等', () => {
    const longLines = Array.from({ length: 85 }, (_, i) => `line${i}`);
    const raw = [
      '# Class: EntityDieAfterEvent',
      '',
      '**`Beta`**',
      '',
      '无法在只读模式下调用此函数。',
      '',
      '事件说明。',
      '',
      '## Examples',
      '',
      '**one.ts**',
      '',
      '```ts',
      'a()',
      '```',
      '',
      '**two.ts**',
      '',
      '```ts',
      'b()',
      '```',
      '',
      '## Constructors',
      '',
      '### Constructor',
      '',
      '```ts',
      ...longLines,
      '```',
      '',
    ].join('\n');

    const first = enhanceMemberContent(raw, {
      symbolName: 'EntityDieAfterEvent',
      inheritanceDepth: 1,
      module: 'server',
      symbolExperimental: true,
      experimentalMembers: ['constructor'],
    });
    assert.match(first.content, /^---\n/);
    assert.match(first.content, /title: "EntityDieAfterEvent"/);
    assert.match(first.content, /tag: experimental/);
    assert.match(first.content, /domainTags:\n {2}- event\n {2}- entity/);
    assert.match(first.content, /searchBoost: 1\.1/);
    assert.match(
      first.content,
      /import \{ Badge, Tabs, Tab, SourceCode \} from '@rspress\/core\/theme';/,
    );
    assert.match(first.content, /<Badge type="info">event<\/Badge> <Badge type="info">entity<\/Badge>/);
    assert.match(first.content, /## Constructors \{#constructors\}/);
    assert.match(first.content, /### Constructor \{#constructor\}\n\n<Badge type="warning">实验性<\/Badge>/);
    assert.match(first.content, /:::tip\n无法在只读模式下调用此函数。\n:::/);
    assert.match(first.content, /:::details 示例\n```ts\n/);
    assert.match(first.content, /<Tabs>/);
    assert.match(first.content, /<Tab label="one\.ts"/);
    assert.match(first.content, /<SourceCode href="https:\/\/www\.npmjs\.com\/package\/@minecraft\/server" \/>/);

    const second = enhanceMemberContent(first.content, {
      symbolName: 'EntityDieAfterEvent',
      inheritanceDepth: 1,
      module: 'server',
      symbolExperimental: true,
      experimentalMembers: ['constructor'],
    });
    const themeImports = second.content.match(/import \{[^}]+\} from '@rspress\/core\/theme';/g) ?? [];
    assert.equal(themeImports.length, 1);
    assert.equal(countMatches(second.content, /^---$/gm), 2);
    assert.equal(countMatches(second.content, /<Badge\b/g), countMatches(first.content, /<Badge\b/g));
    assert.equal(countMatches(second.content, /:::tip\b/g), countMatches(first.content, /:::tip\b/g));
    assert.equal(countMatches(second.content, /:::details\b/g), countMatches(first.content, /:::details\b/g));
    assert.equal(countMatches(second.content, /:::warning\b/g), countMatches(first.content, /:::warning\b/g));
    assert.equal(countMatches(second.content, /<Tabs>/g), 1);
    assert.equal(countMatches(second.content, /<SourceCode\b/g), 1);
    assert.doesNotMatch(second.content, /:::tip\s*\n\s*:::tip/);
    assert.doesNotMatch(second.content, /:::details[^\n]*\n:::details/);
    assert.doesNotMatch(second.content, /:::warning\s*\n\s*:::warning/);
  });

  it('buildFrontmatter 省略空 tag / domainTags / boost', () => {
    const fm = buildFrontmatter({ title: 'Foo', domainTags: [] });
    assert.equal(fm.includes('tag:'), false);
    assert.equal(fm.includes('domainTags:'), false);
    assert.equal(fm.includes('searchBoost:'), false);
  });
});

describe('enhanceMemberPages', () => {
  it('跳过 modules 概览；.md 改为 .mdx 并更新 ref', async () => {
    const root = mkdtempSync(join(tmpdir(), 'sapi-enhance-'));
    const classDir = join(root, 'server', 'classes');
    mkdirSync(classDir, { recursive: true });
    const playerPath = join(classDir, 'Player.md');
    writeFileSync(
      playerPath,
      ['# Class: Player', '', '**`Beta`**', '', '玩家。', '', '## Extends', '', '- [`Entity`](Entity.md)', ''].join(
        '\n',
      ),
      'utf-8',
    );
    const indexPath = join(root, 'server', 'index.md');
    writeFileSync(indexPath, '# server\n', 'utf-8');

    const refs: MemberRef[] = [
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'Player',
        fileName: 'Player.md',
        absPath: playerPath,
      },
      {
        module: 'server',
        kind: 'modules',
        symbolName: 'index',
        fileName: 'index.md',
        absPath: indexPath,
      },
    ];

    assert.equal(isEnhanceableMember(refs[0]!), true);
    assert.equal(isEnhanceableMember(refs[1]!), false);

    await enhanceMemberPages(refs, {
      experimentalDiff: mockDiff({
        server: {
          module: 'server',
          allExperimental: false,
          experimentalSymbols: ['Player'],
          experimentalMembers: {},
          stableVersion: '1.0.0',
          previewVersion: '2.0.0-beta',
        },
      }),
    });

    assert.equal(refs[0]!.fileName, 'Player.mdx');
    assert.ok(refs[0]!.absPath.endsWith('Player.mdx'));
    assert.ok(existsSync(refs[0]!.absPath));
    assert.equal(existsSync(playerPath), false);
    assert.equal(existsSync(indexPath), true);

    const out = readFileSync(refs[0]!.absPath, 'utf-8');
    assert.match(out, /title: "Player"/);
    assert.match(out, /<Badge type="info">player<\/Badge>/);
    assert.match(out, /tag: experimental/);
    // 无本地父 Entity 时 Player 为 depth 0
    assert.match(out, /searchBoost: 1\.2/);
    assert.match(out, /import \{ Badge, SourceCode \} from '@rspress\/core\/theme';/);
    assert.match(out, /<SourceCode href="https:\/\/www\.npmjs\.com\/package\/@minecraft\/server" \/>/);
  });

  it('按继承深度写入 searchBoost；二次增强在 .mdx 上仍正确', async () => {
    const root = mkdtempSync(join(tmpdir(), 'sapi-enhance-depth-'));
    const classDir = join(root, 'server', 'classes');
    mkdirSync(classDir, { recursive: true });

    const entityPath = join(classDir, 'Entity.md');
    const playerPath = join(classDir, 'Player.md');
    writeFileSync(entityPath, ['# Class: Entity', '', '实体基类。', ''].join('\n'), 'utf-8');
    writeFileSync(
      playerPath,
      ['# Class: Player', '', '玩家。', '', '## Extends', '', '- [`Entity`](Entity.md)', ''].join('\n'),
      'utf-8',
    );

    const refs: MemberRef[] = [
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'Entity',
        fileName: 'Entity.md',
        absPath: entityPath,
      },
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'Player',
        fileName: 'Player.md',
        absPath: playerPath,
      },
    ];

    const experimentalDiff = mockDiff({
      server: {
        module: 'server',
        allExperimental: false,
        experimentalSymbols: [],
        experimentalMembers: {},
        stableVersion: '1.0.0',
        previewVersion: '2.0.0-beta',
      },
    });

    await enhanceMemberPages(refs, { experimentalDiff });

    assert.equal(refs[0]!.fileName, 'Entity.mdx');
    assert.equal(refs[1]!.fileName, 'Player.mdx');

    const entityOut = readFileSync(refs[0]!.absPath, 'utf-8');
    const playerOut = readFileSync(refs[1]!.absPath, 'utf-8');
    // Entity depth 0 → 1.2；Player depth 1 → 1.1
    assert.match(entityOut, /searchBoost: 1\.2/);
    assert.match(playerOut, /searchBoost: 1\.1/);
    assert.doesNotMatch(entityOut, /^tag:/m);
    assert.doesNotMatch(playerOut, /^tag:/m);

    const entityBadges = countMatches(entityOut, /<Badge\b/g);
    const playerBadges = countMatches(playerOut, /<Badge\b/g);

    await enhanceMemberPages(refs, { experimentalDiff });

    const entityAgain = readFileSync(refs[0]!.absPath, 'utf-8');
    const playerAgain = readFileSync(refs[1]!.absPath, 'utf-8');
    assert.match(entityAgain, /searchBoost: 1\.2/);
    assert.match(playerAgain, /searchBoost: 1\.1/);
    assert.equal(countMatches(entityAgain, /<Badge\b/g), entityBadges);
    assert.equal(countMatches(playerAgain, /<Badge\b/g), playerBadges);
    assert.equal(countMatches(entityAgain, /import \{[^}]+\} from '@rspress\/core\/theme';/g), 1);
    assert.equal(countMatches(playerAgain, /import \{[^}]+\} from '@rspress\/core\/theme';/g), 1);
    assert.equal(countMatches(entityAgain, /<SourceCode\b/g), 1);
    assert.equal(countMatches(playerAgain, /<SourceCode\b/g), 1);
  });

  it('第二遍追加同领域相关且幂等', async () => {
    const root = mkdtempSync(join(tmpdir(), 'sapi-enhance-related-'));
    const classDir = join(root, 'server', 'classes');
    mkdirSync(classDir, { recursive: true });

    const entityPath = join(classDir, 'Entity.md');
    const eventPath = join(classDir, 'EntityDieAfterEvent.md');
    const worldPath = join(classDir, 'World.md');
    writeFileSync(entityPath, ['# Class: Entity', '', '实体。', ''].join('\n'), 'utf-8');
    writeFileSync(
      eventPath,
      ['# Class: EntityDieAfterEvent', '', '实体死亡事件。', ''].join('\n'),
      'utf-8',
    );
    writeFileSync(worldPath, ['# Class: World', '', '世界。', ''].join('\n'), 'utf-8');

    const refs: MemberRef[] = [
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'Entity',
        fileName: 'Entity.md',
        absPath: entityPath,
      },
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'EntityDieAfterEvent',
        fileName: 'EntityDieAfterEvent.md',
        absPath: eventPath,
      },
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'World',
        fileName: 'World.md',
        absPath: worldPath,
      },
    ];

    const experimentalDiff = mockDiff({
      server: {
        module: 'server',
        allExperimental: false,
        experimentalSymbols: [],
        experimentalMembers: {},
        stableVersion: '1.0.0',
        previewVersion: '2.0.0-beta',
      },
    });

    await enhanceMemberPages(refs, { experimentalDiff });

    const eventOut = readFileSync(refs[1]!.absPath, 'utf-8');
    assert.match(eventOut, /## 同领域相关\n\n- \[Entity\]\(\/server\/classes\/Entity\)\n/);
    assert.doesNotMatch(eventOut, /World/);
    // 相关节重写后 frontmatter 与 body 之间须保留换行（不得出现 ---import / ---#）
    assert.match(eventOut, /^---\n[\s\S]*?\n---\n/);
    assert.doesNotMatch(eventOut, /---(?:import|#)/);

    const worldOut = readFileSync(refs[2]!.absPath, 'utf-8');
    // World 仅 world tag，池中无其他共享 → 无相关节
    assert.doesNotMatch(worldOut, /## 同领域相关/);
    assert.match(worldOut, /^---\n[\s\S]*?\n---\n/);

    await enhanceMemberPages(refs, { experimentalDiff });
    const eventAgain = readFileSync(refs[1]!.absPath, 'utf-8');
    assert.equal(countMatches(eventAgain, /## 同领域相关/g), 1);
    assert.equal(countMatches(eventAgain, /\[Entity\]\(\/server\/classes\/Entity\)/g), 1);
    assert.equal(countMatches(eventAgain, /<SourceCode\b/g), 1);
    assert.match(eventAgain, /^---\n[\s\S]*?\n---\n/);
    assert.doesNotMatch(eventAgain, /---(?:import|#)/);
    // SourceCode 固定在相关节之后（页尾）
    assert.match(
      eventAgain,
      /## 同领域相关\n\n- \[Entity\]\(\/server\/classes\/Entity\)\n\n<SourceCode href="https:\/\/www\.npmjs\.com\/package\/@minecraft\/server" \/>/,
    );
  });
});
