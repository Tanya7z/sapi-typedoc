/**
 * 与使用 {@link ItemBookComponent} 相关的错误原因枚举。
 *
 * An enum of error reasons relating to using {@link
 * ItemBookComponent}.
 */
export enum BookErrorReason {
    /**
     * @remarks
     * 请求的页面内容超过了最大页面长度 256。
     *
     * The requested page content exceeds the max page length of
     * 256.
     *
     */
    ExceedsMaxPageLength = 'ExceedsMaxPageLength',
    /**
     * @remarks
     * 无法创建页面，因为会超过最大页数 50。
     *
     * The page could not be created as it would exceed the max
     * page count of 50.
     *
     */
    ExceedsMaxPages = 'ExceedsMaxPages',
    /**
     * @remarks
     * 正在签名的标题超过了最大标题长度 16。
     *
     * The title being signed exceeds the maximum title length of
     * 16.
     *
     */
    ExceedsTitleLength = 'ExceedsTitleLength',
}
