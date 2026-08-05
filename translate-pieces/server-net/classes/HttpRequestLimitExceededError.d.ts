/**
 * 当并发的 HTTP 请求数达到上限时抛出的错误。
 *
 * An error thrown when the maximum number of concurrent HTTP
 * requests has been reached.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class HttpRequestLimitExceededError extends Error {
    private constructor();
    /**
     * @remarks
     * 被拒绝时已经处于进行中的请求数。
     *
     * Number of requests already in flight when rejected.
     *
     * @earlyExecution
     *
     */
    readonly inFlightRequests: number;
    /**
     * @remarks
     * 已配置的最大并发 HTTP 请求数。
     *
     * Configured maximum concurrent HTTP requests.
     *
     * @earlyExecution
     *
     */
    readonly maxConcurrentRequests: number;
}
