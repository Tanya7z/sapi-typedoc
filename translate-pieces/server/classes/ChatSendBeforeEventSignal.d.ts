/* IMPORT */ import { ChatSendBeforeEvent } from '..';

/**
 * @beta
 * 管理与聊天消息发送前触发的事件相关的回调。
 *
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 * @seeExample customCommand.ts
 */
export class ChatSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在新的聊天消息发送之前被调用。
     *
     * Adds a callback that will be called before new chat messages
     * are sent.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限被调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在新的聊天消息发送之前不再被调用。
     *
     * Removes a callback from being called before new chat
     * messages are sent.
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
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}
