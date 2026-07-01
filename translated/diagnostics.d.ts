// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * Contains diagnostics functionality for discovering and
 * diagnosing issues with content.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/diagnostics",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import { InvalidArgumentError } from '@minecraft/common';
import { SecretString } from '@minecraft/server-admin';
/**
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

/**
 * 一个允许连接到 Sentry 进行错误报告的类。更多信息请参阅 https://sentry.io/。
 *
 * A class that allows hooking up reporting to Sentry.  See
 * https://sentry.io/ for more information.
 */
export class Sentry {
    private constructor();
    /**
     * @remarks
     * 向下一次 Sentry 报告的错误添加一个面包屑。这对于理解导致错误的事件追踪非常有用。更多详情请参阅 Sentry 文档：https://docs.sentry.io/product/issues/issue-details/breadcrumbs/
     *
     * Adds a breadcrumb to the next Sentry error reported.  This
     * can be useful for understanding a "trail" of events leading
     * up to an error.  See Sentry documentation for more details:
     * https://docs.sentry.io/product/issues/issue-details/breadcrumbs/
     *
     * @earlyExecution
     *
     * @param level
     * 面包屑的严重级别。
     *
     * The severity level of the breadcrumb.
     * @param message
     * 要添加到面包屑的消息。
     *
     * The message to add to the breadcrumb.
     * @param category
     * 面包屑的类别。
     *
     * The category of the breadcrumb.
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    addBreadcrumb(level: SentryEventLevel, message: string, category?: string): void;
    /**
     * @remarks
     * 向 Sentry 会话添加一个标签。更多详情请参阅 Sentry 文档：https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * Adds a tag to the Sentry session.  See Sentry documentation
     * for more details:
     * https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * @earlyExecution
     *
     * @param name
     * 标签的名称。
     *
     * The name of the tag.
     * @param value
     * 标签的值。
     *
     * The value of the tag.
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    addTag(name: string, value: string): void;
    /**
     * @remarks
     * 捕获一个异常事件并将其发送到 Sentry。注意，您不仅可以通过 `Error` 对象，还可以传递其他类型的抛出对象——在这种情况下，将尝试为您序列化该对象，但堆栈跟踪可能会丢失。更多详情请参阅 Sentry 文档：https://docs.sentry.io/platforms/javascript/apis/#capturing-events
     *
     * Captures an exception event and send it to Sentry. Note that
     * you can pass not only `Error` objects, but also other types
     * of thrown objects - in that case, an attempt will be made to
     * serialize the object for you, and stack traces are likely to
     * be missing.  See Sentry documentation for more details:
     * https://docs.sentry.io/platforms/javascript/apis/#capturing-events
     *
     * @earlyExecution
     *
     * @param exception
     * 要捕获的异常对象。
     *
     * The exception object to capture.
     * @param captureContext
     * 发送异常时的附加上下文信息。
     *
     * Additional context to send with the exception.
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    captureException(exception: unknown, captureContext?: SentryCaptureContext): void;
    /**
     * @remarks
     * 获取所有会话标签的列表。更多详情请参阅 Sentry 文档：https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * Gets the list of all session tags.  See Sentry documentation
     * for more details:
     * https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * @earlyExecution
     *
     * @returns
     * 包含所有标签名称和值的映射。
     *
     * A record containing all tag names and values.
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    getTags(): Record<string, string>;
    /**
     * @remarks
     * 初始化 Sentry 以供使用。在调用任何其他 Sentry 函数之前，必须成功调用此函数。
     *
     * Initializes Sentry for use.  This must be successfully
     * called before any other Sentry functions are called.
     *
     * @earlyExecution
     *
     * @param options
     * Sentry 的配置选项。
     *
     * Configuration options for Sentry.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link SentryAlreadyInitializedError}
     */
    init(options: SentryOptions): void;
    /**
     * @remarks
     * 从 Sentry 会话中移除一个标签。更多详情请参阅 Sentry 文档：https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * Removes a tag to the Sentry session.  See Sentry
     * documentation for more details:
     * https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * @earlyExecution
     *
     * @param name
     * 要移除的标签的名称。
     *
     * The name of the tag to remove.
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    removeTag(name: string): void;
}

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

/**
 * Describes options for configuring Sentry for this scripting
 * module.
 */
export interface SentryOptions {
    /**
     * @remarks
     * When set to true, additional content logging from the Sentry
     * system will be enabled.  Defaults to false.
     *
     */
    debug?: boolean;
    /**
     * @remarks
     * The fully qualified DSN for a Sentry project.  See Sentry
     * documentation for more information:
     * https://docs.sentry.io/concepts/key-terms/dsn-explainer/
     *
     */
    dsn: SecretString | string;
    /**
     * @remarks
     * The maximum number of breadcrumbs (submitted via {@link
     * Sentry.addBreadcrumb}) to store and report per error event
     * to Sentry. Default is 20, supported values range from 0 (no
     * breadcrumbs) to 100.
     *
     */
    maxBreadcrumbs?: number;
    /**
     * @remarks
     * A number between 0 and 1 that indicates the percentage of
     * events that should be sent to Sentry. For example, a value
     * of 0.5 means that 50% of events will be sent. Default is 1
     * (100% of events). 0 means no events will be sent.
     *
     */
    sampleRate?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 此错误表示 Sentry 已初始化，无法再次初始化。
 *
 * This error is thrown when Sentry has already been initialized.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SentryAlreadyInitializedError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 此错误表示 Sentry 尚未初始化，无法执行操作。
 *
 * This error is thrown when Sentry has not been initialized yet.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SentryUninitializedError extends Error {
    private constructor();
}

/**
 * @remarks
 * A class that allows hooking up reporting to Sentry.  See
 * https://sentry.io/ for more information.
 *
 */
export const sentry: Sentry;
