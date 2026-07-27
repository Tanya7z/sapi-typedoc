/* IMPORT */ import { RawMessage } from '../../server';

/**
 * 传递给 {@link @minecraft/Server-ui.ModalFormData.textField} 的接口，为文本输入框的创建提供额外的选项。
 *
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.textField} to provide
 * additional options for the textfield creation.
 */
export interface ModalFormDataTextFieldOptions {
    /**
     * @remarks
     * 文本输入框的默认值。
     *
     * The default value for the textfield.
     *
     */
    defaultValue?: RawMessage | string;
    /**
     * @remarks
     * 将显示一个感叹号图标，当悬停在该图标上时会显示工具提示。
     *
     * It will show an exclamation icon that will display a tooltip
     * if it is hovered.
     *
     */
    tooltip?: RawMessage | string;
}
