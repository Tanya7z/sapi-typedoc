/* IMPORT */ import { MessageReceiveAfterEvent } from '..';

/**
 * @beta
 * 管理消息传递到服务器的回调。此事件目前尚未完全实现，不应使用。
 *
 * Manages callbacks that are message passing to a server. This event is not currently fully implemented, and should not be used.
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在内部消息传递时调用的回调。
     *
     * Adds a callback that will be called when an internal message is passed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在内部消息传递时调用的回调。
     *
     * Removes a callback from being called when an internal message is passed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}
