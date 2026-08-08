import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { Project } from 'ts-morph';
import { extractModuleSymbols, summaryFromJsDocs } from './extract-symbols.js';
import { buildExamplesIndex, generateApiIndex, toManifestVersion } from './generate-api-index.js';

describe('toManifestVersion', () => {
  it('截取预览完整 npm 版本为 manifest 短版本', () => {
    assert.equal(
      toManifestVersion('2.11.0-beta.1.26.50-preview.20'),
      '2.11.0-beta',
    );
  });

  it('稳定版保持核心版本', () => {
    assert.equal(toManifestVersion('1.3.0'), '1.3.0');
  });
});

describe('extractModuleSymbols', () => {
  it('从临时 d.ts 抽取类成员与权限标签', () => {
    const root = mkdtempSync(join(tmpdir(), 'sapi-mcp-idx-'));
    writeFileSync(
      join(root, 'demo.d.ts'),
      `
/**
 * 演示玩家。
 * Demo player.
 */
export class DemoPlayer {
  /**
   * @worldMutation
   * @beta
   */
  teleport(x: number): void;
  /** @remarks 只读名 */
  readonly name: string;
}
export enum DemoMode {
  A = "a",
  B = "b",
}
`,
      'utf-8',
    );

    const symbols = extractModuleSymbols('demo', root, {
      tagLookup: new Map([['demo:DemoPlayer', ['player']]]),
    });
    const player = symbols.find((s) => s.name === 'DemoPlayer');
    assert.ok(player);
    assert.equal(player!.kind, 'classes');
    assert.equal(player!.path, '/demo/classes/DemoPlayer');
    assert.ok(player!.summary.includes('演示玩家'));
    assert.deepEqual(player!.tags, ['player']);
    const teleport = player!.members.find((m) => m.name === 'teleport');
    assert.ok(teleport);
    assert.ok(teleport!.privileges.includes('worldMutation'));
    assert.ok(teleport!.status.includes('beta'));
    const mode = symbols.find((s) => s.name === 'DemoMode');
    assert.ok(mode);
    assert.equal(mode!.kind, 'enums');
    assert.equal(mode!.members.length, 2);
  });
});

describe('buildExamplesIndex', () => {
  it('按符号路径建立反查', () => {
    const idx = buildExamplesIndex({
      examples: {
        'foo.ts': [
          {
            fileName: 'foo.ts',
            hash: 'abc',
            content: '```ts\n1\n```',
            sources: [
              { source: 'server', path: 'Player.teleport' },
              { source: 'server', path: 'Player' },
            ],
          },
        ],
      },
    });
    assert.equal(idx.examples.length, 1);
    assert.ok(idx.bySymbol['server:Player.teleport']?.includes(0));
    assert.ok(idx.bySymbol['server:Player']?.includes(0));
  });
});

describe('generateApiIndex', () => {
  it('写出三个 JSON 到 outDir', () => {
    const root = mkdtempSync(join(tmpdir(), 'sapi-mcp-gen-'));
    const translated = join(root, 'translated');
    mkdirSync(translated);
    writeFileSync(
      join(translated, 'server.d.ts'),
      `/** 世界 */\nexport class World {\n  getPlayers(): void;\n}\n`,
      'utf-8',
    );
    const outDir = join(root, 'out');
    const tagsPath = join(root, 'tags.json');
    writeFileSync(
      tagsPath,
      JSON.stringify({
        legend: [{ tag: 'world', meaning: '世界' }],
        items: [{ name: 'World', module: 'server', kind: 'classes', tags: ['world'], href: '/server/classes/World' }],
      }),
      'utf-8',
    );
    const metaPath = join(root, 'meta.json');
    writeFileSync(
      metaPath,
      JSON.stringify({
        dependencies: { '@minecraft/server': '2.11.0-beta.1.26.50-preview.20' },
        examples: {},
      }),
      'utf-8',
    );

    const result = generateApiIndex({
      translatedRoot: translated,
      tagsPath,
      diffPath: join(root, 'missing-diff.json'),
      metaPath,
      outDir,
      modules: ['server'],
    });
    assert.equal(result.api.symbolCount, 1);
    assert.equal(result.versions.packages['@minecraft/server']?.manifest, '2.11.0-beta');
    assert.ok(existsSync(join(outDir, 'api-index.json')));
    assert.ok(existsSync(join(outDir, 'examples-index.json')));
    assert.ok(existsSync(join(outDir, 'versions.json')));
  });
});

describe('summaryFromJsDocs', () => {
  it('取首段描述', () => {
    const project = new Project({ skipAddingFilesFromTsConfig: true });
    const sf = project.createSourceFile(
      't.d.ts',
      '/** 第一段。\n\n第二段。 */\nexport class A {}\n',
    );
    const cls = sf.getClassOrThrow('A');
    const summary = summaryFromJsDocs(cls.getJsDocs());
    assert.ok(summary.includes('第一段'));
  });
});
