/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 修改掉落物品耐久度值的战利品物品函数。
 *
 * Loot item function that modifies the durability value of the
 * item dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemDamageFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择耐久度值的范围，包含最小值和最大值。必须始终介于 0.0 和 1.0 之间。
     *
     * The value range from which the function randomly chooses the
     * durability value to assign. Contains minimum and maximum
     * values. Must always be between 0.0 and 1.0.
     *
     */
    readonly damage: NumberRange;
}
