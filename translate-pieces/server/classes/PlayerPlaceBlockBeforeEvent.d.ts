/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, Player, Vector3 } from '..';

/**
 * @beta
 * 包含有关玩家放置方块之前的事件信息。
 *
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * 如果设置为 `true`，则取消方块放置事件。
     *
     * @remarks
     * If set to true, cancels the block place event.
     *
     */
    cancel: boolean;
    /**
     * 新方块所放置的方块面。
     *
     * @remarks
     * The face of the block that the new block is being placed on.
     *
     */
    readonly face: Direction;
    /**
     * 相对于方块底部西北角的新方块放置位置。
     *
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the new block is being placed onto.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * 如果事件未被取消，将放置的方块排列。
     *
     * @remarks
     * The block permutation that will be placed if the event is
     * not cancelled.
     *
     */
    readonly permutationToPlace: BlockPermutation;
    /**
     * 放置此事件方块的玩家。
     *
     * @remarks
     * Player that is placing the block for this event.
     *
     */
    readonly player: Player;
}
