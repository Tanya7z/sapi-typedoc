/**
 * Thrown when attempting to modify a form after it has already
 * been shown to a player. Form properties cannot be changed
 * while the form is active.
 * 当尝试在表单已展示给玩家后修改表单时抛出。表单处于活动状态时，其属性无法更改。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidFormModificationError extends Error {
    private constructor();
    /**
     * @remarks
     * The identifier of the form that was illegally modified after
     * being shown.
     * 在展示后被非法修改的表单的标识符。
     *
     * @earlyExecution
     *
     */
    readonly formId: string;
}
