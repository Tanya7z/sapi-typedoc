/**
 * Thrown when attempting to interact with a form using an
 * invalid or unknown form identifier.
 * 当尝试使用无效或未知的表单标识符与表单交互时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidFormError extends Error {
    private constructor();
    /**
     * @remarks
     * The identifier of the invalid form that was referenced.
     * 所引用的无效表单的标识符。
     *
     * @earlyExecution
     *
     */
    readonly formId: string;
}
