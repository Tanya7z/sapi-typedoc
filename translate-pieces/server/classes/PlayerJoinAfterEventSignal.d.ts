/* IMPORT */ import { PlayerJoinAfterEvent } from '..';

/**
 * 管理与玩家加入世界相关的回调。
 *
 * Manages callbacks that are connected to a player joining the
 * world.
 */
export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家加入世界时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a player joins the
     * world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * 移除一个在玩家加入世界时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a player joins the
     * world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}
