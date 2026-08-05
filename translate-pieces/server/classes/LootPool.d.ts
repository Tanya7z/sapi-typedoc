/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemCondition, LootPoolEntry, LootPoolTiers } from '..';

/**
 * 条目的集合，每个条目单独决定战利品掉落。可以包含决定掉落结果的数值，包括投掷次数、额外投掷次数和层级。
 *
 * A collection of entries which individually determine loot
 * drops. Can contain values determining drop outcomes,
 * including rolls, bonus rolls and tiers.
 */
export class LootPool {
    private constructor();
    /**
     * @remarks
     * 返回基于玩家幸运等级战利品池将额外投掷的次数，表示为从最小到最大投掷次数的范围。
     *
     * Returns the number of extra times a loot pool will be rolled
     * based on the player's luck level, represented as a range
     * from minimum to maximum rolls.
     *
     */
    readonly bonusRolls: NumberRange;
    readonly conditions: LootItemCondition[];
    /**
     * @remarks
     * 获取战利品池中包含的所有战利品池条目的完整列表。
     *
     * Gets a complete list of all loot pool entries contained in
     * the loot pool.
     *
     */
    readonly entries: LootPoolEntry[];
    /**
     * @remarks
     * 返回战利品池将投掷的次数，表示为从最小到最大投掷次数的范围。
     *
     * Returns the number of times a loot pool will be rolled,
     * represented as a range from minimum to maximum rolls.
     *
     */
    readonly rolls: NumberRange;
    /**
     * @remarks
     * 获取给定战利品表的战利品池层级值（如果存在）。
     *
     * Gets the loot pool tier values for a given table if they
     * exist.
     *
     */
    readonly tiers?: LootPoolTiers;
}
