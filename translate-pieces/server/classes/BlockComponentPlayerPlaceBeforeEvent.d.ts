/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, Player } from '..';

/**
 * 包含有关玩家放置方块之前的事件信息。
 * 
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 `true`，则取消方块放置事件。
     * 
     * If set to true, cancels the block place event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 放置时所朝向的方块面。
     * 
     * The block face that was placed onto.
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 如果事件未被取消，将放置的方块置换。如果设置为不同的方块置换，则将放置该置换。
     * 
     * The block permutation that will be placed if the event is
     * not cancelled. If set to a different block permutation, that
     * permutation will be placed instead.
     *
     */
    permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * 正在放置此方块的玩家。
     * 
     * The player that is placing this block.
     *
     */
    readonly player?: Player;
}
