import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { ensureVanillaDataNav } from './write-nav.js';

type NavItem = {
  text: string;
  link?: string;
  activeMatch?: string;
  items?: NavItem[];
};

function readNav(root: string): NavItem[] {
  return JSON.parse(readFileSync(join(root, '_nav.json'), 'utf-8')) as NavItem[];
}

describe('ensureVanillaDataNav', () => {
  it('empty-refs 补齐 vanilla-data，且保留主模块与更多项', () => {
    const root = mkdtempSync(join(tmpdir(), 'write-nav-'));
    const initial: NavItem[] = [
      { text: 'server', link: '/server/', activeMatch: '/server/' },
      { text: 'server-ui', link: '/server-ui/', activeMatch: '/server-ui/' },
      { text: 'common', link: '/common/', activeMatch: '/common/' },
      { text: 'math', link: '/math/', activeMatch: '/math/' },
      {
        text: '更多',
        items: [
          { text: 'server-net', link: '/server-net/' },
          { text: 'server-admin', link: '/server-admin/' },
          { text: 'diagnostics', link: '/diagnostics/' },
          { text: '标签索引', link: '/tags/' },
        ],
      },
      { text: '更新日志', link: '/changelog/', activeMatch: '/changelog/' },
      { text: 'GitHub', link: 'https://github.com/Tanya7z/sapi-typedoc' },
    ];
    writeFileSync(join(root, '_nav.json'), `${JSON.stringify(initial, null, 2)}\n`, 'utf-8');

    assert.equal(ensureVanillaDataNav({ docsDir: root }), true);

    const nav = readNav(root);
    for (const name of ['server', 'server-ui', 'common', 'math']) {
      assert.ok(
        nav.some((item) => item.text === name),
        `应保留主模块 ${name}`,
      );
    }

    const more = nav.find((item) => item.text === '更多');
    assert.ok(more?.items, '应保留「更多」分组');
    const items = more.items!;
    assert.ok(items.some((item) => item.text === 'server-net'));
    assert.ok(items.some((item) => item.text === 'server-admin'));
    assert.ok(items.some((item) => item.text === 'diagnostics'));

    const vanillaIdx = items.findIndex(
      (item) => item.text === 'vanilla-data' && item.link === '/vanilla-data/',
    );
    const tagsIdx = items.findIndex((item) => item.text === '标签索引');
    assert.ok(vanillaIdx >= 0, '更多中应含 vanilla-data');
    assert.ok(tagsIdx >= 0, '更多中应保留标签索引');
    assert.ok(vanillaIdx < tagsIdx, 'vanilla-data 应排在标签索引之前');
  });

  it('缺少 _nav.json 时跳过', () => {
    const root = mkdtempSync(join(tmpdir(), 'write-nav-missing-'));
    assert.equal(ensureVanillaDataNav({ docsDir: root }), false);
  });

  it('已存在 vanilla-data 时幂等', () => {
    const root = mkdtempSync(join(tmpdir(), 'write-nav-idem-'));
    const initial: NavItem[] = [
      { text: 'server', link: '/server/', activeMatch: '/server/' },
      {
        text: '更多',
        items: [
          { text: 'vanilla-data', link: '/vanilla-data/' },
          { text: '标签索引', link: '/tags/' },
        ],
      },
    ];
    writeFileSync(join(root, '_nav.json'), `${JSON.stringify(initial, null, 2)}\n`, 'utf-8');

    assert.equal(ensureVanillaDataNav({ docsDir: root }), true);
    const more = readNav(root).find((item) => item.text === '更多');
    assert.equal(
      more?.items?.filter((item) => item.text === 'vanilla-data').length,
      1,
    );
  });
});
