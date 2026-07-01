/* IMPORT */ import { LootPoolEntry } from '..';

/**
 * 表示战利品池中的一个完全空的条目。如果选择此条目，则不会掉落任何物品。
 *
 * Represents a completely empty entry in a loot pool. If this
 * entry is chosen, no items will drop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EmptyLootItem extends LootPoolEntry {
    private constructor();
}
