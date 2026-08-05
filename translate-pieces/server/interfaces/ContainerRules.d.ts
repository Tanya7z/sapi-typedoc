/**
 * 在容器操作中若违反则会抛出错误的规则。
 *
 * Rules that if broken on container operations will throw an
 * error.
 */
export interface ContainerRules {
    /**
     * @remarks
     * 定义容器中唯一允许的物品。如果为空，则所有物品都允许放入容器。
     *
     * Defines the items that are exclusively allowed in the
     * container. If empty all items are allowed in the container.
     *
     */
    allowedItems: string[];
    /**
     * @remarks
     * 确定其他存储物品是否可以放入该容器。
     *
     * Determines whether other storage items can be placed into
     * the container.
     *
     */
    allowNestedStorageItems: boolean;
    /**
     * @remarks
     * 定义容器中不允许的物品。
     *
     * Defines the items that are not allowed in the container.
     *
     */
    bannedItems: string[];
    /**
     * @remarks
     * 定义存储容器中所有物品的最大允许总重量。如果未定义，容器没有重量限制。
     *
     * Defines the maximum allowed total weight of all items in the
     * storage item container. If undefined container has no weight
     * limit.
     *
     */
    weightLimit?: number;
}
