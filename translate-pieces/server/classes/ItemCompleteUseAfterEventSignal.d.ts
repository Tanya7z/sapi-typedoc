/* IMPORT */ import { ItemCompleteUseAfterEvent } from '..';

/**
 * 管理与可蓄力物品完成蓄力相关联的回调。
 *
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加当可蓄力物品完成蓄力时会被调用的回调。
     *
     * Adds a callback that will be called when a chargeable item
     * completes charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks
     * 移除当可蓄力物品完成蓄力时不再被调用的回调。
     *
     * Removes a callback from being called when a chargeable item
     * completes charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}
