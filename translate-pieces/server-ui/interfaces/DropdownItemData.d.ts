/* IMPORT */ import { ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * 表示下拉组件中的单个选项。
 *
 * Represents a single item in a dropdown component.
 */
export interface DropdownItemData {
    /**
     * @remarks
     * 当选中此项时，显示在下拉框周围的描述文本。
     *
     * Optional descriptive text shown around the dropdown when
     * this item is selected.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * 在下拉列表中为此选项显示的文本。
     *
     * The text displayed for this item in the dropdown list.
     *
     */
    label: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * 与此下拉选项关联的数值。当玩家选择此项时，绑定的 `ObservableNumber` 将被设置为该值。
     *
     * The numeric value associated with this dropdown item. This
     * is the value the bound ObservableNumber will be set to when
     * the player selects this item.
     *
     */
    value: number;
}
