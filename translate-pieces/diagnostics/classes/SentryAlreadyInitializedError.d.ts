/**
 * 此错误表示 Sentry 已初始化，无法再次初始化。
 *
 * This error is thrown when Sentry has already been initialized.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SentryAlreadyInitializedError extends Error {
    private constructor();
}
