/* IMPORT */ import { LootItemCondition } from '..';

/**
 * 根据当前难度等级将给定值应用于战利品掉落几率的战利品物品条件。
 *
 * Loot item condition that applies given values to the chances
 * that loot will drop based on the current difficulty level.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 一个四元素数组，包含每个难度等级的战利品掉落几率，依次为：和平、简单、普通、困难。
     *
     * A four-element array containing the chance of a loot drop
     * occurring for each difficulty level, in order: Peaceful,
     * Easy, Normal, Hard.
     *
     */
    readonly chances: number[];
}
