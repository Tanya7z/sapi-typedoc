/* IMPORT */ import { BlockFilter } from '..';

/**
 * 包含配置方块射线投射查询的额外选项。
 *
 * Contains additional options for configuring a block raycast
 * query.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockRaycastOptions extends BlockFilter {
    /**
     * @remarks
     * 如果为 `true`，液体方块将被视为可以"阻挡"射线投射的方块。
     *
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * 如果为 `true`，像藤蔓和花朵这类可穿过的方块将被视为可以"阻挡"射线投射的方块。
     *
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * 处理射线投射的最大距离，以方块为单位。
     *
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}
