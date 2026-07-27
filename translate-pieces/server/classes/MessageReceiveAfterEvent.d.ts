/* IMPORT */ import { Player } from '..';

/**
 * @beta
 * 一个特定的当前内部事件，用于将消息从客户端传递到服务器。
 *
 * A specific currently-internal event used for passing
 * messages from client to server.
 */
export class MessageReceiveAfterEvent {
    private constructor();
    /**
     * 消息标识符。
     *
     * @remarks
     * The message identifier.
     *
     */
    readonly id: string;
    /**
     * 消息内容。
     *
     * @remarks
     * The message.
     *
     */
    readonly message: string;
    /**
     * 发送消息的玩家。
     *
     * @remarks
     * The player who sent the message.
     *
     */
    readonly player: Player;
}
