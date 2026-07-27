/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * 包含与物品被用于方块相关的信息。该事件在玩家使用的物品成功触发实体交互时触发。
 *
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers an entity interaction.
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被使用的受影响物品堆。
     *
     * The impacted item stack that is being used.
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * 返回触发该物品事件的源实体。
     *
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}
