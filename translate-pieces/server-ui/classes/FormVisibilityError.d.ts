/* IMPORT */ import { FormVisibilityErrorReason } from '..';

/**
 * 当表单可见性操作失败时抛出，例如尝试显示一个已经正在显示的表单，或尝试关闭一个当前未打开的表单。
 * 
 * Thrown when a form visibility operation fails, such as
 * attempting to show a form that is already showing or
 * attempting to close a form that is not currently open.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FormVisibilityError extends Error {
    private constructor();
    /**
     * @remarks
     * 导致可见性错误的表单标识符。
     * 
     * The identifier of the form that caused the visibility error.
     *
     * @earlyExecution
     *
     */
    readonly formId: string;
    /**
     * @remarks
     * 表单可见性操作失败的原因。
     * 
     * The reason the form visibility operation failed.
     *
     * @earlyExecution
     *
     */
    readonly reason: FormVisibilityErrorReason;
}
