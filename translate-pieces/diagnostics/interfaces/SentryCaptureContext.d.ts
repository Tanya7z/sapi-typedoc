/* IMPORT */ import { SentryEventLevel } from '..';

/**
 * 与发送到 Sentry 的捕获异常相关的上下文信息。
 *
 * Context relating to a captured exception that should be sent
 * to Sentry.
 */
export interface SentryCaptureContext {
    /**
     * @remarks
     * 应与异常一起发送的附加数据。
     *
     * Additional data that should be sent with the exception.
     *
     */
    extraData?: Record<string, boolean | number | string>;
    /**
     * @remarks
     * 捕获异常的指示严重级别。
     *
     * The indicated level of severity of the captured exception.
     *
     */
    level?: SentryEventLevel;
    /**
     * @remarks
     * 应与异常一起发送的附加标签。
     *
     * Additional tags that should be sent with the exception.
     *
     */
    tags?: Record<string, string>;
}
