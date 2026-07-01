/* IMPORT */ import { ObservableBoolean, ObservableNumber, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

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
