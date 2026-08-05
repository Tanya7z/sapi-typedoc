/**
 * 指定放置结构时结构方块应如何动画显示。
 *
 * Specifies how structure blocks should be animated when a
 * structure is placed.
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * 方块将一次一个随机放置。使用 @minecraft/server.StructurePlaceOptions.animationSeconds 控制所有方块放置完成所需的时间。
     *
     * Blocks will be randomly placed one at at time. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     *
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * 方块将从下到上一次一层地放置。使用 @minecraft/server.StructurePlaceOptions.animationSeconds 控制所有方块放置完成所需的时间。
     *
     * Blocks will be placed one layer at a time from bottom to
     * top. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     *
     */
    Layers = 'Layers',
    /**
     * @remarks
     * 所有方块将立即放置。
     *
     * All blocks will be placed immediately.
     *
     */
    None = 'None',
}
