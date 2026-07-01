/* IMPORT */ import { LocatorBarErrorReason } from '..';

/**
 * 当定位栏操作失败时抛出的错误。包含指示错误具体原因的原因代码。
 *
 * Error thrown when a locator bar operation fails. Contains a
 * reason code indicating the specific cause of the error.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocatorBarError extends Error {
    private constructor();
    /**
     * @remarks
     * 指示定位栏操作失败原因的 `LocatorBarErrorReason` 代码。
     *
     * The {@link LocatorBarErrorReason} code that indicates why
     * the locator bar operation failed.
     *
     * @earlyExecution
     *
     */
    readonly reason: LocatorBarErrorReason;
}
