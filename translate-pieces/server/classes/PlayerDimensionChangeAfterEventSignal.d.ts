/* IMPORT */ import { PlayerDimensionChangeAfterEvent } from '..';

/**
 * 管理与玩家维度切换成功后的回调。
 *
 * Manages callbacks that are connected to successful player
 * dimension changes.
 */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * 为玩家维度切换后事件订阅指定的回调。
     *
     * @remarks
     * Subscribes the specified callback to a player dimension
     * change after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerDimensionChangeAfterEvent) => void,
    ): (arg0: PlayerDimensionChangeAfterEvent) => void;
    /**
     * 从玩家维度切换后事件中移除指定的回调。
     *
     * @remarks
     * Removes the specified callback from a player dimension
     * change after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}
