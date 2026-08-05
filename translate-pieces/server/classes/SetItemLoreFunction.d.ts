/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 修改掉落物品 lore 的战利品物品函数。
 *
 * Loot item function that modifies the lore of the item
 * dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemLoreFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于掉落物品的 lore。
     *
     * The lore to apply to the dropped item.
     *
     */
    readonly lore: string[];
}
