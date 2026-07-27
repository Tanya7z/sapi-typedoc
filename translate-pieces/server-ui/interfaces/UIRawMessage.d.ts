/**
 * 可以发送给客户端的消息。这是 RawMessage 类型的子集，用于 UI 消息。
 *
 * A message that can be sent to the client. This is a subset
 * of the RawMessage type, and is used for UI messages.
 */
export interface UIRawMessage {
    /**
     * @remarks
     * 提供当前消息的原始文本等价物。
     *
     * Provides a raw-text equivalent of the current message.
     *
     */
    rawtext?: UIRawMessage[];
    /**
     * @remarks
     * 提供要使用的字符串字面量值。
     *
     * Provides a string literal value to use.
     *
     */
    text?: string;
    /**
     * @remarks
     * 提供一个本地化字符串，如果客户端在玩家语言中有与本地化字符串匹配的可用资源，则会在客户端进行翻译。
     *
     * Provides a localization string where, if the client has an
     * available resource in the players' language which matches
     * the localization string, will get translated on the client.
     *
     */
    translate?: string;
    /**
     * @remarks
     * 本地化字符串的参数。可以是字符串数组，也可以是包含原始文本对象数组的 UIRawMessage。
     *
     * Arguments for the localization string. Can be either an
     * array of strings or UIRawMessage containing an array of raw
     * text objects.
     *
     */
    with?: string[] | UIRawMessage;
}
