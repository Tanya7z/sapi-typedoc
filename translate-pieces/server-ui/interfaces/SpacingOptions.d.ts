/* IMPORT */ import { ObservableBoolean } from '..';

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
