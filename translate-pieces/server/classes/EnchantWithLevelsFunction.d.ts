/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 对掉落物品应用随机附魔的战利品物品函数。
 *
 * Loot item function that applies a random enchant to the
 * dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantWithLevelsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择要应用的附魔等级的值范围。包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * level of enchantment to apply. Contains minimum and maximum
     * values.
     *
     */
    readonly levels: NumberRange;
    /**
     * @remarks
     * 确定是否将宝藏附魔包含在随机附魔选择中的值。
     *
     * Value that determines whether or not treasure enchants
     * should be included in the random enchant selection.
     *
     */
    readonly treasure: boolean;
}
