/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { SentryAlreadyInitializedError, SentryCaptureContext, SentryEventLevel, SentryOptions, SentryUninitializedError } from '..';

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
