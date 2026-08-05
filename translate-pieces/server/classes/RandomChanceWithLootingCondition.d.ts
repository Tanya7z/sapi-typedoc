/* IMPORT */ import { LootItemCondition } from '..';

/**
 * 将给定值应用于战利品掉落几率（受所用工具的抢夺附魔等级影响）的战利品物品条件。
 *
 * Loot item condition that applies a given value to the
 * chances that loot will drop, modified by the level of
 * looting enchantment on the tool used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceWithLootingCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的基础几率，范围为 0.0-1.0，将受 "lootingMultiplier" 值的修正。
     *
     * The base chance, from 0.0-1.0, that loot will drop. Will be
     * modified by the 'lootingMultiplier' value.
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 每级抢夺附魔增加的掉落几率。
     *
     * The increase in drop chance per looting enchant level.
     *
     */
    readonly lootingMultiplier: number;
}
