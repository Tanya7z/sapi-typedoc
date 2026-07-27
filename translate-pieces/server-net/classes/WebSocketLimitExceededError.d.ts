/**
 * 当已连接的 WebSocket 数量达到上限时抛出的错误。
 *
 * An error that is thrown when the maximum number of connected
 * WebSockets is reached.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketLimitExceededError extends Error {
    private constructor();
    /**
     * @remarks
     * 被拒绝时已处于活动状态的 WebSocket 连接数。
     *
     * Number of WebSocket connections already active when
     * rejected.
     *
     * @earlyExecution
     *
     */
    readonly connectedSockets: number;
    /**
     * @remarks
     * 已配置的最大活动 WebSocket 连接数。
     *
     * Configured maximum active WebSocket connections.
     *
     * @earlyExecution
     *
     */
    readonly maxConcurrentConnections: number;
}
