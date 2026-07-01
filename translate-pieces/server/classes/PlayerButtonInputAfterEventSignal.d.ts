/* IMPORT */ import { InputEventOptions, PlayerButtonInputAfterEvent } from '..';

/**
 * 管理与玩家输入相关的回调。
 *
 * Manages callbacks that are connected to player inputs.
 */
export class PlayerButtonInputAfterEventSignal {
    private constructor();
    /**
     * 添加一个在玩家执行输入后调用的回调。
     *
     * @remarks
     * Adds a callback that will be called after the player
     * performs an input.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg0: PlayerButtonInputAfterEvent) => void;
    /**
     * 移除在玩家执行输入后调用的回调。
     *
     * @remarks
     * Removes a callback from being called after the player
     * performs an input.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}
