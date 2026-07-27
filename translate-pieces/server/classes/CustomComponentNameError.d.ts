/* IMPORT */ import { CustomComponentNameErrorReason } from '..';

/**
 * 当自定义组件名称包含无效字符时抛出的错误。
 *
 * Thrown when trying to register a custom component with a
 * name that contains invalid characters.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentNameError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly reason: CustomComponentNameErrorReason;
}
