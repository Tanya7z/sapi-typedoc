/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, ItemStack, Player } from '..';

/**
 * @rc
 * 包含有关玩家开始破坏方块之后的事件信息。
 *
 * Contains information regarding an event after a player
 * starts breaking a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerStartBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 玩家开始破坏的方块的排列。
     *
     * @remarks
     * The permutation of the block that the player is starting to
     * break.
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * 被破坏的方块面。
     *
     * @remarks
     * The face of the block being broken.
     *
     */
    readonly face: Direction;
    /**
     * 玩家用来破坏方块的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that the player is using to break the block,
     * or undefined if empty hand.
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * 开始破坏此事件方块的玩家。
     *
     * @remarks
     * Player that started breaking the block for this event.
     *
     */
    readonly player: Player;
}
