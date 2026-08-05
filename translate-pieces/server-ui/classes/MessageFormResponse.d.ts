/* IMPORT */ import { FormResponse } from '..';

/**
 * Returns data about the player results from a modal message
 * form.
 * 返回关于玩家在模态消息表单中操作结果的数据。
 * @seeExample showBasicMessageForm.ts
 * @seeExample showTranslatedMessageForm.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MessageFormResponse extends FormResponse {
    private constructor();
    /**
     * @remarks
     * Returns the index of the button that was pushed.
     * 返回被按下的按钮的索引。
     *
     */
    readonly selection?: number;
}
