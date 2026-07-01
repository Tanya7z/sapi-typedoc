/**
 * 一个枚举，表示文本过滤过程中可能发生的错误。它用于提供关于过滤过程的更多上下文。
 *
 * An enum representing the errors that can occur during text
 * filtering. This is used to provide more context about the
 * filtering process.
 */
export enum TextFilteringError {
    /**
     * @remarks
     * 由于玩家在其设置中禁用了文本过滤，文本未被过滤。
     *
     * The text was not filtered because the player disabled text
     * filtering in their settings.
     *
     */
    DisabledByPlayer = 'DisabledByPlayer',
    /**
     * @remarks
     * 由于服务不可达，文本未被过滤。这可能发生在网络问题或服务停机维护时。
     *
     * The text was not filtered because the service is
     * unreachable. This can occur if there are network issues or
     * if the service is down for maintenance.
     *
     */
    TextProcessorServiceUnreachable = 'TextProcessorServiceUnreachable',
    /**
     * @remarks
     * 文本过滤期间发生了未知错误。这可能发生在文本过滤服务出现意外问题，或者服务返回了一个未归类到其他错误类型的错误时。
     *
     * An unknown error occurred during text filtering. This can
     * occur if there is an unexpected issue with the text
     * filtering service or if the service returns an error that is
     * not categorized under the other error types.
     *
     */
    Unknown = 'Unknown',
}
