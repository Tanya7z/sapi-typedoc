/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 为掉落药水分配类型的战利品物品函数。
 *
 * Loot item function that assigns a type to a dropped potion.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetPotionFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 分配给掉落药水的 id。
     *
     * The id to be assigned to the dropped potion.
     *
     */
    readonly id: string;
}
