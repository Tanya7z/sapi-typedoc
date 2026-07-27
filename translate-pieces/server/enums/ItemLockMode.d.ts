/**
 * 描述物品在容器中的移动方式。
 *
 * Describes how an an item can be moved within a container.
 */
export enum ItemLockMode {
    /**
     * @remarks
     * 物品不能被丢弃或用于合成。
     *
     * The item cannot be dropped or crafted with.
     *
     */
    inventory = 'inventory',
    /**
     * @remarks
     * 物品没有容器限制。
     *
     * The item has no container restrictions.
     *
     */
    none = 'none',
    /**
     * @remarks
     * 物品不能从其槽位移出、丢弃或用于合成。
     *
     * The item cannot be moved from its slot, dropped or crafted
     * with.
     *
     */
    slot = 'slot',
}
