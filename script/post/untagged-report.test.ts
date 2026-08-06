import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { collectUntaggedSymbols, writeUntaggedReport } from './untagged-report.js';
import type { MemberRef } from './restructure-modules.js';

describe('collectUntaggedSymbols / writeUntaggedReport', () => {
  it('仅收集空 domainTags 的可增强成员', () => {
    const dir = mkdtempSync(join(tmpdir(), 'untagged-'));
    const tagged = join(dir, 'Player.mdx');
    const untagged = join(dir, 'Foo.mdx');
    writeFileSync(tagged, '---\ntitle: "Player"\ndomainTags:\n  - player\n---\n', 'utf-8');
    writeFileSync(untagged, '---\ntitle: "Foo"\ndomainTags: []\n---\n', 'utf-8');

    const refs: MemberRef[] = [
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'Player',
        fileName: 'Player.mdx',
        absPath: tagged,
      },
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'Foo',
        fileName: 'Foo.mdx',
        absPath: untagged,
      },
      {
        module: 'server',
        kind: 'modules',
        symbolName: 'server',
        fileName: 'index.md',
        absPath: join(dir, 'index.md'),
      },
    ];

    const list = collectUntaggedSymbols(refs);
    assert.equal(list.length, 1);
    assert.deepEqual(list[0], { module: 'server', kind: 'classes', name: 'Foo' });
  });

  it('写 cache JSON；refs 为空时跳过并保留既有文件', () => {
    const dir = mkdtempSync(join(tmpdir(), 'untagged-out-'));
    mkdirSync(dir, { recursive: true });
    const outPath = join(dir, 'untagged-symbols.json');

    writeFileSync(outPath, 'KEEP\n', 'utf-8');
    assert.equal(writeUntaggedReport([], { outPath }), undefined);
    assert.equal(readFileSync(outPath, 'utf-8'), 'KEEP\n');

    const member = join(dir, 'Bar.mdx');
    writeFileSync(member, '---\ntitle: "Bar"\ndomainTags: []\n---\n', 'utf-8');
    const report = writeUntaggedReport(
      [
        {
          module: 'math',
          kind: 'classes',
          symbolName: 'Bar',
          fileName: 'Bar.mdx',
          absPath: member,
        },
      ],
      { outPath },
    );
    assert.ok(report);
    assert.equal(report!.count, 1);
    const parsed = JSON.parse(readFileSync(outPath, 'utf-8')) as {
      count: number;
      symbols: { name: string }[];
    };
    assert.equal(parsed.count, 1);
    assert.equal(parsed.symbols[0]!.name, 'Bar');
  });
});
