/* IMPORT */ import { ObservableBoolean } from '..';

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
