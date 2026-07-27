/* IMPORT */ import { RequestBodyTooLargeError, WebSocketClientAfterEvents, WebSocketNotConnectedError } from '..';

/**
 * 一个活跃的 WebSocket 客户端。
 *
 * An active WebSocket client.
 */
export class WebSocketClient {
    private constructor();
    /**
     * @remarks
     * 包含与此 WebSocket 客户端相关的一组事件。
     *
     * Contains a set of events related to this WebSocket client.
     *
     */
    readonly afterEvents: WebSocketClientAfterEvents;
    /**
     * @remarks
     * 如果当前已连接到服务器，则为 true。
     *
     * Set to true if the socket is current connected to the
     * server.
     *
     */
    readonly isOpen: boolean;
    /**
     * @remarks
     * 关闭与服务器的连接。
     *
     * Closes the connection with the server.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link WebSocketNotConnectedError}
     */
    close(): void;
    /**
     * @remarks
     * 将提供的有效负载发送到服务器。
     *
     * Sends the provided payload to the server.
     *
     * @worldMutation
     *
     * @param payload
     * 将被包含在网络数据包中的有效负载。
     * The payload that will be included in the network packet.
     * @throws This function can throw errors.
     *
     * {@link RequestBodyTooLargeError}
     *
     * {@link WebSocketNotConnectedError}
     */
    send(payload: string): void;
}
