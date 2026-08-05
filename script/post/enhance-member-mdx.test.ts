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
  isEnhancableMember,
  parseSymbolFromTitle,
  wrapLongCodeBlocks,
  wrapPrivilegeParagraphs,
} from './enhance-member-mdx.js';
import type { MemberRef } from './restructure-modules.js';

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

describe('enhanceMemberContent', () => {
  it('写入 frontmatter、Badge chips，并支持幂等', () => {
    const raw = [
      '# Class: EntityDieAfterEvent',
      '',
      '**`Beta`**',
      '',
      '事件说明。',
      '',
      '## Constructors',
      '',
      '### Constructor',
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

    const second = enhanceMemberContent(first.content, {
      symbolName: 'EntityDieAfterEvent',
      inheritanceDepth: 1,
    });
    const badgeImports = second.content.match(/import \{ Badge \}/g) ?? [];
    assert.equal(badgeImports.length, 1);
    assert.equal((second.content.match(/^---$/gm) ?? []).length, 2);
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

    assert.equal(isEnhancableMember(refs[0]!), true);
    assert.equal(isEnhancableMember(refs[1]!), false);

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
    assert.match(out, /searchBoost: 1\.2/);
  });
});
