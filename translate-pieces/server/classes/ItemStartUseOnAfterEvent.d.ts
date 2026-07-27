/* IMPORT */ import { Block, Direction, ItemStack, Player } from '..';

/**
 * 包含有关在方块上使用物品的信息。玩家按下“使用物品/放置方块”按钮并成功使用物品或放置方块时触发此事件。在执行建造操作时，仅对交互的第一个方块触发。注意：此事件不能与锄头或斧头物品一起使用。
 *
 * Contains information related to an item being used on a
 * block. This event fires when a player presses the the Use
 * Item / Place Block button to successfully use an item or
 * place a block. Fires for the first block that is interacted
 * with when performing a build action. Note: This event cannot
 * be used with Hoe or Axe items.
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 使用物品的方块。
     *
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在使用物品的方块面。
     *
     * The face of the block that an item is being used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 开始使用的受影响物品堆。在某些游戏场景中可能为 `undefined`，例如空手按下按钮时。
     *
     * The impacted item stack that is starting to be used. Can be
     * undefined in some gameplay scenarios like pushing a button
     * with an empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的来源实体。
     *
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}
