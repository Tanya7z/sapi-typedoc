/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 修改掉落物品名称的战利品物品函数。
 *
 * Loot item function that modifies the name of the item
 * dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemNameFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于掉落物品的名称。
     *
     * The name to apply to the dropped item.
     *
     */
    readonly name: string;
}
