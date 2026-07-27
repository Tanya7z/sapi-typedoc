/* IMPORT */ import { ItemStopUseAfterEvent } from '..';

/**
 * 管理与带有已注册的 minecraft:chargeable 组件的物品停止蓄力事件相关联的回调。
 *
 * Manages callbacks that are connected to the stopping of
 * charging for an item that has a registered
 * minecraft:chargeable component.
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可蓄力物品停止蓄力时将被调用。
     *
     * Adds a callback that will be called when a chargeable item
     * stops charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使可蓄力物品停止蓄力时不再被调用。
     *
     * Removes a callback from being called when a chargeable item
     * stops charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}
