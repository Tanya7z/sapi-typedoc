/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 修改战利品池条目掉落物品数量的战利品物品函数。
 *
 * Loot item function that modifies the number items that drop
 * from the loot pool entry.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemCountFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择掉落物品数量的范围，包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * number of items to drop. Contains minimum and maximum
     * values.
     *
     */
    readonly count: NumberRange;
}
