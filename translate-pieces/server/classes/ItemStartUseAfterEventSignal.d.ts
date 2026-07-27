/* IMPORT */ import { ItemStartUseAfterEvent } from '..';

/**
 * 管理与可蓄力物品开始蓄力事件相关联的回调。
 *
 * Manages callbacks that are connected to the start of
 * charging for a chargeable item.
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可蓄力物品开始蓄力时将被调用。
     *
     * Adds a callback that will be called when a chargeable item
     * starts charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使可蓄力物品开始蓄力时不再被调用。
     *
     * Removes a callback from being called when a chargeable item
     * starts charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}
