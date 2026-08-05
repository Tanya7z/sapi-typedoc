/* IMPORT */ import { PlayerBreakingBlockEventOptions, PlayerStartBreakingBlockAfterEvent } from '..';

/**
 * @rc
 * 管理与玩家开始破坏方块时相关的回调。
 *
 * Manages callbacks that are connected to when a player starts
 * breaking a block.
 */
export class PlayerStartBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家开始破坏方块时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a player starts
     * breaking a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerStartBreakingBlockAfterEvent) => void;
    /**
     * 移除一个在玩家开始破坏方块时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a player starts
     * breaking a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void): void;
}
