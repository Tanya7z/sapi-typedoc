/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 战利品物品函数，使用与原版生物生成时附魔装备相同的算法，对掉落的物品应用随机附魔。
 *
 * Loot item function that applies a random enchant to the
 * dropped item using the same algorithm used while enchanting
 * equipment vanilla mobs spawn with.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomEquipmentFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 决定装备被附魔的可能性的值。
     *
     * Value that determines the likelihood of equipment being
     * enchanted.
     *
     */
    readonly chance: number;
}
