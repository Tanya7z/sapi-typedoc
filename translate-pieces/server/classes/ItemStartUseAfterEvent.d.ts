/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * 包含与可蓄力物品开始蓄力相关的信息。
 *
 * Contains information related to a chargeable item starting
 * to be charged.
 */
export class ItemStartUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在开始蓄力的受影响的物品堆。
     *
     * The impacted item stack that is starting to be charged.
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
