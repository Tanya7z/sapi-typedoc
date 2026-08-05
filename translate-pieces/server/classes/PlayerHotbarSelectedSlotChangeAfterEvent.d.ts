/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * 包含玩家切换选择的快捷栏槽位后的事件相关信息。
 *
 * Contains information regarding an event after changing the
 * selected hotbar slot for a player.
 */
export class PlayerHotbarSelectedSlotChangeAfterEvent {
    private constructor();
    /**
     * 所选新槽位的物品堆。
     *
     * @remarks
     * The item stack of the new slot selected.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * 所选的新快捷栏槽位索引。
     *
     * @remarks
     * The new hotbar slot index selected.
     *
     */
    readonly newSlotSelected: number;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 先前选择的快捷栏槽位索引。
     *
     * @remarks
     * The previous hotbar slot index selected.
     *
     */
    readonly previousSlotSelected: number;
}
