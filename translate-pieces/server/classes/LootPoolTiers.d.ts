/**
 * 表示在分层战利品池中决定战利品掉落的值。分层战利品池中的潜在掉落物是有序的，并通过此对象中的值控制的逻辑进行选择。
 *
 * Represents the values which determine loot drops in a tiered
 * loot pool. Potential drops from tiered loot pools are
 * ordered, and chosen via logic controlled by the values in
 * this object.
 */
export class LootPoolTiers {
    private constructor();
    /**
     * @remarks
     * 每次额外投掷尝试升级掉落物品层级的机会。
     *
     * The chance for each bonus roll attempt to upgrade the tier
     * of the dropped item.
     *
     */
    readonly bonusChance: number;
    /**
     * @remarks
     * 战利品掉落升级其层级的尝试次数，从而增加其在战利品池条目数组中的位置，产生更高级别的掉落。
     *
     * The number of attempts for the loot drop to upgrade its
     * tier, thereby incrementing its position in the loot pool
     * entry array, resulting in a higher tier drop.
     *
     */
    readonly bonusRolls: number;
    /**
     * @remarks
     * 表示确定掉落哪个战利品层级的起始点上界。下界始终为 1。例如，值为 3 将导致层级掉落逻辑从战利品池条目数组中 1 到 3 之间的随机选择位置开始。
     *
     * Represents the upper bound for the starting point in
     * determining which tier of loot to drop. The lower bound is
     * always 1. For example, a value of 3 would result in the tier
     * drop logic starting at a randomly selected position in the
     * loot pool entry array between 1 and 3.
     *
     */
    readonly initialRange: number;
}
