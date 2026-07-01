/* IMPORT */ import { Block, Direction, Vector3 } from '..';

/**
 * 包含方块射线投射命中结果的信息。
 *
 * Contains information for block raycast hit results.
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * 被命中的方块。
     *
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * 被命中的方块面。
     *
     * Face of the block that was hit.
     *
     */
    face: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的命中位置。
     *
     * Hit location relative to the bottom north-west corner of the
     * block.
     *
     */
    faceLocation: Vector3;
}
