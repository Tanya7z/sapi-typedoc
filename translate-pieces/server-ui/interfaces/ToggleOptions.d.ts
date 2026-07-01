/* IMPORT */ import { ObservableBoolean, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

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
