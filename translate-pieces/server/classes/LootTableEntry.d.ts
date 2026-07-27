/* IMPORT */ import { LootPoolEntry, LootTable } from '..';

/**
 * 表示包含另一个独立的嵌套战利品表的战利品池条目。
 *
 * Represents a loot pool entry containing another separate,
 * nested loot table.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableEntry extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 获取存储为父战利品池中子表的战利品表。
     *
     * Gets the loot table stored as a subtable in the parent loot
     * pool.
     *
     */
    readonly lootTable: LootTable;
}
