/* IMPORT */ import { LootItemCondition } from '..';

/**
 * 将给定值应用于战利品掉落几率（受掉落发生区域修正）的战利品物品条件。
 *
 * Loot item condition that applies a given value to the
 * chances that loot will drop, modified by the region the drop
 * is happening within.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的基础几率，范围为 0.0-1.0，将受当前区域倍率的修正。
     *
     * The base chance, from 0.0-1.0, that loot will drop. Will be
     * modified by the current region's multiplier.
     *
     */
    readonly maxChance: number;
}
