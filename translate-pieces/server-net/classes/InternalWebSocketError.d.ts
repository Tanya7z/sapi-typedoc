/**
 * 当发生平台级 WebSocket 错误时抛出的错误。此类中提供的信息可能对诊断很有用，但因平台而异。
 *
 * An error thrown when a platform-level WebSocket error
 * occurs.  Information provided in this class may be useful
 * for diagnostics purposes but will differ from platform to
 * platform.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InternalWebSocketError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly errorCode: number;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly errorMessage: string;
}
