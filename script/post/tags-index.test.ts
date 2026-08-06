import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import {
  buildTagIndexItem,
  buildTagsIndexDataFromRefs,
  parseDomainTagsFromFrontmatter,
  resolveMemberDomainTags,
  writeTagsIndex,
} from './tags-index.js';
import type { MemberRef } from './restructure-modules.js';

describe('parseDomainTagsFromFrontmatter', () => {
  it('解析 YAML 块式列表', () => {
    const fm = '---\ntitle: "X"\ndomainTags:\n  - event\n  - entity\n---';
    assert.deepEqual(parseDomainTagsFromFrontmatter(fm), ['event', 'entity']);
  });

  it('解析带引号的块式列表项', () => {
    const fm = '---\ndomainTags:\n  - "player"\n  - \'entity\'\n---';
    assert.deepEqual(parseDomainTagsFromFrontmatter(fm), ['player', 'entity']);
  });

  it('解析流式单元素列表', () => {
    assert.deepEqual(
      parseDomainTagsFromFrontmatter('---\ndomainTags: [player]\n---'),
      ['player'],
    );
  });

  it('解析流式多元素与引号', () => {
    assert.deepEqual(
      parseDomainTagsFromFrontmatter('---\ndomainTags: ["player", "entity"]\n---'),
      ['player', 'entity'],
    );
    assert.deepEqual(
      parseDomainTagsFromFrontmatter("---\ndomainTags: ['event', entity]\n---"),
      ['event', 'entity'],
    );
  });

  it('未出现 domainTags 返回 undefined', () => {
    assert.equal(parseDomainTagsFromFrontmatter('---\ntitle: "X"\n---'), undefined);
  });

  it('显式空列表返回 []', () => {
    assert.deepEqual(parseDomainTagsFromFrontmatter('---\ndomainTags: []\n---'), []);
  });

  it('仅写出键无值返回 []', () => {
    assert.deepEqual(parseDomainTagsFromFrontmatter('---\ndomainTags:\n---'), []);
  });
});

describe('buildTagIndexItem / buildTagsIndexDataFromRefs', () => {
  it('href 与图例形状正确', () => {
    const ref: MemberRef = {
      module: 'server',
      kind: 'classes',
      symbolName: 'Player',
      fileName: 'Player.mdx',
      absPath: join(tmpdir(), 'missing-Player.mdx'),
    };
    const item = buildTagIndexItem(ref, ['player']);
    assert.equal(item.href, '/server/classes/Player');
    assert.deepEqual(item.tags, ['player']);

    const data = buildTagsIndexDataFromRefs([ref]);
    assert.ok(data.legend.length > 0);
    assert.equal(data.legend[0]!.tag, 'event');
    assert.equal(data.items.length, 1);
    assert.ok(data.items[0]!.tags.includes('player'));
  });

  it('跳过 modules / index', () => {
    const refs: MemberRef[] = [
      {
        module: 'server',
        kind: 'modules',
        symbolName: 'server',
        fileName: 'index.md',
        absPath: '/x',
      },
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'index',
        fileName: 'index.mdx',
        absPath: '/y',
      },
    ];
    assert.equal(buildTagsIndexDataFromRefs(refs).items.length, 0);
  });
});

describe('resolveMemberDomainTags / writeTagsIndex', () => {
  it('优先读 frontmatter，缺省则推断', () => {
    const dir = mkdtempSync(join(tmpdir(), 'tags-index-'));
    const withFm = join(dir, 'WithFm.mdx');
    writeFileSync(withFm, '---\ntitle: "Foo"\ndomainTags:\n  - block\n---\n\n# Foo\n', 'utf-8');
    assert.deepEqual(resolveMemberDomainTags(withFm, 'EntityDieAfterEvent'), ['block']);

    const noFm = join(dir, 'NoFm.mdx');
    writeFileSync(noFm, '# Class: EntityDieAfterEvent\n', 'utf-8');
    assert.deepEqual(resolveMemberDomainTags(noFm, 'EntityDieAfterEvent'), ['event', 'entity']);
  });

  it('显式空 domainTags 不重推断；缺省键可推断', () => {
    const dir = mkdtempSync(join(tmpdir(), 'tags-empty-fm-'));
    const explicitEmpty = join(dir, 'Empty.mdx');
    writeFileSync(
      explicitEmpty,
      '---\ntitle: "Player"\ndomainTags: []\n---\n\n# Player\n',
      'utf-8',
    );
    assert.deepEqual(resolveMemberDomainTags(explicitEmpty, 'Player'), []);

    const missing = join(dir, 'Missing.mdx');
    writeFileSync(missing, '---\ntitle: "Player"\n---\n\n# Player\n', 'utf-8');
    assert.deepEqual(resolveMemberDomainTags(missing, 'Player'), ['player']);

    const flow = join(dir, 'Flow.mdx');
    writeFileSync(
      flow,
      '---\ntitle: "X"\ndomainTags: [player, entity]\n---\n\n# X\n',
      'utf-8',
    );
    assert.deepEqual(resolveMemberDomainTags(flow, 'X'), ['player', 'entity']);
  });

  it('refs 为空时跳过覆写', () => {
    const root = mkdtempSync(join(tmpdir(), 'tags-empty-'));
    const tagsDir = join(root, 'tags');
    mkdirSync(tagsDir, { recursive: true });
    const sentinel = join(tagsDir, 'index.mdx');
    writeFileSync(sentinel, 'KEEP\n', 'utf-8');
    assert.equal(writeTagsIndex([], { docsDir: root }), false);
    assert.equal(readFileSync(sentinel, 'utf-8'), 'KEEP\n');
  });

  it('写入 _data.json 与 index.mdx', () => {
    const root = mkdtempSync(join(tmpdir(), 'tags-write-'));
    const memberDir = join(root, 'server', 'classes');
    mkdirSync(memberDir, { recursive: true });
    const absPath = join(memberDir, 'Player.mdx');
    writeFileSync(
      absPath,
      '---\ntitle: "Player"\ndomainTags:\n  - player\n---\n\n# Player\n',
      'utf-8',
    );
    const refs: MemberRef[] = [
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'Player',
        fileName: 'Player.mdx',
        absPath,
      },
    ];
    assert.equal(writeTagsIndex(refs, { docsDir: root }), true);
    const data = JSON.parse(readFileSync(join(root, 'tags', '_data.json'), 'utf-8')) as {
      legend: unknown[];
      items: { name: string; tags: string[]; href: string }[];
    };
    assert.ok(Array.isArray(data.legend));
    assert.equal(data.items.length, 1);
    assert.equal(data.items[0]!.name, 'Player');
    assert.deepEqual(data.items[0]!.tags, ['player']);
    assert.equal(data.items[0]!.href, '/server/classes/Player');
    const mdx = readFileSync(join(root, 'tags', 'index.mdx'), 'utf-8');
    assert.match(mdx, /TagFilter/);
    assert.match(mdx, /_data\.json/);
  });
});
