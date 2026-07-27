/**
 * 当网络请求体超过配置的尺寸限制时抛出的错误。
 *
 * An error thrown when an network request body exceeds the
 * configured size limit.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RequestBodyTooLargeError extends Error {
    private constructor();
    /**
     * @remarks
     * 已配置的最大请求体字节数。
     *
     * Configured maximum body size in bytes.
     *
     * @earlyExecution
     *
     */
    readonly maxBytes: number;
    /**
     * @remarks
     * 实际请求体的字节数。
     *
     * Request body size in bytes.
     *
     * @earlyExecution
     *
     */
    readonly providedBytes: number;
}
