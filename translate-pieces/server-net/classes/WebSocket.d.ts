/* IMPORT */ import { HttpHeader, WebSocketClient } from '..';

/**
 * 用于管理 WebSocket 连接。
 *
 * Used to manage WebSocket connections.
 */
export class WebSocket {
    private constructor();
    /**
     * @remarks
     * 尝试连接一个 WebSocket 客户端。
     *
     * Attempts to connect a WebSocket client.
     *
     * @worldMutation
     *
     * @param uri
     * 要建立连接的 URL。
     *
     * URL to make connection to.
     * @returns
     * 一个可等待的 Promise，其结果为已连接的 WebSocket 客户端。
     *
     * An awaitable promise that contains the WebSocket client that
     * was connected.
     */
    connect(uri: string, headers?: HttpHeader[]): Promise<WebSocketClient>;
}
