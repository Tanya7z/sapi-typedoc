/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 随机附魔掉落物品的战利品物品函数。
 *
 * Loot item function that randomly enchants the dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomlyFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 确定是否将宝藏附魔包含在随机选择的附魔中。
     *
     * Determines whether or not treasure enchantments are included
     * in the randomly chosen enchantments.
     *
     */
    readonly treasure: boolean;
}
