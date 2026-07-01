/* IMPORT */ import { RawMessage } from '../../server';

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
