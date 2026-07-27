/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { PacketId } from '..';

/**
 * 在服务器向客户端发送网络数据包时触发的事件。如果取消，服务器将不会向接收客户端发送该网络数据包。
 *
 * Sent as the server sends a network packet to clients.  If
 * cancelled, the server will not send the network packet to
 * the receiving clients.
 */
export class PacketSendBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * 网络数据包的类型。
     *
     * The type of network packet.
     *
     */
    readonly packetId: PacketId;
    /**
     * @remarks
     * 该网络数据包将发送到的目标客户端。
     *
     * Which clients the network packet is being sent to.
     *
     */
    readonly recipients: (Player | undefined)[];
}
