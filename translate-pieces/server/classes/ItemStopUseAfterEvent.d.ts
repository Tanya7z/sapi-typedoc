/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * 包含与可蓄力物品结束使用周期、或玩家释放该物品的使用动作相关的信息。
 *
 * Contains information related to a chargeable item has
 * finished an items use cycle, or when the player has released
 * the use action with the item.
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在停止蓄力的受影响的物品堆。
     * 当传送到不同维度时 ItemStopUseAfterEvent 也可能被触发，
     * 此时该值可能为 undefined。
     *
     * The impacted item stack that is stopping being charged.
     * ItemStopUseAfterEvent can be called when teleporting to a
     * different dimension and this can be undefined.
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
