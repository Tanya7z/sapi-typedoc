/* IMPORT */ import { ItemUseAfterEvent } from '..';

/**
 * 管理与物品使用事件相关联的回调。
 *
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当物品被使用时将被调用。
     *
     * Adds a callback that will be called when an item is used.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使物品被使用时不再被调用。
     *
     * Removes a callback from being called when an item is used.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}
