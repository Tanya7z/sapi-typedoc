/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player, RawMessage, RawMessageError } from '../../server';
/* IMPORT */ import { ActionFormResponse } from '..';

/**
 * 构建一个带有按钮的简单玩家表单，让玩家可以执行操作。
 * 
 * Builds a simple player form with buttons that let the player
 * take action.
 * @seeExample showActionForm.ts
 * @seeExample showFavoriteMonth.ts
 */
export class ActionFormData {
    /**
     * @remarks
     * 设置模态表单主体文本的方法。
     * 
     * Method that sets the body text for the modal form.
     *
     */
    body(bodyText: RawMessage | string): ActionFormData;
    /**
     * @remarks
     * 向此表单添加一个带有资源包图标的按钮。
     * 
     * Adds a button to this form with an icon from a resource
     * pack.
     *
     */
    button(text: RawMessage | string, iconPath?: string): ActionFormData;
    /**
     * @remarks
     * 向表单添加一个区域分隔线。
     * 
     * Adds a section divider to the form.
     *
     */
    divider(): ActionFormData;
    /**
     * @remarks
     * 向表单添加一个标题。
     * 
     * Adds a header to the form.
     *
     * @param text
     * 要显示的文本。
     * 
     * Text to display.
     */
    header(text: RawMessage | string): ActionFormData;
    /**
     * @remarks
     * 向表单添加一个标签。
     * 
     * Adds a label to the form.
     *
     * @param text
     * 要显示的文本。
     * 
     * Text to display.
     */
    label(text: RawMessage | string): ActionFormData;
    /**
     * @remarks
     * 创建并显示此模态弹出表单。当玩家确认或取消对话框时异步返回。
     * 
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     *
     * @worldMutation
     *
     * @param player
     * 要向其显示此对话框的玩家。
     * 
     * Player to show this dialog to.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    show(player: Player): Promise<ActionFormResponse>;
    /**
     * @remarks
     * 此构建器方法设置模态对话框的标题。
     * 
     * This builder method sets the title for the modal dialog.
     *
     */
    title(titleText: RawMessage | string): ActionFormData;
}
