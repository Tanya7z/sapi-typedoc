/**
 * 表示一个已添加到实体上的效果——例如中毒。
 *
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * 获取应用于此效果的放大器。示例值通常范围为 0 到 4。例如：效果"跳跃提升 II"的放大器值为 1。
     *
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     *
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 获取此效果的玩家友好名称。
     *
     * Gets the player-friendly name of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * 获取此效果的整个指定持续时间（以 tick 为单位）。每秒有 20 tick。使用 {@link TicksPerSecond} 常量在 tick 和秒之间进行转换。
     *
     * Gets the entire specified duration, in ticks, of this
     * effect. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * 返回一个效果实例在此上下文中是否可用于使用。
     *
     * Returns whether an effect instance is available for use in
     * this context.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取此效果的类型 ID。
     *
     * Gets the type id of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
}
