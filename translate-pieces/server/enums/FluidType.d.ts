/**
 * 表示在包含液体的方块（如炼药锅）中使用的流体类型。
 *
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 */
export enum FluidType {
    /**
     * @remarks
     * 表示熔岩作为一种流体类型。
     *
     * Represents lava as a type of fluid.
     *
     */
    Lava = 'Lava',
    /**
     * @remarks
     * 表示药水作为一种流体类型。
     *
     * Represents a potion as a type of fluid.
     *
     */
    Potion = 'Potion',
    /**
     * @remarks
     * 表示细雪作为一种流体类型。
     *
     * Represents powder snow as a type of fluid.
     *
     */
    PowderSnow = 'PowderSnow',
    /**
     * @remarks
     * 表示水作为一种流体类型。
     *
     * Represents water as a type of fluida.
     *
     */
    Water = 'Water',
}
