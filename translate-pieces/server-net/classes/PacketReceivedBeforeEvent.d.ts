/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { PacketId } from '..';

/**
 * 当服务器从客户端接收到网络数据包时发送。如果取消，服务器将不会解析该网络数据包，
 * 并会静默忽略它。
 *
 * Sent as the server receives a network packet from a client.
 * If cancelled, the server will not parse the network packet
 * and will silently ignore it.
 */
export class PacketReceivedBeforeEvent {
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
     * 该网络数据包的字节大小。
     *
     * The size of the network packet in bytes.
     *
     */
    readonly packetSize: number;
    /**
     * @remarks
     * 将该网络数据包发送给游戏服务器的客户端。
     *
     * Which client sent the network packet to the game server.
     *
     */
    readonly sender?: Player;
}
