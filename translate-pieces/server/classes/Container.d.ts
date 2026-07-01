/* IMPORT */ import { ContainerRules, ContainerRulesError, ContainerSlot, InvalidContainerError, ItemStack } from '..';

/**
 * 表示一个可以容纳多组物品的容器。用于诸如玩家、运输矿车、羊驼等实体。
 *
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 * @seeExample containers.ts
 */
export class Container {
    private constructor();
    /**
     * @remarks
     * 如果定义了这些规则，其他容器操作如果导致这些规则被违反则会抛出异常。例如，将潜影盒添加到原版 bundles 中。
     *
     * If these rules are defined other container operations will
     * throw if they cause these rules to be invalidated. For
     * example, adding a shulker box to a vanilla bundle.
     *
     */
    readonly containerRules?: ContainerRules;
    /**
     * @remarks
     * 容器中空槽位的数量。
     *
     * Count of the slots in the container that are empty.
     *
     * @throws
     * 如果容器无效则抛出异常。
     *
     * Throws if the container is invalid.
     */
    readonly emptySlotsCount: number;
    /**
     * @remarks
     * 返回容器对象（或与此容器关联的实体或方块）在此上下文中是否仍然可用。
     *
     * Returns whether a container object (or the entity or block
     * that this container is associated with) is still available
     * for use in this context.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 此容器中的槽位数。例如，一个标准的单方块箱子大小为 27。注意，玩家的物品栏容器共有 36 个槽位，9 个快捷栏槽位加 27 个物品栏槽位。
     *
     * The number of slots in this container. For example, a
     * standard single-block chest has a size of 27. Note, a
     * player's inventory container contains a total of 36 slots, 9
     * hotbar slots plus 27 inventory slots.
     *
     * @throws
     * 如果容器无效则抛出异常。
     *
     * Throws if the container is invalid.
     */
    readonly size: number;
    /**
     * @remarks
     * 容器中所有物品的总重量。
     *
     * The combined weight of all items in the container.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerError}
     */
    readonly weight: number;
    /**
     * @remarks
     * 向容器中添加一个物品。该物品将被放置在第一个可用的槽位中，并可以与相同类型的现有物品堆叠。请注意，如果希望在特定槽位中设置物品，请使用 {@link Container.setItem}。
     *
     * Adds an item to the container. The item is placed in the
     * first available slot(s) and can be stacked with existing
     * items of the same type. Note, use {@link Container.setItem}
     * if you wish to set the item in a particular slot.
     *
     * @worldMutation
     *
     * @param itemStack
     * 要添加的物品堆叠。
     *
     * The stack of items to add.
     * @throws
     * 不会因超过重量限制而抛出 {@link ContainerRules} 错误，而是会添加物品直至达到重量限制为止。
     *
     * Won't throw {@link ContainerRules} error for over weight
     * limit but will instead add items up to the weight limit.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks
     * 清空容器中的所有物品栏物品。
     *
     * Clears all inventory items in the container.
     *
     * @worldMutation
     *
     * @throws
     * 如果容器无效则抛出异常。
     *
     * Throws if the container is invalid.
     */
    clearAll(): void;
    /**
     * @remarks
     * 尝试在容器中查找一个物品。
     *
     * Attempts to find an item inside the container
     *
     * @param itemStack
     * 要查找的物品。
     *
     * The item to find.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    contains(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 查找容器内第一个匹配物品的索引。
     *
     * Find the index of the first instance of an item inside the
     * container
     *
     * @param itemStack
     * 要查找的物品。
     *
     * The item to find.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    find(itemStack: ItemStack): number | undefined;
    /**
     * @remarks
     * 查找容器内最后一个匹配物品的索引。
     *
     * Find the index of the last instance of an item inside the
     * container
     *
     * @param itemStack
     * 要查找的物品。
     *
     * The item to find.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    findLast(itemStack: ItemStack): number | undefined;
    /**
     * @remarks
     * 查找容器内第一个空槽位的索引。
     *
     * Finds the index of the first empty slot inside the container
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    firstEmptySlot(): number | undefined;
    /**
     * @remarks
     * 查找容器内第一个物品的索引。
     *
     * Finds the index of the first item inside the container
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    firstItem(): number | undefined;
    /**
     * @remarks
     * 获取指定槽位中的 {@link ItemStack}。如果槽位为空，则返回 `undefined`。此方法不会更改或清空指定槽位的内容。要获取特定槽位的引用，请参阅 {@link Container.getSlot}。
     *
     * Gets an {@link ItemStack} of the item at the specified slot.
     * If the slot is empty, returns `undefined`. This method does
     * not change or clear the contents of the specified slot. To
     * get a reference to a particular slot, see {@link
     * Container.getSlot}.
     *
     * @param slot
     * 要从中检索物品的槽位的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to retrieve items from.
     * Minimum value: 0
     * @throws
     * 如果容器无效或 `slot` 索引超出范围则抛出异常。
     *
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * @seeExample getFirstHotbarItem.ts
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @remarks
     * 返回一个容器槽位。这作为给定索引处槽位的引用。
     *
     * Returns a container slot. This acts as a reference to a slot
     * at the given index for this container.
     *
     * @param slot
     * 要返回的槽位索引。此索引必须在容器的范围内。最小值：0
     *
     * The index of the slot to return. This index must be within
     * the bounds of the container.
     * Minimum value: 0
     * @throws
     * 如果容器无效或 `slot` 索引超出范围则抛出异常。
     *
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * 将物品从一个槽位移到另一个槽位，可以跨容器移动。
     *
     * Moves an item from one slot to another, potentially across
     * containers.
     *
     * @worldMutation
     *
     * @param fromSlot
     * 此容器中要移出物品的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * Minimum value: 0
     * @param toSlot
     * `toContainer` 中要移入物品的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to transfer an item to, on
     * `toContainer`.
     * Minimum value: 0
     * @param toContainer
     * 要移入的目标容器。注意可以是与源容器相同的容器。
     *
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws
     * 如果此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围则抛出异常。
     *
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     * @seeExample moveBetweenContainers.ts
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks
     * 在特定槽位中设置物品堆叠。
     *
     * Sets an item stack within a particular slot.
     *
     * @worldMutation
     *
     * @param slot
     * 要放置物品的槽位的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to set an item at.
     * Minimum value: 0
     * @param itemStack
     * 要放置在指定槽位中的物品堆叠。将 `itemStack` 设置为 `undefined` 将清空该槽位。
     *
     * Stack of items to place within the specified slot. Setting
     * `itemStack` to undefined will clear the slot.
     * @throws
     * 如果容器无效或 `slot` 索引超出范围则抛出异常。
     *
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * 在容器内的两个不同槽位之间交换物品。
     *
     * Swaps items between two different slots within containers.
     *
     * @worldMutation
     *
     * @param slot
     * 此容器中要交换的槽位的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to swap from this container.
     * Minimum value: 0
     * @param otherSlot
     * 要交换的槽位的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to swap with.
     * Minimum value: 0
     * @param otherContainer
     * 要交换的目标容器。注意可以是与源容器相同的容器。
     *
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws
     * 如果此容器或 `otherContainer` 无效，或者 `slot` 或 `otherSlot` 超出范围则抛出异常。
     *
     * Throws if either this container or `otherContainer` are
     * invalid or if the `slot` or `otherSlot` are out of bounds.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks
     * 将物品从一个槽位移到另一个容器，或移到同一容器中的第一个可用槽位。
     *
     * Moves an item from one slot to another container, or to the
     * first available slot in the same container.
     *
     * @worldMutation
     *
     * @param fromSlot
     * 此容器中要移出物品的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * Minimum value: 0
     * @param toContainer
     * 要移入的目标容器。注意可以是与源容器相同的容器。
     *
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @returns
     * 包含无法转移的物品的 ItemStack。如果所有物品都已转移，则返回 `undefined`。
     *
     * An itemStack with the items that couldn't be transferred.
     * Returns undefined if all items were transferred.
     * @throws
     * 如果此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围则抛出异常。不会因超过重量限制而抛出 {@link ContainerRules} 错误，而是会添加物品直至达到重量限制为止。
     *
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * Won't throw {@link ContainerRules} error for over weight
     * limit but will instead add items up to the weight limit.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     * @seeExample transferBetweenContainers.ts
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}
