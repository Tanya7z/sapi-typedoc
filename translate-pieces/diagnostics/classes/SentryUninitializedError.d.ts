/**
 * 此错误表示 Sentry 尚未初始化，无法执行操作。
 *
 * This error is thrown when Sentry has not been initialized yet.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SentryUninitializedError extends Error {
    private constructor();
}
