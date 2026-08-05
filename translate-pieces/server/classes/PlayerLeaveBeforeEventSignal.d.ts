/* IMPORT */ import { PlayerLeaveBeforeEvent } from '..';

/**
 * 管理连接到玩家离开世界事件的回调。
 *
 * Manages callbacks that are connected to a player leaving the world.
 */
export class PlayerLeaveBeforeEventSignal {
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
     * @param callback
     * 此闭包将以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在玩家离开世界时调用的回调。
     *
     * Removes a callback that will be called when a player leaves the world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}
