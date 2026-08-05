/* IMPORT */ import { AsyncPlayerJoinBeforeEvent } from '..';

export class AsyncPlayerJoinBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在玩家加入世界之前执行的回调。该回调会返回一个 Promise,
     * 在该 Promise 解析之前玩家不会加入。如果该 Promise 未能在合理时间内
     * 解析,则玩家的加入将被拒绝。如果加入服务器的玩家中途离开或断开
     * 连接,那么事件数据的 isValid 将返回 false。
     *
     * Add a callback that's ran before a player joins the world.
     * This callback returns a promise and the player won't join
     * until that promise is resolved. If the promise is not
     * resolved within a reasonable time, the player joining will
     * be rejected. If the player joining leaves/disconnects, then
     * the event data's isValid will return false.
     *
     */
    subscribe(
        callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>,
    ): (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>;
    unsubscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>): boolean;
}
