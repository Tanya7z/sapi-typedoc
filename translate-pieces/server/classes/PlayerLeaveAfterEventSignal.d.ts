/* IMPORT */ import { PlayerLeaveAfterEvent } from '..';

/**
 * 管理连接到玩家离开世界事件的回调。
 *
 * Manages callbacks that are connected to a player leaving the world.
 */
export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家离开世界时调用的回调。
     *
     * Adds a callback that will be called when a player leaves the world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家离开世界时调用的回调。
     *
     * Removes a callback from being called when a player leaves the world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}
