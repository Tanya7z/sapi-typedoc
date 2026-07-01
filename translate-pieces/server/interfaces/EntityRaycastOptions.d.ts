/* IMPORT */ import { EntityFilter } from '..';

/**
 * 包含实体射线投射操作的额外选项。
 *
 * Contains additional options for an entity raycast operation.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityRaycastOptions extends EntityFilter {
    /**
     * @remarks
     * 如果为 `true`，方块将不被视为可以"阻挡"射线投射的方块。
     *
     * If true, blocks will not be considered as blocks that 'stop'
     * the raycast.
     *
     */
    ignoreBlockCollision?: boolean;
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
