/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player, RawMessage, RawMessageError } from '../../server';
/* IMPORT */ import { MessageFormResponse } from '..';

/**
 * Builds a simple two-button modal dialog.
 * 构建一个简单的双按钮模态对话框。
 * @seeExample showBasicMessageForm.ts
 * @seeExample showTranslatedMessageForm.ts
 */
export class MessageFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     * 设置模态表单正文文本的方法。
     *
     */
    body(bodyText: RawMessage | string): MessageFormData;
    /**
     * @remarks
     * Method that sets the text for the first button of the
     * dialog.
     * 设置对话框第一个按钮文本的方法。
     *
     */
    button1(text: RawMessage | string): MessageFormData;
    /**
     * @remarks
     * This method sets the text for the second button on the
     * dialog.
     * 此方法设置对话框上第二个按钮的文本。
     *
     */
    button2(text: RawMessage | string): MessageFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     * 创建并显示此模态弹出表单。当玩家确认或取消对话框时异步返回。
     *
     * @worldMutation
     *
     * @param player
     * Player to show this dialog to.
     * 要向其展示此对话框的玩家。
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    show(player: Player): Promise<MessageFormResponse>;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     * 此构建器方法设置模态对话框的标题。
     *
     */
    title(titleText: RawMessage | string): MessageFormData;
}
