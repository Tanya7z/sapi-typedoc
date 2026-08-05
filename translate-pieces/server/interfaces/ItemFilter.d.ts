/* IMPORT */ import { ItemType } from '..';

/**
 * 包含过滤物品的选项。
 *
 * Contains options for filtering items.
 */
export interface ItemFilter {
    /**
     * @remarks
     * 如果定义，则包含与这些类型匹配的物品。
     *
     * If defined, items that match these types are included.
     *
     */
    includeTypes?: (ItemType | string)[];
}
