/* IMPORT */ import { LootPool } from '..';

/**
 * 表示单个战利品表，决定杀死生物、破坏方块、填充容器等时生成哪些物品。
 *
 * Represents a single Loot Table, which determines what items
 * are generated when killing a mob, breaking a block, filling
 * a container, and more.
 */
export class LootTable {
    private constructor();
    /**
     * @remarks
     * 返回表示此战利品表的 JSON 文件的路径。不包括文件扩展名或 `loot_tables/` 文件夹前缀。示例：`entities/creeper`。
     *
     * Returns the path to the JSON file that represents this loot
     * table. Does not include file extension, or 'loot_tables/'
     * folder prefix. Example: `entities/creeper`.
     *
     */
    readonly path: string;
    /**
     * @remarks
     * 返回给定战利品表上的战利品池数组。
     *
     * Returns the array of loot pools on a given loot table.
     *
     */
    readonly pools: LootPool[];
}
