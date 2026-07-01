/* IMPORT */ import { RawMessage } from '../../server';

/**
 * 传递给 {@link @minecraft/Server-ui.ModalFormData.toggle} 的接口，为开关的创建提供额外的选项。
 *
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.toggle} to provide
 * additional options for the toggle creation.
 */
export interface ModalFormDataToggleOptions {
    /**
     * @remarks
     * 开关的默认值。
     *
     * The default value for the toggle.
     *
     */
    defaultValue?: boolean;
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
