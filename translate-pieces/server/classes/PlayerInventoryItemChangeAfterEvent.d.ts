/* IMPORT */ import { ItemStack, Player, PlayerInventoryType } from '..';

/**
 * 包含有关玩家库存物品更改之后的事件信息。
 *
 * Contains information regarding an event after a player's
 * inventory item changes.
 */
export class PlayerInventoryItemChangeAfterEvent {
    private constructor();
    /**
     * 之前的物品堆。
     *
     * @remarks
     * The previous item stack.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * 库存类型。
     *
     * @remarks
     * Inventory type.
     *
     */
    readonly inventoryType: PlayerInventoryType;
    /**
     * 新的物品堆。
     *
     * @remarks
     * The new item stack.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 发生更改的槽位索引。
     *
     * @remarks
     * The slot index with the change.
     *
     */
    readonly slot: number;
}
