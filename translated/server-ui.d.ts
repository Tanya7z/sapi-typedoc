// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * `@minecraft/server-ui` 模块包含了用于基于对话框的简易用户交互功能的类型。
 * 
 *   * {@link ActionFormData} 包含了一系列带有标题与图片的按钮。便于要求用户从一系列选项中选择。
 *   * {@link MessageFormData} 则是包含了两个按钮的简易消息框，允许用户选择是/否或者确定/取消。
 *   * {@link ModalFormData} 则提供了一套更具灵活性的类似问卷形式的控件，允许用户填写并提交。
 * 
 * The `@minecraft/server-ui` module contains types for
 * expressing simple dialog-based user experiences.
 *
 *   * {@link ActionFormData} contain a list of buttons with
 * captions and images that can be used for presenting a set of
 * options to a player.
 *   * {@link MessageFormData} are simple two-button message
 * experiences that are functional for Yes/No or OK/Cancel
 * questions.
 *   * {@link ModalFormData} allow for a more flexible
 * "questionnaire-style" list of controls that can be used to
 * take input.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-ui",
 *   "version": "2.2.0-beta"
 * }
 * ```
 *
 */
import { EngineError } from '@minecraft/common';
import { InvalidEntityError, Player, RawMessage, RawMessageError } from '@minecraft/server';
/**
 * 数据驱动 UI 界面（MessageBox 或 CustomForm）被关闭的原因。
 *
 * The reason why a data driven UI screen (MessageBox or
 * CustomForm) was closed.
 */
export enum DataDrivenScreenClosedReason {
    /**
     * @remarks
     * 该界面被客户端关闭（例如，玩家关闭了它，或者存在客户端授权的关闭按钮）。
     *
     * The screen was closed by the client (e.g., the player
     * dismissed it or there was a client authoritative close
     * button).
     *
     */
    ClientClosed = 'ClientClosed',
    /**
     * @remarks
     * 该界面被服务器关闭，很可能是通过 close API 关闭的。
     *
     * The screen was closed by the server, likely by the close
     * API.
     *
     */
    ServerClosed = 'ServerClosed',
    /**
     * @remarks
     * 由于玩家正忙于另一个 UI 交互，无法显示该界面。
     *
     * The screen could not be shown because the player was busy
     * with another UI interaction.
     *
     */
    UserBusy = 'UserBusy',
}

/**
 * 一个枚举，表示表单被取消的原因。
 *
 * An enum representing the reasons why a form was canceled.
 */
export enum FormCancelationReason {
    /**
     * @remarks
     * 由于玩家正忙于另一个 UI 交互，表单被取消。
     *
     * The form was canceled because the player was busy with
     * another UI interaction.
     *
     */
    UserBusy = 'UserBusy',
    /**
     * @remarks
     * 由于玩家关闭了表单，表单被取消。
     *
     * The form was canceled because the player closed it.
     *
     */
    UserClosed = 'UserClosed',
}

/**
 * 一个枚举，表示表单被拒绝的原因。
 *
 * An enum representing the reasons why a form was rejected.
 */
export enum FormRejectReason {
    /**
     * @remarks
     * 由于来自客户端的响应格式错误或无法解析，表单被拒绝。
     *
     * The form was rejected because the response from the client
     * was malformed or could not be parsed.
     *
     */
    MalformedResponse = 'MalformedResponse',
    /**
     * @remarks
     * 由于玩家在响应前退出了游戏，表单被拒绝。
     *
     * The form was rejected because the player quit the game
     * before responding.
     *
     */
    PlayerQuit = 'PlayerQuit',
    /**
     * @remarks
     * 由于在玩家响应前服务器关闭，表单被拒绝。
     *
     * The form was rejected because the server shut down before
     * the player responded.
     *
     */
    ServerShutdown = 'ServerShutdown',
}

/**
 * 表单可见性操作失败的原因。
 *
 * The reason why a form visibility operation failed.
 */
export enum FormVisibilityErrorReason {
    /**
     * @remarks
     * 由于表单已在向玩家显示，操作失败。
     *
     * The operation failed because the form is already being shown
     * to the player.
     *
     */
    AlreadyShowing = 'AlreadyShowing',
    /**
     * @remarks
     * 由于表单当前未向玩家显示，操作失败。
     *
     * The operation failed because the form is not currently being
     * shown to the player.
     *
     */
    NotShowing = 'NotShowing',
}

/**
 * 一个枚举，表示文本过滤过程中可能发生的错误。它用于提供关于过滤过程的更多上下文。
 *
 * An enum representing the errors that can occur during text
 * filtering. This is used to provide more context about the
 * filtering process.
 */
export enum TextFilteringError {
    /**
     * @remarks
     * 由于玩家在其设置中禁用了文本过滤，文本未被过滤。
     *
     * The text was not filtered because the player disabled text
     * filtering in their settings.
     *
     */
    DisabledByPlayer = 'DisabledByPlayer',
    /**
     * @remarks
     * 由于服务不可达，文本未被过滤。这可能发生在网络问题或服务停机维护时。
     *
     * The text was not filtered because the service is
     * unreachable. This can occur if there are network issues or
     * if the service is down for maintenance.
     *
     */
    TextProcessorServiceUnreachable = 'TextProcessorServiceUnreachable',
    /**
     * @remarks
     * 文本过滤期间发生了未知错误。这可能发生在文本过滤服务出现意外问题，或者服务返回了一个未归类到其他错误类型的错误时。
     *
     * An unknown error occurred during text filtering. This can
     * occur if there is an unexpected issue with the text
     * filtering service or if the service returns an error that is
     * not categorized under the other error types.
     *
     */
    Unknown = 'Unknown',
}

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

/**
 * An observable that holds a boolean value. Listeners are
 * notified whenever the value changes.
 * 一个持有布尔值的可观察对象。当值发生变化时，会通知所有监听器。
 */
export class ObservableBoolean {
    /**
     * @remarks
     * Creates a new ObservableBoolean with the provided initial
     * boolean value.
     * 使用提供的初始布尔值创建一个新的 `ObservableBoolean`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The initial boolean value for this observable.
     * 此可观察对象的初始布尔值。
     * @param options
     * Optional configuration for the observable, such as whether
     * the value can be written by the client.
     * 可观察对象的可选配置，例如该值是否可由客户端写入。
     */
    constructor(data: boolean, options?: ObservableOptions);
    /**
     * @remarks
     * Returns the current boolean value held by this observable.
     * 返回此可观察对象持有的当前布尔值。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    getData(): boolean;
    /**
     * @remarks
     * Updates the boolean value held by this observable. If the
     * new value differs from the current value, all subscribed
     * listeners are notified with the new value.
     * 更新此可观察对象持有的布尔值。如果新值与当前值不同，则会使用新值通知所有已订阅的监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The new boolean value to set.
     * 要设置的新布尔值。
     */
    setData(data: boolean): void;
    /**
     * @remarks
     * Registers a callback to be invoked whenever the observable's
     * value changes. Returns the callback, which can be passed to
     * unsubscribe to remove the listener.
     * 注册一个回调函数，当可观察对象的值发生变化时调用。返回该回调函数，可将其传递给 `unsubscribe` 以移除监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * A function that receives the new boolean value each time the
     * observable changes.
     * 每次可观察对象发生变化时接收新布尔值的函数。
     */
    subscribe(callback: (arg0: boolean) => void): (arg0: boolean) => void;
    /**
     * @remarks
     * Removes a previously registered listener from this
     * observable. Returns true if the listener was found and
     * removed, false if it was not found.
     * 从此可观察对象中移除先前注册的监听器。如果找到并移除了监听器，则返回 `true`；如果未找到，则返回 `false`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * The callback handle previously returned by subscribe.
     * 先前由 `subscribe` 返回的回调句柄。
     */
    unsubscribe(callback: (arg0: boolean) => void): boolean;
}

/**
 * An observable that holds a numeric value. Listeners are
 * notified whenever the value changes.
 * 一个持有数值的可观察对象。当值发生变化时，会通知所有监听器。
 */
export class ObservableNumber {
    /**
     * @remarks
     * Creates a new ObservableNumber with the provided initial
     * numeric value.
     * 使用提供的初始数值创建一个新的 `ObservableNumber`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The initial numeric value for this observable.
     * 此可观察对象的初始数值。
     * @param options
     * Optional configuration for the observable, such as whether
     * the value can be written by the client.
     * 可观察对象的可选配置，例如该值是否可由客户端写入。
     */
    constructor(data: number, options?: ObservableOptions);
    /**
     * @remarks
     * Returns the current numeric value held by this observable.
     * 返回此可观察对象持有的当前数值。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    getData(): number;
    /**
     * @remarks
     * Updates the numeric value held by this observable. If the
     * new value differs from the current value, all subscribed
     * listeners are notified with the new value.
     * 更新此可观察对象持有的数值。如果新值与当前值不同，则会使用新值通知所有已订阅的监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The new numeric value to set.
     * 要设置的新数值。
     */
    setData(data: number): void;
    /**
     * @remarks
     * Registers a callback to be invoked whenever the observable's
     * value changes. Returns the callback, which can be passed to
     * unsubscribe to remove the listener.
     * 注册一个回调函数，当可观察对象的值发生变化时调用。返回该回调函数，可将其传递给 `unsubscribe` 以移除监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * A function that receives the new numeric value each time the
     * observable changes.
     * 每次可观察对象发生变化时接收新数值的函数。
     */
    subscribe(callback: (arg0: number) => void): (arg0: number) => void;
    /**
     * @remarks
     * Removes a previously registered listener from this
     * observable. Returns true if the listener was found and
     * removed, false if it was not found.
     * 从此可观察对象中移除先前注册的监听器。如果找到并移除了监听器，则返回 `true`；如果未找到，则返回 `false`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * The callback handle previously returned by subscribe.
     * 先前由 `subscribe` 返回的回调句柄。
     */
    unsubscribe(callback: (arg0: number) => void): boolean;
}

/**
 * An observable that holds a string value. Listeners are
 * notified whenever the value changes.
 * 一个持有字符串值的可观察对象。当值发生变化时，会通知所有监听器。
 */
export class ObservableString {
    /**
     * @remarks
     * Creates a new ObservableString with the provided initial
     * string value.
     * 使用提供的初始字符串值创建一个新的 `ObservableString`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The initial string value for this observable.
     * 此可观察对象的初始字符串值。
     * @param options
     * Optional configuration for the observable, such as whether
     * the value can be written by the client.
     * 可观察对象的可选配置，例如该值是否可由客户端写入。
     */
    constructor(data: string, options?: ObservableOptions);
    /**
     * @remarks
     * Returns the current string value held by this observable.
     * 返回此可观察对象持有的当前字符串值。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    getData(): string;
    /**
     * @remarks
     * Gets filtered data from the Observable (only available for
     * strings). In case of failure, it will return an array of
     * TextFilteringError that can provide more context about the
     * filtering process. For testing purposes, the options are
     * available under 'Creator -> Text Filtering' settings menu.
     * This delay is only applied to the getFilteredText function
     * and can be used to simulate network latency when testing.
     * 从可观察对象获取经过过滤的数据（仅适用于字符串）。如果失败，它将返回一个 `TextFilteringError` 数组，该数组可以提供有关过滤过程的更多上下文。出于测试目的，这些选项可在 'Creator -> Text Filtering' 设置菜单中找到。此延迟仅适用于 `getFilteredText` 函数，并可在测试时用于模拟网络延迟。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    getFilteredText(player: Player): Promise<TextFilteringError[] | string>;
    /**
     * @remarks
     * Updates the string value held by this observable. If the new
     * value differs from the current value, all subscribed
     * listeners are notified with the new value.
     * 更新此可观察对象持有的字符串值。如果新值与当前值不同，则会使用新值通知所有已订阅的监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The new string value to set.
     * 要设置的新字符串值。
     */
    setData(data: string): void;
    /**
     * @remarks
     * Registers a callback to be invoked whenever the observable's
     * value changes. Returns the callback, which can be passed to
     * unsubscribe to remove the listener.
     * 注册一个回调函数，当可观察对象的值发生变化时调用。返回该回调函数，可将其传递给 `unsubscribe` 以移除监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * A function that receives the new string value each time the
     * observable changes.
     * 每次可观察对象发生变化时接收新字符串值的函数。
     */
    subscribe(callback: (arg0: string) => void): (arg0: string) => void;
    /**
     * @remarks
     * Removes a previously registered listener from this
     * observable. Returns true if the listener was found and
     * removed, false if it was not found.
     * 从此可观察对象中移除先前注册的监听器。如果找到并移除了监听器，则返回 `true`；如果未找到，则返回 `false`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * The callback handle previously returned by subscribe.
     * 先前由 `subscribe` 返回的回调句柄。
     */
    unsubscribe(callback: (arg0: string) => void): boolean;
}

/**
 * An observable that holds a UIRawMessage value. Listeners are
 * notified whenever the value changes.
 * 一个持有 `UIRawMessage` 值的可观察对象。当值发生变化时，会通知所有监听器。
 */
export class ObservableUIRawMessage {
    /**
     * @remarks
     * Creates a new ObservableUIRawMessage with the provided
     * initial UIRawMessage value.
     * 使用提供的初始 `UIRawMessage` 值创建一个新的 `ObservableUIRawMessage`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The initial UIRawMessage value for this observable.
     * 此可观察对象的初始 `UIRawMessage` 值。
     * @param options
     * Optional configuration for the observable, such as whether
     * the value can be written by the client.
     * 可观察对象的可选配置，例如该值是否可由客户端写入。
     */
    constructor(data: UIRawMessage, options?: ObservableOptions);
    /**
     * @remarks
     * Returns the current UIRawMessage value held by this
     * observable.
     * 返回此可观察对象持有的当前 `UIRawMessage` 值。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    getData(): UIRawMessage;
    /**
     * @remarks
     * Updates the UIRawMessage value held by this observable. If
     * the new value differs from the current value, all subscribed
     * listeners are notified with the new value.
     * 更新此可观察对象持有的 `UIRawMessage` 值。如果新值与当前值不同，则会使用新值通知所有已订阅的监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The new UIRawMessage value to set.
     * 要设置的新 `UIRawMessage` 值。
     */
    setData(data: UIRawMessage): void;
    /**
     * @remarks
     * Registers a callback to be invoked whenever the observable's
     * value changes. Returns the callback, which can be passed to
     * unsubscribe to remove the listener.
     * 注册一个回调函数，当可观察对象的值发生变化时调用。返回该回调函数，可将其传递给 `unsubscribe` 以移除监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * A function that receives the new UIRawMessage value each
     * time the observable changes.
     * 每次可观察对象发生变化时接收新 `UIRawMessage` 值的函数。
     */
    subscribe(callback: (arg0: UIRawMessage) => void): (arg0: UIRawMessage) => void;
    /**
     * @remarks
     * Removes a previously registered listener from this
     * observable. Returns true if the listener was found and
     * removed, false if it was not found.
     * 从此可观察对象中移除先前注册的监听器。如果找到并移除了监听器，则返回 `true`；如果未找到，则返回 `false`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * The callback handle previously returned by subscribe.
     * 先前由 `subscribe` 返回的回调句柄。
     */
    unsubscribe(callback: (arg0: UIRawMessage) => void): boolean;
}

export class UIManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    closeAllForms(player: Player): void;
}

/**
 * 用于配置按钮组件的选项。
 *
 * Options for configuring a button component.
 */
export interface ButtonOptions {
    /**
     * @remarks
     * 当为 `true` 或绑定到一个值为 `true` 的 `ObservableBoolean` 时，该按钮会显示但无法被按下。
     *
     * When true or bound to a true ObservableBoolean, the button
     * is shown but cannot be pressed.
     *
     */
    disabled?: boolean | ObservableBoolean;
    /**
     * @remarks
     * 当玩家悬停在按钮上时，在工具提示中显示的文本。
     *
     * Text shown in a tooltip when the player hovers over the
     * button.
     *
     */
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * 当为 `false` 或绑定到一个值为 `false` 的 `ObservableBoolean` 时，该按钮会被隐藏。
     *
     * When false or bound to a false ObservableBoolean, the button
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}

/**
 * 用于配置 CustomForm 中分隔线组件的选项。
 *
 * Options for configuring a divider component in a CustomForm.
 */
export interface DividerOptions {
    /**
     * @remarks
     * 当为 `false` 或绑定到一个值为 `false` 的 `ObservableBoolean` 时，分隔线会被隐藏。
     *
     * When false or bound to a false ObservableBoolean, the
     * divider is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}

/**
 * 表示下拉组件中的单个选项。
 *
 * Represents a single item in a dropdown component.
 */
export interface DropdownItemData {
    /**
     * @remarks
     * 当选中此项时，显示在下拉框周围的描述文本。
     *
     * Optional descriptive text shown around the dropdown when
     * this item is selected.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * 在下拉列表中为此选项显示的文本。
     *
     * The text displayed for this item in the dropdown list.
     *
     */
    label: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * 与此下拉选项关联的数值。当玩家选择此项时，绑定的 `ObservableNumber` 将被设置为该值。
     *
     * The numeric value associated with this dropdown item. This
     * is the value the bound ObservableNumber will be set to when
     * the player selects this item.
     *
     */
    value: number;
}

/**
 * 用于配置下拉组件的选项。
 *
 * Options for configuring a dropdown component.
 */
export interface DropdownOptions {
    /**
     * @remarks
     * 显示在下拉框周围的描述文本，以提供额外的上下文。
     *
     * Descriptive text shown around the dropdown to provide
     * additional context.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * 当为 `true` 或绑定到一个值为 `true` 的 `ObservableBoolean` 时，下拉框会显示但无法被更改。
     *
     * When true or bound to a true ObservableBoolean, the dropdown
     * is shown but cannot be changed.
     *
     */
    disabled?: boolean | ObservableBoolean;
    /**
     * @remarks
     * 当为 `false` 或绑定到一个值为 `false` 的 `ObservableBoolean` 时，下拉框会被隐藏。
     *
     * When false or bound to a false ObservableBoolean, the
     * dropdown is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}

/**
 * @beta
 * 用于配置图像组件的选项。
 *
 * Options for configuring an image component.
 */
export interface ImageOptions {
    /**
     * @remarks
     * 当为 `false` 或绑定到一个值为 `false` 的 `ObservableBoolean` 时，图像会被隐藏。
     *
     * When false or bound to a false ObservableBoolean, the image
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
    /**
     * @remarks
     * 将图像宽度设置为表单宽度的百分比。`1` 表示整个表单宽度，`0.5` 表示表单宽度的一半。大于 `1` 或小于等于 `0` 的值将变为 `1`。
     *
     * Sets the width of the image as a percentage of the width of
     * the form. 1 is the entire form width, 0.5 is half of the
     * form width. Greater than 1 or less than/equal to 0 will
     * become 1.
     *
     */
    width?: number | ObservableNumber;
}

/**
 * 当 MessageBox 关闭时返回的结果。包含消息框关闭的原因以及玩家选择的按钮（如果适用）。
 *
 * The result returned when an MessageBox is closed. Contains
 * the reason the message box was closed and the player's
 * button selection, if applicable.
 */
export interface MessageBoxResult {
    /**
     * @remarks
     * 消息框关闭的原因。
     *
     * The reason the message box was closed.
     *
     */
    closeReason: DataDrivenScreenClosedReason;
    /**
     * @remarks
     * 玩家所选择按钮的索引。如果消息框在没有按钮选择的情况下关闭（例如，玩家正忙或服务器关闭了它），则不设置此值。
     *
     * The index of the button the player selected. Not set if the
     * message box was closed without a button selection (e.g., the
     * player was busy or the server closed it).
     *
     */
    selection?: number;
}

/**
 * 传递给 {@link @minecraft/Server-ui.ModalFormData.dropdown} 的接口，为下拉列表的创建提供额外的选项。
 *
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.dropdown} to provide
 * additional options for the dropdown creation.
 */
export interface ModalFormDataDropdownOptions {
    /**
     * @remarks
     * 默认选中的选项索引。如果未设置此值，则为零。
     *
     * The default selected item index. It will be zero in case of
     * not setting this value.
     *
     */
    defaultValueIndex?: number;
    /**
     * @remarks
     * 将显示一个感叹号图标，当悬停在该图标上时会显示工具提示。
     *
     * It will show an exclamation icon that will display a tooltip
     * if it is hovered.
     *
     */
    tooltip?: RawMessage | string;
}

/**
 * 传递给 {@link @minecraft/Server-ui.ModalFormData.slider} 的接口，为滑块的创建提供额外的选项。
 *
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.slider} to provide
 * additional options for the slider creation.
 */
export interface ModalFormDataSliderOptions {
    /**
     * @remarks
     * 滑块的默认值。
     *
     * The default value for the slider.
     *
     */
    defaultValue?: number;
    /**
     * @remarks
     * 将显示一个感叹号图标，当悬停在该图标上时会显示工具提示。
     *
     * It will show an exclamation icon that will display a tooltip
     * if it is hovered.
     *
     */
    tooltip?: RawMessage | string;
    /**
     * @remarks
     * 定义滑块移动时生成值的增量。如果未提供此值，则为 `1`。
     *
     * Defines the increment of values that the slider generates
     * when moved. It will be '1' in case of not providing this.
     *
     */
    valueStep?: number;
}

/**
 * 传递给 {@link @minecraft/Server-ui.ModalFormData.textField} 的接口，为文本输入框的创建提供额外的选项。
 *
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.textField} to provide
 * additional options for the textfield creation.
 */
export interface ModalFormDataTextFieldOptions {
    /**
     * @remarks
     * 文本输入框的默认值。
     *
     * The default value for the textfield.
     *
     */
    defaultValue?: RawMessage | string;
    /**
     * @remarks
     * 将显示一个感叹号图标，当悬停在该图标上时会显示工具提示。
     *
     * It will show an exclamation icon that will display a tooltip
     * if it is hovered.
     *
     */
    tooltip?: RawMessage | string;
}

/**
 * 传递给 {@link @minecraft/Server-ui.ModalFormData.toggle} 的接口，为开关的创建提供额外的选项。
 *
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.toggle} to provide
 * additional options for the toggle creation.
 */
export interface ModalFormDataToggleOptions {
    /**
     * @remarks
     * 开关的默认值。
     *
     * The default value for the toggle.
     *
     */
    defaultValue?: boolean;
    /**
     * @remarks
     * 将显示一个感叹号图标，当悬停在该图标上时会显示工具提示。
     *
     * It will show an exclamation icon that will display a tooltip
     * if it is hovered.
     *
     */
    tooltip?: RawMessage | string;
}

/**
 * 用于创建 Observable 的配置选项。控制可观察值的访问和修改方式。
 *
 * Configuration options for creating an Observable. Controls
 * how the observable value can be accessed and modified.
 */
export interface ObservableOptions {
    /**
     * @remarks
     * 当为 `true` 时，允许客户端直接写入此可观察对象的值，从而实现 UI 与可观察对象之间的双向数据绑定。
     *
     * When true, allows the client to write to this observable's
     * value directly, enabling two-way data binding between the UI
     * and the observable.
     *
     */
    clientWritable: boolean;
}

/**
 * 用于配置滑块组件的选项。
 *
 * Options for configuring a slider component.
 */
export interface SliderOptions {
    /**
     * @remarks
     * 显示在滑块周围的描述文本，以提供额外的上下文。
     *
     * Descriptive text shown around the slider to provide
     * additional context.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * 当为 `true` 或绑定到一个值为 `true` 的 `ObservableBoolean` 时，滑块会显示但无法被移动。
     *
     * When true or bound to a true ObservableBoolean, the slider
     * is shown but cannot be moved.
     *
     */
    disabled?: boolean | ObservableBoolean;
    /**
     * @remarks
     * 每个滑块步进之间的增量值。如果未指定，默认为 `1`。
     *
     * The increment amount between each slider step. Defaults to 1
     * if not specified.
     *
     */
    step?: number | ObservableNumber;
    /**
     * @remarks
     * 当为 `false` 或绑定到一个值为 `false` 的 `ObservableBoolean` 时，滑块会被隐藏。
     *
     * When false or bound to a false ObservableBoolean, the slider
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}

/**
 * 用于配置间距组件的选项。
 *
 * Options for configuring a spacer component.
 */
export interface SpacingOptions {
    /**
     * @remarks
     * 当为 `false` 或绑定到一个值为 `false` 的 `ObservableBoolean` 时，间距组件会被隐藏。
     *
     * When false or bound to a false ObservableBoolean, the spacer
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}

/**
 * 用于配置文本输入框组件的选项。
 *
 * Options for configuring a text field component.
 */
export interface TextFieldOptions {
    /**
     * @remarks
     * 显示在文本输入框标签周围的描述文本，以提供额外的上下文。
     *
     * Descriptive text shown around the text field label to
     * provide additional context.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * 当为 `true` 或绑定到一个值为 `true` 的 `ObservableBoolean` 时，文本输入框会显示但无法被编辑。
     *
     * When true or bound to a true ObservableBoolean, the text
     * field is shown but cannot be edited.
     *
     */
    disabled?: boolean | ObservableBoolean;
    /**
     * @remarks
     * 当为 `false` 或绑定到一个值为 `false` 的 `ObservableBoolean` 时，文本输入框会被隐藏。
     *
     * When false or bound to a false ObservableBoolean, the text
     * field is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}

/**
 * 用于配置文本组件（标签或标题）的选项。
 *
 * Options for configuring a text component (label or header).
 */
export interface TextOptions {
    /**
     * @remarks
     * 当为 `false` 或绑定到一个值为 `false` 的 `ObservableBoolean` 时，文本组件会被隐藏。
     *
     * When false or bound to a false ObservableBoolean, the text
     * component is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}

/**
 * 用于配置开关组件的选项。
 *
 * Options for configuring a toggle component.
 */
export interface ToggleOptions {
    /**
     * @remarks
     * 显示在开关周围的描述文本，以提供额外的上下文。
     *
     * Descriptive text shown around the toggle to provide
     * additional context.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * 当为 `true` 或绑定到一个值为 `true` 的 `ObservableBoolean` 时，开关会显示但无法被交互。
     *
     * When true or bound to a true ObservableBoolean, the toggle
     * is shown but cannot be interacted with.
     *
     */
    disabled?: boolean | ObservableBoolean;
    /**
     * @remarks
     * 当为 `false` 或绑定到一个值为 `false` 的 `ObservableBoolean` 时，开关会被隐藏。
     *
     * When false or bound to a false ObservableBoolean, the toggle
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}

/**
 * 可以发送给客户端的消息。这是 RawMessage 类型的子集，用于 UI 消息。
 *
 * A message that can be sent to the client. This is a subset
 * of the RawMessage type, and is used for UI messages.
 */
export interface UIRawMessage {
    /**
     * @remarks
     * 提供当前消息的原始文本等价物。
     *
     * Provides a raw-text equivalent of the current message.
     *
     */
    rawtext?: UIRawMessage[];
    /**
     * @remarks
     * 提供要使用的字符串字面量值。
     *
     * Provides a string literal value to use.
     *
     */
    text?: string;
    /**
     * @remarks
     * 提供一个本地化字符串，如果客户端在玩家语言中有与本地化字符串匹配的可用资源，则会在客户端进行翻译。
     *
     * Provides a localization string where, if the client has an
     * available resource in the players' language which matches
     * the localization string, will get translated on the client.
     *
     */
    translate?: string;
    /**
     * @remarks
     * 本地化字符串的参数。可以是字符串数组，也可以是包含原始文本对象数组的 UIRawMessage。
     *
     * Arguments for the localization string. Can be either an
     * array of strings or UIRawMessage containing an array of raw
     * text objects.
     *
     */
    with?: string[] | UIRawMessage;
}

/**
 * 当表单被拒绝时抛出。包含拒绝的原因。
 * 
 * Thrown when a form is rejected. Contains the reason for the
 * rejection.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FormRejectError extends Error {
    private constructor();
    /**
     * @remarks
     * 表单被拒绝的原因。
     * 
     * The reason the form was rejected.
     *
     * @earlyExecution
     *
     */
    readonly reason: FormRejectReason;
}

/**
 * 当表单可见性操作失败时抛出，例如尝试显示一个已经正在显示的表单，或尝试关闭一个当前未打开的表单。
 * 
 * Thrown when a form visibility operation fails, such as
 * attempting to show a form that is already showing or
 * attempting to close a form that is not currently open.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FormVisibilityError extends Error {
    private constructor();
    /**
     * @remarks
     * 导致可见性错误的表单标识符。
     * 
     * The identifier of the form that caused the visibility error.
     *
     * @earlyExecution
     *
     */
    readonly formId: string;
    /**
     * @remarks
     * 表单可见性操作失败的原因。
     * 
     * The reason the form visibility operation failed.
     *
     * @earlyExecution
     *
     */
    readonly reason: FormVisibilityErrorReason;
}

/**
 * Thrown when attempting to interact with a form using an
 * invalid or unknown form identifier.
 * 当尝试使用无效或未知的表单标识符与表单交互时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidFormError extends Error {
    private constructor();
    /**
     * @remarks
     * The identifier of the invalid form that was referenced.
     * 所引用的无效表单的标识符。
     *
     * @earlyExecution
     *
     */
    readonly formId: string;
}

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

/**
 * Thrown when an observable value is expected to be writable,
 * but it is not.
 * 当期望可观察值是可写的，但它不可写时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidObservableError extends Error {
    private constructor();
}

/**
 * 当表单操作因为目标玩家已离开游戏而失败时抛出。
 *
 * Thrown when a form operation fails because the target player
 * has left the game.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerLeftError extends Error {
    private constructor();
    /**
     * @remarks
     * 玩家离开游戏时正在显示的表单标识符。
     *
     * The identifier of the form that was being shown when the
     * player left the game.
     *
     * @earlyExecution
     *
     */
    readonly formId: string;
}

export const uiManager: UIManager;
