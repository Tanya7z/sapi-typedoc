/* IMPORT */ import { PlayerGameModeChangeAfterEvent } from '..';

/**
 * 管理与玩家游戏模式更改后相关的回调。
 *
 * Manages callbacks that are connected to after a players game
 * mode is changed.
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * 添加一个在玩家游戏模式更改后调用的回调。
     *
     * @remarks
     * Adds a callback that will be called after a players game
     * mode is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    /**
     * 移除在玩家游戏模式更改后调用的回调。
     *
     * @remarks
     * Removes a callback from being called after a players game
     * mode is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}
