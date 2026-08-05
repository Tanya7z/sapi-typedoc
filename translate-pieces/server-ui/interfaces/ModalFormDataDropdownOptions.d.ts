/* IMPORT */ import { RawMessage } from '../../server';

/**
 * 传递给 {@link @minecraft/Server-ui.ModalFormData.dropdown} 的接口，为下拉列表的创建提供额外的选项。
 *
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.dropdown} to provide
 * additional options for the dropdown creation.
 */
export interface ModalFormDataDropdownOptions {
    /**
     * @remarks
     * 默认选中的选项索引。如果未设置此值，则为零。
     *
     * The default selected item index. It will be zero in case of
     * not setting this value.
     *
     */
    defaultValueIndex?: number;
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
