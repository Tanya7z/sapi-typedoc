/**
 * 提供在原始消息中使用的分数令牌的描述。
 *
 * Provides a description of a score token to use within a raw
 * message.
 */
export interface RawMessageScore {
    /**
     * @remarks
     * 要匹配的分数值名称。
     *
     * Name of the score value to match.
     *
     */
    name?: string;
    /**
     * @remarks
     * 要匹配的分数值名称。
     *
     * Name of the score value to match.
     *
     */
    objective?: string;
}
