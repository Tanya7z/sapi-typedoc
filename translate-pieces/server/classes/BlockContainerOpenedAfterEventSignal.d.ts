/* IMPORT */ import { BlockContainerAccessEventOptions, BlockContainerOpenedAfterEvent } from '..';

/**
 * 管理与方块容器被打开时相关的回调。
 * 
 * Manages callbacks that are connected to when a block
 * container is opened.
 */
export class BlockContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在方块容器被打开时调用的回调。
     * 
     * Adds a callback that will be called when a block container
     * is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: BlockContainerOpenedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在方块容器被打开时调用的回调。
     * 
     * Removes a callback from being called when a block container
     * is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockContainerOpenedAfterEvent) => void): void;
}
