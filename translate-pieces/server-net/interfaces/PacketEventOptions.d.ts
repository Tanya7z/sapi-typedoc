/* IMPORT */ import { PacketId } from '..';

/**
 * 用于网络数据包触发事件的选项。
 *
 * Options for events triggered by network packets.
 */
export interface PacketEventOptions {
    /**
     * @remarks
     * 如果提供该列表，则其中列出的数据包 ID 不会触发事件订阅。
     *
     * If provided, packet IDs in this list will not trigger the
     * event subscriptions.
     *
     */
    ignoredPacketIds?: PacketId[];
    /**
     * @remarks
     * 如果提供该列表，则只有其中列出的数据包 ID 会触发事件订阅。
     *
     * If provided only packet IDs in this list will trigger the
     * event subscriptions.
     *
     */
    monitoredPacketIds?: PacketId[];
}
