/* IMPORT */ import { ObservableBoolean, ObservableNumber } from '..';

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
