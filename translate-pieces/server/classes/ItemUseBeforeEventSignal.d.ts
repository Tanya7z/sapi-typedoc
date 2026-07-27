/* IMPORT */ import { ItemUseBeforeEvent } from '..';

/**
 * 管理物品使用前触发的回调。
 *
 * Manages callbacks that fire before an item is used.
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，在物品被使用之前将被调用。
     *
     * Adds a callback that will be called before an item is used.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使物品被使用之前不再被调用。
     *
     * Removes a callback from being called before an item is used.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}
