/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player, RawMessage, RawMessageError } from '../../server';
/* IMPORT */ import { ModalFormDataDropdownOptions, ModalFormDataSliderOptions, ModalFormDataTextFieldOptions, ModalFormDataToggleOptions, ModalFormResponse } from '..';

/**
 * Used to create a fully customizable pop-up form for a
 * player.
 * 用于为玩家创建完全可自定义的弹出表单。
 *
 * @seeExample showBasicModalForm.ts
 */
export class ModalFormData {
    /**
     * @remarks
     * Adds a section divider to the form.
     * 向表单添加一个分隔线。
     *
     */
    divider(): ModalFormData;
    /**
     * @remarks
     * Adds a dropdown with choices to the form.
     * 向表单添加一个包含选项的下拉菜单。
     *
     * @param label
     * The label to display for the dropdown.
     * 下拉菜单显示的标签。
     * @param items
     * The selectable items for the dropdown.
     * 下拉菜单的可选项目。
     * @param dropdownOptions
     * The optional additional values for the dropdown creation.
     * 创建下拉菜单时可选的附加参数。
     */
    dropdown(
        label: RawMessage | string,
        items: (RawMessage | string)[],
        dropdownOptions?: ModalFormDataDropdownOptions,
    ): ModalFormData;
    /**
     * @remarks
     * Adds a header to the form.
     * 向表单添加一个标题。
     *
     * @param text
     * Text to display.
     * 要显示的文本。
     */
    header(text: RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a label to the form.
     * 向表单添加一个标签。
     *
     * @param text
     * Text to display.
     * 要显示的文本。
     */
    label(text: RawMessage | string): ModalFormData;
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
     * 要显示此对话框的玩家。
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    show(player: Player): Promise<ModalFormResponse>;
    /**
     * @remarks
     * Adds a numeric slider to the form.
     * 向表单添加一个数值滑块。
     *
     * @param label
     * The label to display for the slider.
     * 滑块显示的标签。
     * @param minimumValue
     * The minimum selectable possible value.
     * 可选择的最小值。
     * @param maximumValue
     * The maximum selectable possible value.
     * 可选择的最大值。
     * @param sliderOptions
     * The optional additional values for the slider creation.
     * 创建滑块时可选的附加参数。
     */
    slider(
        label: RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        sliderOptions?: ModalFormDataSliderOptions,
    ): ModalFormData;
    submitButton(submitButtonText: RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a textbox to the form.
     * 向表单添加一个文本框。
     *
     * @param label
     * The label to display for the textfield.
     * 文本字段显示的标签。
     * @param placeholderText
     * The place holder text to display.
     * 要显示的占位文本。
     * @param textFieldOptions
     * The optional additional values for the textfield creation.
     * 创建文本字段时可选的附加参数。
     */
    textField(
        label: RawMessage | string,
        placeholderText: RawMessage | string,
        textFieldOptions?: ModalFormDataTextFieldOptions,
    ): ModalFormData;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     * 此构建器方法设置模态对话框的标题。
     *
     */
    title(titleText: RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a toggle checkbox button to the form.
     * 向表单添加一个开关复选框按钮。
     *
     * @param label
     * The label to display for the toggle.
     * 开关显示的标签。
     * @param toggleOptions
     * The optional additional values for the toggle creation.
     * 创建开关时可选的附加参数。
     */
    toggle(label: RawMessage | string, toggleOptions?: ModalFormDataToggleOptions): ModalFormData;
}
