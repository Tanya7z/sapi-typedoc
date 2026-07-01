/* IMPORT */ import { FormCancelationReason } from '..';

/**
 * 表单响应的基础类型。
 * 
 * Base type for a form response.
 */
export class FormResponse {
    private constructor();
    /**
     * @remarks
     * 包含关于表单为何被取消的附加详细信息。
     * 
     * Contains additional details as to why a form was canceled.
     *
     */
    readonly cancelationReason?: FormCancelationReason;
    /**
     * @remarks
     * 如果为 `true`，则表示表单已被玩家取消（例如，他们点击了弹窗的 X 关闭按钮）。
     * 
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     *
     */
    readonly canceled: boolean;
}
