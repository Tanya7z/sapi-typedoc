/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * 包含与可蓄力物品完成蓄力相关的信息。
 *
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseAfterEvent {
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
     * 返回触发此物品事件的源实体。
     *
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * 返回距蓄力完成周期还剩余的时长（以刻为单位）。
     *
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}
