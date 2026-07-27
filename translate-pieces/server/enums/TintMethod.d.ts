/**
 * 应用于方块或方块部分的着色逻辑。当世界位置作为上下文的一部分时，颜色可能会变化，因为生物群系通常会影响最终的着色结果。
 *
 * Tint logic applied to a block or part of a block. The color
 * may vary when a world position is part of the context, as
 * biomes often have an influence on the resulting tint.
 */
export enum TintMethod {
    /**
     * @remarks
     * 指定白桦树叶着色方法。
     *
     * Specifies a birch foliage tint method.
     *
     */
    BirchFoliage = 'BirchFoliage',
    /**
     * @remarks
     * 指定默认树叶着色方法。
     *
     * Specifies a default foliage tint method.
     *
     */
    DefaultFoliage = 'DefaultFoliage',
    /**
     * @remarks
     * 指定干燥树叶着色方法。
     *
     * Specifies a dry foliage tint method.
     *
     */
    DryFoliage = 'DryFoliage',
    /**
     * @remarks
     * 指定常绿树叶着色方法。
     *
     * Specifies an evergreen foliage tint method.
     *
     */
    EvergreenFoliage = 'EvergreenFoliage',
    /**
     * @remarks
     * 指定草地着色方法。
     *
     * Specifies a grass tint method.
     *
     */
    Grass = 'Grass',
    /**
     * @remarks
     * 指定不使用着色方法，结果为白色着色。
     *
     * Specifies no tint method, resulting in a white tint.
     *
     */
    None = 'None',
    /**
     * @remarks
     * 指定水体着色方法。
     *
     * Specifies a water tint method.
     *
     */
    Water = 'Water',
}
