/* IMPORT */ import { BookErrorReason } from '..';

/**
 * 使用 {@link ItemBookComponent} 时可能抛出的错误。
 * 
 * Errors that can be thrown when using {@link
 * ItemBookComponent}.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookError extends Error {
    private constructor();
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
