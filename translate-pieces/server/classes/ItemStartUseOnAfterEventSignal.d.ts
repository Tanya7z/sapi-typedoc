/* IMPORT */ import { ItemStartUseOnAfterEvent } from '..';

/**
 * 管理与物品开始被用于方块事件相关联的回调。
 *
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当物品被用于方块时将被调用。
     *
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
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
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}
