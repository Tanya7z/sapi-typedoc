/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * 包含与物品使用相关的信息。
 *
 * Contains information regarding the use of an item.
 */
export class ItemComponentUseEvent {
    private constructor();
    /**
     * @remarks
     * 物品被使用时的物品堆。
     *
     * The item stack when the item was used.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 使用该物品的玩家。
     *
     * The player who used the item.
     *
     */
    readonly source: Player;
}
