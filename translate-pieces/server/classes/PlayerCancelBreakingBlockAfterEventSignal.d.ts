/* IMPORT */ import { PlayerBreakingBlockEventOptions, PlayerCancelBreakingBlockAfterEvent } from '..';

/**
 * @rc
 * 管理与玩家取消破坏方块时相关的回调。
 *
 * Manages callbacks that are connected to when a player
 * cancels breaking a block.
 */
export class PlayerCancelBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个在玩家取消破坏方块时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a player cancels
     * breaking a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerCancelBreakingBlockAfterEvent) => void;
    /**
     * 移除在玩家取消破坏方块时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a player cancels
     * breaking a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void): void;
}
