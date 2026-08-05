/* IMPORT */ import { BlockEventOptions, PlayerBreakBlockBeforeEvent } from '..';

/**
 * 管理与玩家破坏方块前相关的回调。
 *
 * Manages callbacks that are connected to before a player
 * breaks a block.
 */
export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /**
     * 添加一个在方块被玩家破坏之前调用的回调。
     *
     * @remarks
     * Adds a callback that will be called before a block is broken
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockBeforeEvent) => void;
    /**
     * 移除在玩家破坏方块之前调用的回调。
     *
     * @remarks
     * Removes a callback from being called before a player breaks
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
}
