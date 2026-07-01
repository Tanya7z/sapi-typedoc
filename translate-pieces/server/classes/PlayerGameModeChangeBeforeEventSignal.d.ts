/* IMPORT */ import { PlayerGameModeChangeBeforeEvent } from '..';

/**
 * 管理与玩家游戏模式更改前相关的回调。
 *
 * Manages callbacks that are connected to before a players
 * game mode is changed.
 */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * 添加一个在玩家游戏模式更改前调用的回调。
     *
     * @remarks
     * Adds a callback that will be called before a players game
     * mode is changed.
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
        callback: (arg0: PlayerGameModeChangeBeforeEvent) => void,
    ): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * 移除在玩家游戏模式更改前调用的回调。
     *
     * @remarks
     * Removes a callback from being called before a players game
     * mode is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}
