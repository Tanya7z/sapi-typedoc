/* IMPORT */ import { InventoryItemEventOptions, PlayerInventoryItemChangeAfterEvent } from '..';

/**
 * 管理玩家库存物品更改后相关的回调。
 *
 * Manages callbacks that are connected after a player's
 * inventory item is changed.
 */
export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家库存物品更改后调用的回调。
     *
     * @remarks
     * Adds a callback that will be called after a player's
     * inventory item is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此事件触发时调用的函数回调。
     * Function callback that is called when this event fires.
     * @param options
     * 事件订阅的其他过滤选项。
     * Additional filtering options for the event subscription.
     */
    subscribe(
        callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void,
        options?: InventoryItemEventOptions,
    ): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    /**
     * 移除一个在玩家库存物品更改后调用的回调。
     *
     * @remarks
     * Removes a callback from being called after a player's
     * inventory item is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}
