/**
 * 当 WebSocket 尚未连接到服务器时尝试使用 WebSocket 所抛出的错误。
 *
 * An error thrown when attempting to use a WebSocket while the
 * socket is not connected to a server.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketNotConnectedError extends Error {
    private constructor();
}
