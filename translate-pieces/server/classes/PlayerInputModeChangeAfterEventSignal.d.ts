/* IMPORT */ import { PlayerInputModeChangeAfterEvent } from '..';

/**
 * 管理连接到玩家输入模式更改的回调。
 *
 * Manages callbacks that are connected to player input mode.
 */
export class PlayerInputModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家输入模式更改后调用的回调。
     *
     * Adds a callback that will be called after the player input mode changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerInputModeChangeAfterEvent) => void,
    ): (arg0: PlayerInputModeChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家输入模式更改后调用的回调。
     *
     * Removes a callback from being called after the player input mode changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}
