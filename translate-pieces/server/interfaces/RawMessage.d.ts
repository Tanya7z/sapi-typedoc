/* IMPORT */ import { RawMessageScore } from '..';

/**
 * 定义一个用于更灵活处理的 JSON 结构。
 *
 * Defines a JSON structure that is used for more flexible.
 * @seeExample addTranslatedSign.ts c0399cc7
 * @seeExample showTranslatedMessageForm.ts
 * @seeExample addTranslatedSign.ts 9e2fd749
 */
export interface RawMessage {
    /**
     * @remarks
     * 提供当前消息的原始文本等效内容。
     *
     * Provides a raw-text equivalent of the current message.
     *
     */
    rawtext?: RawMessage[];
    /**
     * @remarks
     * 提供一个将被替换为分数值的令牌。
     *
     * Provides a token that will get replaced with the value of a
     * score.
     *
     */
    score?: RawMessageScore;
    /**
     * @remarks
     * 提供一个要使用的字符串字面量值。
     *
     * Provides a string literal value to use.
     *
     */
    text?: string;
    /**
     * @remarks
     * 提供一个翻译令牌，如果客户端在玩家语言中有与该令牌匹配的可用资源，则会在客户端进行翻译。
     *
     * Provides a translation token where, if the client has an
     * available resource in the players' language which matches
     * the token, will get translated on the client.
     *
     */
    translate?: string;
    /**
     * @remarks
     * 翻译令牌的参数。可以是字符串数组，也可以是包含原始文本对象数组的 RawMessage。
     *
     * Arguments for the translation token. Can be either an array
     * of strings or RawMessage containing an array of raw text
     * objects.
     *
     */
    with?: string[] | RawMessage;
}
