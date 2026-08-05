/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * 包含与可蓄力物品完成蓄力相关的信息。
 *
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseEvent {
    private constructor();
    /**
     * @remarks
     * 返回已完成蓄力的物品堆。
     *
     * Returns the item stack that has completed charging.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 返回触发该物品事件的源实体。
     *
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}
