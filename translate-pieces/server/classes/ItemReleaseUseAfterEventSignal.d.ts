/* IMPORT */ import { ItemReleaseUseAfterEvent } from '..';

/**
 * 管理与可蓄力物品停止蓄力事件相关联的回调。
 *
 * Manages callbacks that are connected to the releasing of
 * charging for a chargeable item.
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可蓄力物品停止蓄力时将被调用。
     *
     * Adds a callback that will be called when a chargeable item
     * is released from charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使可蓄力物品停止蓄力时不再被调用。
     *
     * Removes a callback from being called when a chargeable item
     * is released from charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}
