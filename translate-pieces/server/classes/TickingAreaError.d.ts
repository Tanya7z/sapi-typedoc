/* IMPORT */ import { TickingAreaErrorReason, TickingAreaManager } from '..';

/**
 * The error returned from invalid {@link TickingAreaManager}
 * method calls.
 *
 * 从无效的 {@link TickingAreaManager} 方法调用返回的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TickingAreaError extends Error {
    private constructor();
    /**
     * @remarks
     * The specific reason that the error was thrown.
     *
     * 抛出该错误的具体原因。
     *
     * @earlyExecution
     *
     */
    readonly reason: TickingAreaErrorReason;
}
