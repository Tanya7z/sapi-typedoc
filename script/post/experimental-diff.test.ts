import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import {
  buildModuleDiffFromSurfaces,
  collectExportSurface,
  diffSurfaces,
  surfaceFromRecord,
} from './experimental-diff.js';

describe('diffSurfaces / buildModuleDiffFromSurfaces', () => {
  it('无稳定轨时 allExperimental，列出全部预览符号', () => {
    const preview = surfaceFromRecord({
      World: ['getPlayers'],
      NewApi: [],
    });
    const diff = diffSurfaces(preview, undefined, { preview: '1.0.0-beta' });
    assert.equal(diff.allExperimental, true);
    assert.deepEqual(diff.experimentalSymbols, ['NewApi', 'World']);
    assert.deepEqual(diff.experimentalMembers, {});
  });

  it('stable === preview 时无增量（文档即稳定轨）', () => {
    const preview = surfaceFromRecord({ A: ['x'] });
    const stable = surfaceFromRecord({ A: ['x'] });
    const diff = diffSurfaces(preview, stable, { stable: '1.0.0', preview: '1.0.0' });
    assert.equal(diff.allExperimental, false);
    assert.deepEqual(diff.experimentalSymbols, []);
    assert.deepEqual(diff.experimentalMembers, {});
  });

  it('仅预览符号 + 共有符号新增成员', () => {
    const stable = surfaceFromRecord({
      World: ['getPlayers', 'id'],
      GameMode: ['Survival'],
    });
    const preview = surfaceFromRecord({
      World: ['getPlayers', 'id', 'getFoo'],
      GameMode: ['Survival'],
      BrandNew: ['bar'],
    });
    const diff = buildModuleDiffFromSurfaces('server', preview, stable, {
      stable: '2.0.0',
      preview: '2.1.0-beta',
    });
    assert.equal(diff.allExperimental, false);
    assert.deepEqual(diff.experimentalSymbols, ['BrandNew']);
    assert.deepEqual(diff.experimentalMembers, { World: ['getFoo'] });
  });
});

describe('collectExportSurface', () => {
  it('收集 class / enum 导出与成员', () => {
    const root = mkdtempSync(join(tmpdir(), 'exp-surf-'));
    const entry = join(root, 'index.d.ts');
    writeFileSync(
      entry,
      `
export declare class World {
  getPlayers(): void;
  getFoo(): void;
  constructor();
}
export declare enum GameMode {
  Survival = 'Survival',
  Creative = 'Creative',
}
export declare function tick(): void;
`,
      'utf-8',
    );
    const surface = collectExportSurface(entry);
    assert.ok(surface.has('World'));
    assert.ok(surface.get('World')!.has('getPlayers'));
    assert.ok(surface.get('World')!.has('getFoo'));
    assert.ok(surface.get('World')!.has('constructor'));
    assert.ok(surface.get('GameMode')!.has('Creative'));
    assert.ok(surface.has('tick'));
    assert.equal(surface.get('tick')!.size, 0);
  });

  it('跟随 export * re-export', () => {
    const root = mkdtempSync(join(tmpdir(), 'exp-re-'));
    const sub = join(root, 'sub');
    mkdirSync(sub, { recursive: true });
    writeFileSync(join(sub, 'a.d.ts'), 'export declare class OnlyInSub { hello(): void; }\n', 'utf-8');
    const entry = join(root, 'index.d.ts');
    writeFileSync(entry, 'export * from "./sub/a";\n', 'utf-8');
    const surface = collectExportSurface(entry, [join(sub, '**', '*.d.ts')]);
    assert.ok(surface.has('OnlyInSub'));
    assert.ok(surface.get('OnlyInSub')!.has('hello'));
  });
});
