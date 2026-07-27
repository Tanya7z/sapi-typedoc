/* IMPORT */ import { Block, Direction, Vector3 } from '..';

/**
 * 包含方块被击中事件的更多信息。
 *
 * Contains more information for events where a block is hit.
 */
export interface BlockHitInformation {
    /**
     * @remarks
     * 被击中的方块。
     *
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * 被击中的方块面。
     *
     * Face of the block that was hit.
     *
     */
    face: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的位置。
     *
     * Location relative to the bottom north-west corner of the
     * block.
     *
     */
    faceLocation: Vector3;
}
