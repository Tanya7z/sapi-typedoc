/* IMPORT */ import { CustomCommandErrorReason } from '..';

/**
 * 当 CustomCommandRegistry 操作发生错误时抛出的错误对象。
 *
 * Error object thrown when CustomCommandRegistry errors occur.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomCommandError extends Error {
    private constructor();
    /**
     * @remarks
     * 错误的原因。
     *
     * Reason for the error.
     *
     * @earlyExecution
     *
     */
    readonly reason: CustomCommandErrorReason;
}
