/**
 * 当网络请求的目标 URI 不在已配置的允许列表中时抛出的错误。
 *
 * An error thrown when a network request targets a URI that is
 * not in the configured allow list.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class UriNotAllowedError extends Error {
    private constructor();
    /**
     * @remarks
     * 因不被允许而被拒绝的 URI。
     *
     * URI that was rejected because it is not allowed.
     *
     * @earlyExecution
     *
     */
    readonly uri: string;
}
