/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, ItemStack, Player } from '..';

/**
 * @rc
 * 包含玩家取消破坏方块后的事件相关信息。
 *
 * Contains information regarding an event after a player
 * cancels breaking a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCancelBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 玩家取消破坏的方块的排列。
     *
     * @remarks
     * The permutation of the block that the player cancelled
     * breaking.
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * 玩家取消时破坏方块的进度，范围为 (0, 1)。
     *
     * @remarks
     * The progress of breaking the block when the player cancelled
     * in the exclusive range (0, 1).
     *
     */
    readonly breakProgress: number;
    /**
     * 正在被破坏的方块的面。
     *
     * @remarks
     * The face of the block that was being broken.
     *
     */
    readonly face: Direction;
    /**
     * 玩家用于破坏方块的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that the player was using to break the block,
     * or undefined if empty hand.
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * 取消破坏此方块的玩家。
     *
     * @remarks
     * Player that cancelled breaking the block for this event.
     *
     */
    readonly player: Player;
}
