/* IMPORT */ import { ObservableBoolean, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

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
