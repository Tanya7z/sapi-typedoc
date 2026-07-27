/* IMPORT */ import { Player } from '..';

/**
 * @beta
 * 当玩家输入聊天消息时触发的事件。
 *
 * An event that fires as players enter chat messages.
 */
export class ChatSendAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在广播的消息。
     *
     * Message that is being broadcast.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 发送聊天消息的玩家。
     *
     * Player that sent the chat message.
     *
     */
    readonly sender: Player;
    /**
     * @remarks
     * 可选的要接收此消息的玩家列表。如果已定义，此消息将直接发送给一个或多个玩家（即不进行广播）。
     *
     * Optional list of players that will receive this message. If
     * defined, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     *
     */
    readonly targets?: Player[];
}
