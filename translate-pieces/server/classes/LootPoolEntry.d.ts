/**
 * 表示战利品表中的一个条目，描述战利品掉落时的一个可能掉落物。可以包含一个物品、另一个战利品表、另一个战利品表的路径或空掉落。
 *
 * Represents one entry within Loot Table, which describes one
 * possible drop when a loot drop occurs. Can contain an item,
 * another loot table, a path to another loot table, or an
 * empty drop.
 */
export class LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 获取给定战利品池条目的品质。
     *
     * Gets the quality of a given loot pool entry.
     *
     */
    readonly quality: number;
    /**
     * @remarks
     * 获取给定战利品池条目的子表。
     *
     * Gets the subtable of a given loot pool entry.
     *
     */
    readonly subTable?: LootPoolEntry;
    /**
     * @remarks
     * 获取给定战利品池条目的权重。
     *
     * Gets the weight of a given loot pool entry.
     *
     */
    readonly weight: number;
}
