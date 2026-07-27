/* IMPORT */ import { FormResponse } from '..';

/**
 * 返回来自模态操作表单的玩家结果数据。
 * 
 * Returns data about the player results from a modal action
 * form.
 * @seeExample showActionForm.ts
 * @seeExample showFavoriteMonth.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ActionFormResponse extends FormResponse {
    private constructor();
    /**
     * @remarks
     * 返回被按下的按钮的索引。
     * 
     * Returns the index of the button that was pushed.
     *
     */
    readonly selection?: number;
}
