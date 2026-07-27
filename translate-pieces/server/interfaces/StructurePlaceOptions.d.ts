/* IMPORT */ import { StructureAnimationMode, StructureMirrorAxis, StructureRotation } from '..';

/**
 * 为 {@link StructureManager.place} 提供额外的选项。
 *
 * Provides additional options for {@link
 * StructureManager.place}
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * 放置时结构的动画方式。
     *
     * How the Structure should be animated when placed.
     *
     */
    animationMode?: StructureAnimationMode;
    /**
     * @remarks
     * 动画持续多少秒。
     *
     * How many seconds the animation should take.
     *
     */
    animationSeconds?: number;
    /**
     * @remarks
     * 方块是否应包含在结构中。默认为 `true`。
     *
     * Whether blocks should be included in the structure. Defaults
     * to true.
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 实体是否应包含在结构中。默认为 `true`。
     *
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 应放置方块的百分比。值为 1 将放置 100% 的方块，而值为 0 则不放置任何方块。方块根据 {@link StructurePlaceOptions.integritySeed} 随机选择。
     *
     * What percentage of blocks should be placed. A value of 1
     * will place 100% of the blocks while a value of 0 will place
     * none. The blocks are chosen randomly based on the {@link
     * StructurePlaceOptions.integritySeed}.
     *
     */
    integrity?: number;
    /**
     * @remarks
     * 决定随机选择哪些方块进行放置的种子。默认为随机种子。
     *
     * Seed that determines which blocks are randomly chosen to be
     * placed. Defaults to a random seed.
     *
     */
    integritySeed?: string;
    /**
     * @remarks
     * 放置时结构应沿哪些轴进行镜像。默认为 StructureMirrorAxis.None。
     *
     * Which axes the Structure should be mirrored on when placed.
     * Defaults to StructureMirrorAxis.None.
     *
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * 放置时结构的旋转方式。默认为 AxisAlignedRotation.None。
     *
     * How the Structure should be rotated when placed. Defaults to
     * AxisAlignedRotation.None.
     *
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * 放置时结构是否应被水淹没。默认为 `false`。如果为 `true`，则放置在水中时方块将被水淹没。
     *
     * Whether the structure should be waterlogged when placed.
     * Defaults to false. If true, blocks will become waterlogged
     * when placed in water.
     *
     */
    waterlogged?: boolean;
}
