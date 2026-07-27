/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 如果提供的工具具有抢夺附魔，则掉落额外物品的战利品物品函数。
 *
 * Loot item function that drops extra items if the provided
 * tool has the looting enchant.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootingEnchantFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择额外物品掉落数量的数值范围。包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * number of extra items to drop. Contains minimum and maximum
     * values.
     *
     */
    readonly count: NumberRange;
}
