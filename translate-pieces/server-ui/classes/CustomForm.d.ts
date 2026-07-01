/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player } from '../../server';
/* IMPORT */ import { ButtonOptions, DataDrivenScreenClosedReason, DividerOptions, DropdownItemData, DropdownOptions, FormVisibilityError, ImageOptions, InvalidFormModificationError, InvalidObservableError, ObservableBoolean, ObservableNumber, ObservableString, ObservableUIRawMessage, SliderOptions, SpacingOptions, TextFieldOptions, TextOptions, ToggleOptions, UIRawMessage } from '..';

/**
 * 一个可自定义的数据驱动（DDUI）表单，允许您添加按钮、标签、开关、下拉菜单、滑块、文本字段等。表单布局通过在调用 `show()` 之前调用方法来添加组件来构建。绑定到表单组件的任何 `Observable` 值在其值发生变化时会自动更新 UI。
 * 
 * A customizable data driven (DDUI) form that lets you add
 * buttons, labels, toggles, dropdowns, sliders, text fields,
 * and more. The form layout is built by calling methods to add
 * components before calling show(). Any Observable values
 * bound to form components will automatically update the UI
 * when their values change.
 */
export class CustomForm {
    /**
     * @remarks
     * 为指定玩家创建一个具有给定标题的新 `CustomForm`。
     * 
     * Creates a new CustomForm for the specified player with the
     * given title.
     *
     * @param player
     * 要向其显示此表单的玩家。
     * 
     * The player to show this form to.
     * @param title
     * 在表单顶部显示的标题文本。
     * 
     * The title text to display at the top of the form.
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
     * 向表单布局添加一个可点击的按钮。返回表单实例以允许方法链式调用。
     * 
     * Adds a clickable button to the form layout. Returns the form
     * instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param label
     * 在按钮上显示的文本标签。
     * 
     * The text label to display on the button.
     * @param onClick
     * 当玩家点击按钮时调用的回调函数。
     * 
     * A callback function that is invoked when the player clicks
     * the button.
     * @param options
     * 按钮的可选配置，例如工具提示、禁用状态或可见性。
     * 
     * Optional configuration for the button, such as a tooltip,
     * disabled state, or visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        onClick: () => void,
        options?: ButtonOptions,
    ): CustomForm;
    /**
     * @remarks
     * 如果表单当前正在向玩家显示，则关闭它。如果表单当前未打开，则抛出 `FormVisibilityError`。
     * 
     * Closes the form if it is currently being shown to the
     * player. Throws a FormVisibilityError if the form is not
     * currently open.
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
     * 向表单底部和角落添加一个关闭按钮（显示为 'X'）。返回表单实例以允许方法链式调用。
     * 
     * Adds a close button to the form at the bottom and as an 'X'
     * in the corner. Returns the form instance to allow method
     * chaining.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    closeButton(): CustomForm;
    /**
     * @remarks
     * 向表单布局添加一条水平分隔线。用于在视觉上分隔表单的不同部分。返回表单实例以允许方法链式调用。
     * 
     * Adds a horizontal divider line to the form layout. Useful
     * for visually separating sections of the form. Returns the
     * form instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param options
     * 分隔线的可选配置，例如可见性。
     * 
     * Optional configuration for the divider, such as visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    divider(options?: DividerOptions): CustomForm;
    /**
     * @remarks
     * 向表单布局添加一个下拉选择控件。当前选择通过 `ObservableNumber` 跟踪，并在玩家更改选择时更新。返回表单实例以允许方法链式调用。
     * 
     * Adds a dropdown selection control to the form layout. The
     * current selection is tracked via an ObservableNumber and
     * will update when the player changes the selection. Returns
     * the form instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param label
     * 在下拉菜单周围显示的文本标签。
     * 
     * The text label displayed around the dropdown.
     * @param value
     * 一个持有当前选中项索引的 `ObservableNumber`。
     * 
     * An ObservableNumber that holds the index of the currently
     * selected item.
     * @param items
     * 要在下拉菜单中显示的项目列表。
     * 
     * The list of items to display in the dropdown.
     * @param options
     * 下拉菜单的可选配置，例如描述、禁用状态或可见性。
     * 
     * Optional configuration for the dropdown, such as a
     * description, disabled state, or visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    dropdown(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        value: ObservableNumber,
        items: DropdownItemData[],
        options?: DropdownOptions,
    ): CustomForm;
    /**
     * @remarks
     * 向表单布局添加一个标题文本组件。标题以比常规标签更大或更粗的样式显示，适用于章节标题。返回表单实例以允许方法链式调用。
     * 
     * Adds a header text component to the form layout. Headers are
     * displayed in a larger or bolder style than regular labels,
     * and are suitable for section titles. Returns the form
     * instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param text
     * 要显示的标题文本。
     * 
     * The header text to display.
     * @param options
     * 标题的可选配置，例如可见性。
     * 
     * Optional configuration for the header, such as visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    header(text: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: TextOptions): CustomForm;
    /**
     * @beta
     * @remarks
     * 向表单布局添加一个图像组件。
     * 
     * Adds an image component to the form layout.
     *
     * @worldMutation
     *
     * @param src
     * 要显示的图像源路径。必须是提供的包内图像文件的相对路径。
     * 
     * The image source path to display. Must be a relative path to
     * an image file within the provided pack.
     * @param pack
     * 包含所提供的图像源的资源包标识符。
     * 
     * The resource pack identifier that contains the provided
     * image source.
     * @param options
     * 图像的可选配置，例如可见性或宽度。
     * 
     * Optional configuration for the image, such as visibility or
     * width.
     * @returns
     * 返回表单实例以允许方法链式调用。
     * 
     * The form instance to allow method chaining.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    image(src: ObservableString | string, pack: ObservableString | string, options?: ImageOptions): CustomForm;
    /**
     * @remarks
     * 如果表单当前正在向玩家显示则返回 `true`，否则返回 `false`。
     * 
     * Returns true if the form is currently being shown to the
     * player, false otherwise.
     *
     * @worldMutation
     *
     */
    isShowing(): boolean;
    /**
     * @remarks
     * 向表单布局添加一个只读文本标签。返回表单实例以允许方法链式调用。
     * 
     * Adds a read-only text label to the form layout. Returns the
     * form instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param text
     * 在标签中显示的文本。
     * 
     * The text to display in the label.
     * @param options
     * 标签的可选配置，例如可见性。
     * 
     * Optional configuration for the label, such as visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    label(text: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: TextOptions): CustomForm;
    /**
     * @remarks
     * 向玩家显示表单。返回一个 Promise，该 Promise 解析为一个 `DataDrivenScreenClosedReason`，指示表单是如何关闭的。
     * 
     * Shows the form to the player. Returns a promise that
     * resolves with a DataDrivenScreenClosedReason indicating how
     * the form was closed.
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
    show(): Promise<DataDrivenScreenClosedReason>;
    /**
     * @remarks
     * 向表单布局添加一个数字滑块控件。当前值通过 `ObservableNumber` 跟踪，并在玩家移动滑块时更新。返回表单实例以允许方法链式调用。
     * 
     * Adds a numeric slider control to the form layout. The
     * current value is tracked via an ObservableNumber and will
     * update as the player moves the slider. Returns the form
     * instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param label
     * 在滑块周围显示的文本标签。
     * 
     * The text label displayed around the slider.
     * @param value
     * 一个持有滑块当前值的 `ObservableNumber`。
     * 
     * An ObservableNumber that holds the current value of the
     * slider.
     * @param min
     * 滑块范围的最小值。
     * 
     * The minimum value of the slider range.
     * @param max
     * 滑块范围的最大值。
     * 
     * The maximum value of the slider range.
     * @param options
     * 滑块的可选配置，例如步长、描述、禁用状态或可见性。
     * 
     * Optional configuration for the slider, such as step size, a
     * description, disabled state, or visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    slider(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        value: ObservableNumber,
        min: number | ObservableNumber,
        max: number | ObservableNumber,
        options?: SliderOptions,
    ): CustomForm;
    /**
     * @remarks
     * 向表单布局添加一个垂直间距组件。用于在表单组件之间添加空白空间。返回表单实例以允许方法链式调用。
     * 
     * Adds a vertical spacer component to the form layout. Useful
     * for adding empty space between form components. Returns the
     * form instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param options
     * 间距组件的可选配置，例如可见性。
     * 
     * Optional configuration for the spacer, such as visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    spacer(options?: SpacingOptions): CustomForm;
    /**
     * @remarks
     * 向表单布局添加一个文本输入字段。当前文本值通过 `ObservableString` 跟踪，并在玩家输入时更新。返回表单实例以允许方法链式调用。
     * 
     * Adds a text input field to the form layout. The current text
     * value is tracked via an ObservableString and will update as
     * the player types. Returns the form instance to allow method
     * chaining.
     *
     * @worldMutation
     *
     * @param label
     * 在文本字段周围显示的文本标签。
     * 
     * The text label displayed around the text field.
     * @param text
     * 一个持有输入字段当前文本值的 `ObservableString`。
     * 
     * An ObservableString that holds the current text value of the
     * input field.
     * @param options
     * 文本字段的可选配置，例如描述、禁用状态或可见性。
     * 
     * Optional configuration for the text field, such as a
     * description, disabled state, or visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    textField(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        text: ObservableString,
        options?: TextFieldOptions,
    ): CustomForm;
    /**
     * @remarks
     * 向表单布局添加一个开关控件。当前状态通过 `ObservableBoolean` 跟踪，并在玩家切换时更新。返回表单实例以允许方法链式调用。
     * 
     * Adds a toggle (on/off switch) control to the form layout.
     * The current state is tracked via an ObservableBoolean and
     * will update when the player toggles it. Returns the form
     * instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param label
     * 在开关旁边显示的文本标签。
     * 
     * The text label displayed next to the toggle.
     * @param toggled
     * 一个持有开关当前开/关状态的 `ObservableBoolean`。
     * 
     * An ObservableBoolean that holds the current on/off state of
     * the toggle.
     * @param options
     * 开关的可选配置，例如描述、禁用状态或可见性。
     * 
     * Optional configuration for the toggle, such as a
     * description, disabled state, or visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    toggle(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        toggled: ObservableBoolean,
        options?: ToggleOptions,
    ): CustomForm;
}
