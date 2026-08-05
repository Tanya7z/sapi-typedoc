/* IMPORT */ import { BlockEvent, Direction, Player, Vector3 } from '..';

/**
 * 包含有关特定方块被交互的信息。
 * 
 * Contains information regarding a specific block being
 * interacted with.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被交互的方块面。
     * 
     * The block face that was interacted with.
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 玩家交互的位置，相对于方块的西北下角。
     * 
     * Location relative to the bottom north-west corner of the
     * block that the player interacted with.
     *
     */
    readonly faceLocation?: Vector3;
    /**
     * @remarks
     * 与此方块交互的玩家。
     * 
     * The player that interacted with this block.
     *
     */
    readonly player?: Player;
}
