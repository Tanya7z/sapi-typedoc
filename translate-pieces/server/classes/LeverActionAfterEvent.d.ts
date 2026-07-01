/* IMPORT */ import { BlockEvent, Player } from '..';

/**
 * 包含与拉杆激活或停用变化相关的信息。
 *
 * Contains information related to changes to a lever
 * activating or deactivating.
 * @seeExample leverActionEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果拉杆已激活（即正在传输电力），则为 `true`。
     *
     * True if the lever is activated (that is, transmitting
     * power).
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * 触发拉杆激活的可选玩家。
     *
     * Optional player that triggered the lever activation.
     *
     */
    readonly player: Player;
}
