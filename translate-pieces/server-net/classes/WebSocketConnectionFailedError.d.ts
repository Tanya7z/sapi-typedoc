/* IMPORT */ import { HttpStatusCode } from '..';

/**
 * 当与 WebSocket 服务器的连接失败时抛出的错误。
 *
 * An error thrown when the connection with the WebSocket
 * server has failed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketConnectionFailedError extends Error {
    private constructor();
    /**
     * @remarks
     * 尝试与服务器建立连接时收到的错误代码。
     *
     * The error code received when attempting to connect with the
     * server.
     *
     * @earlyExecution
     *
     */
    readonly errorCode: HttpStatusCode;
    /**
     * @remarks
     * 用于发起本次连接尝试但失败的 URI。
     *
     * The URI provided to make this connection attempt that
     * failed.
     *
     * @earlyExecution
     *
     */
    readonly uri: string;
}
