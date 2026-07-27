/* IMPORT */ import { ContainerRules, ContainerRulesErrorReason } from '..';

/**
 * 当容器操作违反了 {@link ContainerRules} 时抛出的错误。
 *
 * Error thrown if {@link ContainerRules} are broken on
 * container operations.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ContainerRulesError extends Error {
    private constructor();
    /**
     * @remarks
     * 抛出该错误的具体原因。
     *
     * The specific reason the error was thrown.
     *
     * @earlyExecution
     *
     */
    readonly reason: ContainerRulesErrorReason;
}
