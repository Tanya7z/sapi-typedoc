/* IMPORT */ import { ChatSendAfterEvent } from '..';

/**
 * @beta
 * 管理与聊天消息发送相关的回调。
 *
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当新的聊天消息发送时将被调用。
     *
     * Adds a callback that will be called when new chat messages
     * are sent.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在发送新的聊天消息时不再被调用。
     *
     * Removes a callback from being called when new chat messages
     * are sent.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}
