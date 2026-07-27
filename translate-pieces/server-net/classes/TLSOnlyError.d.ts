/**
 * 当需要使用安全 URI 协议但提供了非安全 URI 时抛出的错误。
 *
 * An error thrown when secure URI scheme is required but a
 * non-secure URI was provided.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TLSOnlyError extends Error {
    private constructor();
    /**
     * @remarks
     * 因未使用安全协议而被拒绝的 URI。
     *
     * URI that was rejected for not using secure scheme.
     *
     * @earlyExecution
     *
     */
    readonly uri: string;
}
