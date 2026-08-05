/* IMPORT */ import { ItemStopUseOnAfterEvent } from '..';

/**
 * 管理与物品停止对方块使用事件相关联的回调。
 *
 * Manages callbacks that are connected to an item stops used
 * on a block event.
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当物品停止对某方块使用时将被调用。
     *
     * Adds a callback that will be called when an item stops being
     * used on a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使物品被用于方块时不再被调用。
     *
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}
