import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import {
  addConstructorAnchors,
  buildFrontmatter,
  detectStatusTag,
  enhanceMemberContent,
  enhanceMemberPages,
  escapeBadgeChildren,
  insertDomainChips,
  isEnhanceableMember,
  parseSymbolFromTitle,
  wrapLongCodeBlocks,
  wrapPrivilegeParagraphs,
} from './enhance-member-mdx.js';
import type { MemberRef } from './restructure-modules.js';

function countMatches(content: string, pattern: RegExp): number {
  return (content.match(pattern) ?? []).length;
}

describe('parseSymbolFromTitle / detectStatusTag', () => {
  it('解析 Class: / 类: 标题', () => {
    assert.equal(parseSymbolFromTitle('# Class: Player\n\nbody'), 'Player');
    assert.equal(parseSymbolFromTitle('# 类: Entity\n\n'), 'Entity');
  });

  it('弃用优先于 experimental', () => {
    assert.equal(detectStatusTag('# X\n\n@deprecated\n**`Beta`**'), 'deprecated');
    assert.equal(detectStatusTag('# X\n\n**`Beta`**'), 'experimental');
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

describe('escapeBadgeChildren / insertDomainChips', () => {
  it('转义 Badge 子文本中的 & < >', () => {
    assert.equal(escapeBadgeChildren('a&b<c>'), 'a&amp;b&lt;c&gt;');
    const out = insertDomainChips('# T\n\n', ['a&b', 'x<y>']);
    assert.match(out, /<Badge type="info">a&amp;b<\/Badge>/);
    assert.match(out, /<Badge type="info">x&lt;y&gt;<\/Badge>/);
  });
});

describe('enhanceMemberContent', () => {
  it('写入 frontmatter、Badge chips，并支持幂等', () => {
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
      '## Constructors',
      '',
      '### Constructor',
      '',
      '```ts',
      ...longLines,
      '```',
      '',
    ].join('\n');

    const first = enhanceMemberContent(raw, { symbolName: 'EntityDieAfterEvent', inheritanceDepth: 1 });
    assert.match(first.content, /^---\n/);
    assert.match(first.content, /title: "EntityDieAfterEvent"/);
    assert.match(first.content, /tag: experimental/);
    assert.match(first.content, /domainTags:\n {2}- event\n {2}- entity/);
    assert.match(first.content, /searchBoost: 1\.1/);
    assert.match(first.content, /import \{ Badge \} from '@rspress\/core\/theme';/);
    assert.match(first.content, /<Badge type="info">event<\/Badge> <Badge type="info">entity<\/Badge>/);
    assert.match(first.content, /## Constructors \{#constructors\}/);
    assert.match(first.content, /:::tip\n无法在只读模式下调用此函数。\n:::/);
    assert.match(first.content, /:::details 示例\n```ts\n/);

    const second = enhanceMemberContent(first.content, {
      symbolName: 'EntityDieAfterEvent',
      inheritanceDepth: 1,
    });
    const badgeImports = second.content.match(/import \{ Badge \}/g) ?? [];
    assert.equal(badgeImports.length, 1);
    assert.equal(countMatches(second.content, /^---$/gm), 2);
    assert.equal(countMatches(second.content, /<Badge\b/g), countMatches(first.content, /<Badge\b/g));
    assert.equal(countMatches(second.content, /:::tip\b/g), countMatches(first.content, /:::tip\b/g));
    assert.equal(countMatches(second.content, /:::details\b/g), countMatches(first.content, /:::details\b/g));
    assert.equal(countMatches(second.content, /:::warning\b/g), countMatches(first.content, /:::warning\b/g));
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
  it('跳过 modules 概览；.md 改为 .mdx 并更新 ref', () => {
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

    enhanceMemberPages(refs);

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
  });

  it('按继承深度写入 searchBoost；二次增强在 .mdx 上仍正确', () => {
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

    enhanceMemberPages(refs);

    assert.equal(refs[0]!.fileName, 'Entity.mdx');
    assert.equal(refs[1]!.fileName, 'Player.mdx');

    const entityOut = readFileSync(refs[0]!.absPath, 'utf-8');
    const playerOut = readFileSync(refs[1]!.absPath, 'utf-8');
    // Entity depth 0 → 1.2；Player depth 1 → 1.1
    assert.match(entityOut, /searchBoost: 1\.2/);
    assert.match(playerOut, /searchBoost: 1\.1/);

    const entityBadges = countMatches(entityOut, /<Badge\b/g);
    const playerBadges = countMatches(playerOut, /<Badge\b/g);

    enhanceMemberPages(refs);

    const entityAgain = readFileSync(refs[0]!.absPath, 'utf-8');
    const playerAgain = readFileSync(refs[1]!.absPath, 'utf-8');
    assert.match(entityAgain, /searchBoost: 1\.2/);
    assert.match(playerAgain, /searchBoost: 1\.1/);
    assert.equal(countMatches(entityAgain, /<Badge\b/g), entityBadges);
    assert.equal(countMatches(playerAgain, /<Badge\b/g), playerBadges);
    assert.equal(countMatches(entityAgain, /import \{ Badge \}/g), 1);
    assert.equal(countMatches(playerAgain, /import \{ Badge \}/g), 1);
  });

  it('第二遍追加同领域相关且幂等', () => {
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

    enhanceMemberPages(refs);

    const eventOut = readFileSync(refs[1]!.absPath, 'utf-8');
    assert.match(eventOut, /## 同领域相关\n\n- \[Entity\]\(\/server\/classes\/Entity\)\n/);
    assert.doesNotMatch(eventOut, /World/);

    const worldOut = readFileSync(refs[2]!.absPath, 'utf-8');
    // World 仅 world tag，池中无其他共享 → 无相关节
    assert.doesNotMatch(worldOut, /## 同领域相关/);

    enhanceMemberPages(refs);
    const eventAgain = readFileSync(refs[1]!.absPath, 'utf-8');
    assert.equal(countMatches(eventAgain, /## 同领域相关/g), 1);
    assert.equal(countMatches(eventAgain, /\[Entity\]\(\/server\/classes\/Entity\)/g), 1);
  });
});
