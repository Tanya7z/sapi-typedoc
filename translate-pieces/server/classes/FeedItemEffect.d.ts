/**
 * 表示将食物喂给实体后产生的效果。
 *
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * 获取可能应用于此效果的倍率。有效值为从 0 开始的整数，通常介于 0 到 4 之间。
     *
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually
     * ranging between 0 and 4.
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 实体被喂食此物品后应用该效果的概率。有效值介于 0 到 1 之间。
     *
     * Chance that this effect is applied as a result of the entity
     * being fed this item. Valid values range between 0 and 1.
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 获取此效果的持续时间，以刻为单位。
     *
     * Gets the duration, in ticks, of this effect.
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取要应用的效果标识符。示例值包括 'fire_resistance' 或 'regeneration'。
     *
     * Gets the identifier of the effect to apply. Example values
     * include 'fire_resistance' or 'regeneration'.
     *
     */
    readonly name: string;
}
