/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 随机修改掉落物品方块状态的战利品物品函数。
 *
 * Loot item function that randomly modifies the block state of
 * the item dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomBlockStateFunction extends LootItemFunction {
    private constructor();
    readonly blockState: string;
    /**
     * @remarks
     * 函数随机选择给定方块状态值的范围，包含最小值和最大值。
     *
     * The range from which the function randomly chooses the value
     * to assign to the given block state. Contains minimum and
     * maximum values.
     *
     */
    readonly values: NumberRange;
}
