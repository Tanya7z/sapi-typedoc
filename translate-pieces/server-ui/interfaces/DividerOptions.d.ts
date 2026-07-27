/* IMPORT */ import { ObservableBoolean } from '..';

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
