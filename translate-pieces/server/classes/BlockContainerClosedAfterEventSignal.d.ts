/* IMPORT */ import { BlockContainerAccessEventOptions, BlockContainerClosedAfterEvent } from '..';

/**
 * 管理与方块容器被关闭时相关的回调。
 * 
 * Manages callbacks that are connected to when a block
 * container is closed.
 */
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在方块容器被关闭时调用的回调。
     * 
     * Adds a callback that will be called when a block container
     * is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在方块容器被关闭时调用的回调。
     * 
     * Removes a callback from being called when a block container
     * is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}
