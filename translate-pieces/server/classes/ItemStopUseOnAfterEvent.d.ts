/* IMPORT */ import { Block, ItemStack, Player } from '..';

/**
 * 包含与已停止对某方块使用的物品相关的信息。当玩家按
 * 下「使用物品/放置方块」按钮成功使用物品或放置方块时，
 * 会触发此事件。如果放置了多个方块，则此事件仅在放置
 * 开始的瞬间触发一次。注意：此事件不能与锄或斧物品一起使用。
 *
 * Contains information related to an item that has stopped
 * being used on a block. This event fires when a player
 * successfully uses an item or places a block by pressing the
 * Use Item / Place Block button. If multiple blocks are
 * placed, this event will only occur once at the beginning of
 * the block placement. Note: This event cannot be used with
 * Hoe or Axe items.
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 物品所作用的目标方块。
     *
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在作用于方块的受影响的物品堆。
     *
     * The impacted item stack that is being used on a block.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}
