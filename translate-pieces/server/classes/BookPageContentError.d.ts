/* IMPORT */ import { BookErrorReason } from '..';

/**
 * 当在 {@link ItemBookComponent} 上设置的页面内容无效时（例如超过最大页面长度）调用的错误。
 * 
 * The error called if page content being set on an {@link
 * ItemBookComponent} are invalid ie. exceeding the maximum
 * page length.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookPageContentError extends Error {
    private constructor();
    /**
     * @remarks
     * 请求修改的页面索引。
     * 
     * The index of the page requested to be modified.
     *
     * @earlyExecution
     *
     */
    readonly pageIndex: number;
    /**
     * @remarks
     * 错误的原因。
     * 
     * The reason for the error.
     *
     * @earlyExecution
     *
     */
    readonly reason: BookErrorReason;
}
