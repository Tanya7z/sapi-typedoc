import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { docsDir } from './constants.js';
import { writeVanillaDataIndex } from './vanilla-data-index.js';

describe('writeVanillaDataIndex', () => {
  it('写出按字母分组的名称索引，并跟随 re-export', () => {
    const ok = writeVanillaDataIndex();
    assert.equal(ok, true);

    const indexPath = join(docsDir, 'vanilla-data', 'index.mdx');
    const metaPath = join(docsDir, 'vanilla-data', '_meta.json');
    assert.ok(existsSync(indexPath));
    assert.ok(existsSync(metaPath));

    const body = readFileSync(indexPath, 'utf-8');
    assert.match(body, /title: vanilla-data/);
    assert.match(body, /:::tip 精简索引/);
    assert.match(body, /^## M$/m);
    assert.match(body, /`MinecraftBlockTypes`/);
    assert.match(body, /`MinecraftBiomeTypes`/);
    // 未从 barrel 再导出的声明不应出现在包入口导出索引中
    assert.doesNotMatch(body, /MinecraftPotionLiquidTypes/);
  });
});
