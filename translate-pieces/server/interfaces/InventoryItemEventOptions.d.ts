/* IMPORT */ import { PlayerInventoryType } from '..';

/**
 * 包含库存物品事件的额外过滤选项。
 *
 * Contains additional filtering options for inventory item
 * events.
 */
export interface InventoryItemEventOptions {
    /**
     * @remarks
     * 要考虑的插槽索引。值应为正数。如果未指定，则考虑所有插槽。
     *
     * The slot indexes to consider. Values should be positive
     * numbers. If not specified, all slots are considered.
     *
     * Bounds: [0, 1000]
     */
    allowedSlots?: number[];
    /**
     * @remarks
     * 要排除的物品名称。
     *
     * The names for the items to exclude.
     *
     */
    excludeItems?: string[];
    /**
     * @remarks
     * 要排除的物品标签。
     *
     * The item tags to exclude.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 标记为仅忽略数量变化。`true` 表示忽略数量变化，`false` 表示不忽略数量变化。
     *
     * Flag to specify to ignore quantity changes only. True to
     * ignore quantity changes, false to not ignore quantity
     * changes.
     *
     */
    ignoreQuantityChange?: boolean;
    /**
     * @remarks
     * 要考虑的物品名称。
     *
     * The item names to consider.
     *
     */
    includeItems?: string[];
    /**
     * @remarks
     * 要考虑的物品标签。
     *
     * The item tags to consider.
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 要考虑的玩家库存类型。
     *
     * The player inventory type to consider.
     *
     */
    inventoryType?: PlayerInventoryType;
}
