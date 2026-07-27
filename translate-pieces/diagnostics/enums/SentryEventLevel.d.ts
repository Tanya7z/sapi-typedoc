/**
 * 定义错误、事件、异常或面包屑的严重级别。级别用于在 UI 中对面包屑进行强调或弱化处理。更多信息请参阅 Sentry 文档：
 * https://docs.sentry.io/product/issues/issue-details/breadcrumbs/
 *
 * This defines the severity level of an error, event,
 * exception, or breadcrumb. Levels are used in the UI to
 * emphasize and deemphasize breadcrumbs. See Sentry
 * documentation for more information:
 * https://docs.sentry.io/product/issues/issue-details/breadcrumbs/
 */
export enum SentryEventLevel {
    debug = 'debug',
    error = 'error',
    fatal = 'fatal',
    info = 'info',
    warning = 'warning',
}
