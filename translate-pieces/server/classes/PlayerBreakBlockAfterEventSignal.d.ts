/* IMPORT */ import { BlockEventOptions, PlayerBreakBlockAfterEvent } from '..';

/**
 * 管理与玩家破坏方块时相关的回调。
 *
 * Manages callbacks that are connected to when a player breaks
 * a block.
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个在方块被玩家破坏时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a block is broken
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * 移除在玩家破坏方块时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a player breaks a
     * block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}
