/* IMPORT */ import { LootPoolEntry } from '..';

/**
 * 表示包含对另一个战利品表（由其路径描述）的引用的战利品池条目。
 *
 * Represents a loot pool entry containing a reference to
 * another loot table, described by its path.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableReference extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 引用的战利品表的路径。示例：`loot_tables/chests/village/village_bundle.json`
     *
     * The path to the referenced loot table. Example:
     * `loot_tables/chests/village/village_bundle.json`
     *
     */
    readonly path: string;
}
