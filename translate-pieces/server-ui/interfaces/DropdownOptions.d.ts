/* IMPORT */ import { ObservableBoolean, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

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
