/* IMPORT */ import { ObservableBoolean, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

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
