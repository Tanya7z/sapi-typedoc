import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { writeVanillaDataIndex } from './vanilla-data-index.js';

/** 迷你 barrel：仅再导出一个 enum；旁路文件不进 barrel */
function writeTinyVanillaFixture(translatedRoot: string) {
  const pkg = join(translatedRoot, 'vanilla-data');
  mkdirSync(pkg, { recursive: true });
  writeFileSync(
    join(translatedRoot, 'vanilla-data.d.ts'),
    'export * from "./vanilla-data/index";\n',
    'utf-8',
  );
  writeFileSync(
    join(pkg, 'index.d.ts'),
    "export * from './mojang-block';\n",
    'utf-8',
  );
  writeFileSync(
    join(pkg, 'mojang-block.d.ts'),
    'export declare enum MinecraftBlockTypes {\n  Air = "minecraft:air",\n}\n',
    'utf-8',
  );
  writeFileSync(
    join(pkg, 'mojang-potionLiquid.d.ts'),
    'export declare enum MinecraftPotionLiquidTypes {\n  Regular = "Regular",\n}\n',
    'utf-8',
  );
}

describe('writeVanillaDataIndex', () => {
  it('写出按字母分组的名称索引，并跟随 re-export', () => {
    const root = mkdtempSync(join(tmpdir(), 'vd-index-'));
    const translatedRoot = join(root, 'translated');
    const docsRoot = join(root, 'docs');
    mkdirSync(translatedRoot, { recursive: true });
    writeTinyVanillaFixture(translatedRoot);

    const ok = writeVanillaDataIndex({
      translatedPath: translatedRoot,
      docsDir: docsRoot,
    });
    assert.equal(ok, true);

    const indexPath = join(docsRoot, 'vanilla-data', 'index.mdx');
    const metaPath = join(docsRoot, 'vanilla-data', '_meta.json');
    assert.ok(existsSync(indexPath));
    assert.ok(existsSync(metaPath));

    const body = readFileSync(indexPath, 'utf-8');
    assert.match(body, /title: vanilla-data/);
    assert.match(body, /:::tip 精简索引/);
    assert.match(body, /^## M$/m);
    assert.match(body, /`MinecraftBlockTypes`/);
    // 未从 barrel 再导出的声明不应出现在包入口导出索引中
    assert.doesNotMatch(body, /MinecraftPotionLiquidTypes/);
  });

  it('缺少入口时返回 false', () => {
    const root = mkdtempSync(join(tmpdir(), 'vd-missing-'));
    const translatedRoot = join(root, 'translated');
    const docsRoot = join(root, 'docs');
    mkdirSync(translatedRoot, { recursive: true });

    const ok = writeVanillaDataIndex({
      translatedPath: translatedRoot,
      docsDir: docsRoot,
    });
    assert.equal(ok, false);
    assert.equal(existsSync(join(docsRoot, 'vanilla-data')), false);
  });
});
