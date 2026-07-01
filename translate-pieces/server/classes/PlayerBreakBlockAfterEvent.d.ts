/* IMPORT */ import { BlockEvent, BlockPermutation, ItemStack, Player } from '..';

/**
 * 包含玩家破坏方块后的事件相关信息。
 *
 * Contains information regarding an event after a player
 * breaks a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 返回该方块被破坏前的排列信息。
     *
     * @remarks
     * Returns permutation information about this block before it
     * was broken.
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * 用于破坏方块后手中的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that was used to break the block after the
     * block was broken, or undefined if empty hand.
     *
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * 用于破坏方块前手中的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that was used to break the block before the
     * block was broken, or undefined if empty hand.
     *
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * 破坏该方块的玩家。
     *
     * @remarks
     * Player that broke the block for this event.
     *
     */
    readonly player: Player;
}
