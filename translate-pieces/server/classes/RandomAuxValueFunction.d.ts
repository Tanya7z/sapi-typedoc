/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 随机修改掉落物品数据值的战利品物品函数。
 *
 * Loot item function that randomly modifies the data value of
 * the item dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomAuxValueFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择数据值的范围，包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * data value to assign. Contains minimum and maximum values.
     *
     */
    readonly values: NumberRange;
}
