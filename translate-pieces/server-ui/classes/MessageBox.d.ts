/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player } from '../../server';
/* IMPORT */ import { FormVisibilityError, InvalidFormModificationError, MessageBoxResult, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * A simple message form with two buttons and a text body. Use
 * this class to show a basic dialog to a player and handle the
 * player's button selection.
 * 一个包含两个按钮和文本正文的简单消息表单。使用此类向玩家显示基本对话框并处理玩家的按钮选择。
 */
export class MessageBox {
    /**
     * @remarks
     * Creates a new MessageBox for the specified player with the
     * given title.
     * 为指定玩家创建一个具有给定标题的新 MessageBox。
     *
     * @param player
     * The player to show this message box to.
     * 要向其展示此消息框的玩家。
     * @param title
     * The title text to display at the top of the message box.
     * 要在消息框顶部显示的标题文本。
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    constructor(
        player: Player,
        title: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    );
    /**
     * @remarks
     * Sets the body text displayed in the message box. Returns the
     * message box instance to allow method chaining.
     * 设置消息框中显示的正文文本。返回消息框实例以允许方法链式调用。
     *
     * @worldMutation
     *
     * @param body
     * The body text to display. Accepts either a plain string or
     * an ObservableString.
     * 要显示的正文文本。接受普通字符串或 ObservableString。
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    body(body: ObservableString | ObservableUIRawMessage | string | UIRawMessage): MessageBox;
    /**
     * @remarks
     * Sets the label for the first button of the message box.
     * Returns the message box instance to allow method chaining.
     * 设置消息框第一个按钮的标签。返回消息框实例以允许方法链式调用。
     *
     * @worldMutation
     *
     * @param label
     * The text label to display on the first button.
     * 要在第一个按钮上显示的文本标签。
     * @param tooltip
     * Optional tooltip text shown when hovering over the first
     * button.
     * 悬停在第一个按钮上时显示的可选工具提示文本。
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button1(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks
     * Sets the label for the second button of the message box.
     * Returns the message box instance to allow method chaining.
     * 设置消息框第二个按钮的标签。返回消息框实例以允许方法链式调用。
     *
     * @worldMutation
     *
     * @param label
     * The text label to display on the second button.
     * 要在第二个按钮上显示的文本标签。
     * @param tooltip
     * Optional tooltip text shown when hovering over the second
     * button.
     * 悬停在第二个按钮上时显示的可选工具提示文本。
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button2(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks
     * Closes the message box if it is currently being shown to the
     * player. Throws a FormVisibilityError if the form is not
     * currently open.
     * 如果消息框当前正在向玩家展示，则关闭它。如果表单当前未打开，则抛出 FormVisibilityError。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link FormVisibilityError}
     *
     * {@link InvalidEntityError}
     */
    close(): void;
    /**
     * @remarks
     * Returns true if the message box is currently being shown to
     * the player, false otherwise.
     * 如果消息框当前正在向玩家展示，则返回 true，否则返回 false。
     *
     * @worldMutation
     *
     */
    isShowing(): boolean;
    /**
     * @remarks
     * Shows the message box to the player. Returns a promise that
     * resolves with a MessageBoxResult containing the close reason
     * and the player's button selection.
     * 向玩家展示消息框。返回一个 Promise，该 Promise 解析为一个包含关闭原因和玩家按钮选择的 MessageBoxResult。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link FormVisibilityError}
     *
     * {@link InvalidEntityError}
     */
    show(): Promise<MessageBoxResult>;
}
