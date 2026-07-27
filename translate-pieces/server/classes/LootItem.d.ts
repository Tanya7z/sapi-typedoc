/* IMPORT */ import { ItemType, LootItemCondition, LootItemFunction, LootPoolEntry } from '..';

/**
 * 表示包含要掉落物品的战利品池条目。
 *
 * Represents a loot pool entry containing an item to drop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootItem extends LootPoolEntry {
    private constructor();
    /**
     * @beta
     */
    readonly conditions: LootItemCondition[];
    readonly functions: LootItemFunction[];
    /**
     * @remarks
     * 此条目中包含的物品名称。
     *
     * The name of the item contained in this entry.
     *
     */
    readonly name?: ItemType;
}
