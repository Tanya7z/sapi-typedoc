/* IMPORT */ import { EnchantInfo, LootItemFunction } from '..';

/**
 * 为掉落物品应用一个或多个预定义附魔的战利品物品函数。
 *
 * Loot item function that applies one or several predefined
 * enchants to the dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SpecificEnchantFunction extends LootItemFunction {
    private constructor();
    readonly enchantments: EnchantInfo[];
}
