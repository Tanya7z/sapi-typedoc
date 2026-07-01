/* IMPORT */ import { BlockEvent, ItemStack, Player } from '..';

/**
 * 包含玩家破坏方块前的事件相关信息。
 *
 * Contains information regarding an event before a player
 * breaks a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * 如果设置为 `true`，则取消方块破坏事件。
     *
     * @remarks
     * If set to true, cancels the block break event.
     *
     */
    cancel: boolean;
    /**
     * 用于破坏方块的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that is being used to break the block, or
     * undefined if empty hand.
     *
     */
    itemStack?: ItemStack;
    /**
     * 破坏此方块的玩家。
     *
     * @remarks
     * Player breaking the block for this event.
     *
     */
    readonly player: Player;
}
