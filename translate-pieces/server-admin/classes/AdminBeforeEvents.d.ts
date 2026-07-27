/* IMPORT */ import { AsyncPlayerJoinBeforeEventSignal } from '..';

export class AdminBeforeEvents {
    private constructor();
    /**
     * @remarks
     * 该事件在玩家加入世界之前触发。与其他 before 事件不同，这是一个
     * before 事件，你可以通过不解析 subscribe 函数中返回的 Promise
     * 来将其延迟若干 tick。如果该 Promise 被拒绝，则客户端将被拒绝连入。
     *
     * This event is fired before a player joins the world. Unlike
     * other before events, this event is a before event that you
     * can delay several ticks by not resolving the promise
     * returned in the subscribe function. If the promise is
     * rejected, the client is rejected.
     *
     */
    readonly asyncPlayerJoin: AsyncPlayerJoinBeforeEventSignal;
}
