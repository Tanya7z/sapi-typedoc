/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 修改不祥之瓶增幅值（amplifier）的战利品物品函数。
 *
 * Loot item function that modifies an ominous bottle's
 * amplifier value.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetOminousBottleFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择增幅值（amplifier）的范围，包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * amplifier value to assign. Contains minimum and maximum
     * values.
     *
     */
    readonly amplifier: NumberRange;
}
