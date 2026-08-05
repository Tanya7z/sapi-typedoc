/* IMPORT */ import { SecretString } from '../../server-admin';

/**
 * 描述此脚本模块的 Sentry 配置选项。
 *
 * Describes options for configuring Sentry for this scripting
 * module.
 */
export interface SentryOptions {
    /**
     * @remarks
     * 设为 true 时，将启用 Sentry 系统的额外内容日志记录。默认为 false。
     *
     * When set to true, additional content logging from the Sentry
     * system will be enabled.  Defaults to false.
     *
     */
    debug?: boolean;
    /**
     * @remarks
     * Sentry 项目的完全限定 DSN。有关详细信息，请参阅 Sentry 文档：
     * https://docs.sentry.io/concepts/key-terms/dsn-explainer/
     *
     * The fully qualified DSN for a Sentry project.  See Sentry
     * documentation for more information:
     * https://docs.sentry.io/concepts/key-terms/dsn-explainer/
     *
     */
    dsn: SecretString | string;
    /**
     * @remarks
     * 每个错误事件要存储并报告给 Sentry 的最大面包屑数量（通过 {@link
     * Sentry.addBreadcrumb} 提交）。默认值为 20，支持的值介于 0（无面包屑）到 100 之间。
     *
     * The maximum number of breadcrumbs (submitted via {@link
     * Sentry.addBreadcrumb}) to store and report per error event
     * to Sentry. Default is 20, supported values range from 0 (no
     * breadcrumbs) to 100.
     *
     */
    maxBreadcrumbs?: number;
    /**
     * @remarks
     * 一个介于 0 到 1 之间的数值，表示应发送至 Sentry 的事件比例。例如，值为 0.5 表示将发送 50% 的事件。默认值为 1（100% 的事件）；0 表示不发送任何事件。
     *
     * A number between 0 and 1 that indicates the percentage of
     * events that should be sent to Sentry. For example, a value
     * of 0.5 means that 50% of events will be sent. Default is 1
     * (100% of events). 0 means no events will be sent.
     *
     */
    sampleRate?: number;
}
