/* IMPORT */ import { FormResponse } from '..';

/**
 * Returns data about player responses to a modal form.
 * 返回有关玩家对模态表单响应的数据。
 *
 * @seeExample showBasicModalForm.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ModalFormResponse extends FormResponse {
    private constructor();
    /**
     * @remarks
     * An ordered set of values based on the order of controls
     * specified by ModalFormData.
     * 基于 `ModalFormData` 指定的控件顺序的有序值集合。
     *
     */
    readonly formValues?: (boolean | number | string | undefined)[];
}
