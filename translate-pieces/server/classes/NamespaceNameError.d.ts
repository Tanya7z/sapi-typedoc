/* IMPORT */ import { NamespaceNameErrorReason } from '..';

/**
 * 当名称需要命名空间且在验证该命名空间时发生错误时抛出。
 *
 * Thrown when a name requires a namespace and an error occurs
 * when validating that namespace
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NamespaceNameError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly reason: NamespaceNameErrorReason;
}
