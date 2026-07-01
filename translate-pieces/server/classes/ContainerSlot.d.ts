/* IMPORT */ import { ArgumentOutOfBoundsError, EngineError, UnsupportedFunctionalityError } from '../../common';
/* IMPORT */ import { ContainerRulesError, InvalidContainerSlotError, ItemLockMode, ItemStack, ItemType, RawMessage, Vector3 } from '..';

/**
 * 表示更广泛容器（例如实体物品栏）中的一个槽位。
 *
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 */
export class ContainerSlot {
    private constructor();
    /**
     * @remarks
     * 堆叠中的物品数量。有效值范围为 1-255。提供的值将被限制到物品的最大堆叠大小。
     *
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * @worldMutation
     *
     * Bounds: [1, 255]
     * @throws
     * 如果值超出 1-255 的范围则抛出异常。
     *
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * 返回物品是否可堆叠。如果物品的最大堆叠大小大于 1，并且物品不包含任何自定义数据或属性，则该物品被视为可堆叠。
     *
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * 返回 ContainerSlot 是否有效。如果容器存在且已加载，并且槽位索引有效，则该容器槽位有效。
     *
     * Returns whether the ContainerSlot is valid. The container
     * slot is valid if the container exists and is loaded, and the
     * slot index is valid.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取或设置物品在死亡时是否保留。
     *
     * Gets or sets whether the item is kept on death.
     *
     * @worldMutation
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * 获取或设置物品的锁定模式。默认值为 `ItemLockMode.none`。
     *
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * @worldMutation
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * 最大堆叠大小。此值因物品类型而异。例如，火把的最大堆叠大小为 64，而鸡蛋的最大堆叠大小为 16。
     *
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * 此物品堆叠的给定名称。悬停在物品上时会显示名称标签。将名称标签设置为空字符串或 `undefined` 将移除该名称标签。
     *
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * @worldMutation
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。如果长度超过 255 个字符也会抛出异常。
     *
     * Throws if the slot's container is invalid. Also throws if
     * the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * 物品的类型。
     *
     * The type of the item.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link EngineError}
     *
     * {@link InvalidContainerSlotError}
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * 堆叠物品类型的标识符。如果未指定命名空间，则默认为 `minecraft:`。示例包括 `wheat` 或 `apple`。
     *
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly typeId: string;
    /**
     * @remarks
     * 清除此物品堆叠上设置的所有动态属性。
     *
     * Clears all dynamic properties that have been set on this
     * item stack.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 返回此容器槽位中的物品是否可以被破坏。
     *
     * Returns whether the item within this container slot can be
     * destroyed.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * 返回此容器槽位中的物品是否可以放置在方块上。
     *
     * Returns if the item in this container slot can be placed on.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * 返回一个属性值。
     *
     * Returns a property value.
     *
     * @param identifier
     * 属性标识符。
     *
     * The property identifier.
     * @returns
     * 返回属性的值，如果属性尚未设置则返回 `undefined`。
     *
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 返回此物品堆叠上已使用的可用动态属性标识符集合。
     *
     * Returns the available set of dynamic property identifiers
     * that have been used on this item stack.
     *
     * @returns
     * 此实体上设置的动态属性的字符串数组。
     *
     * A string array of the dynamic properties set on this entity.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 返回此实体当前存储的所有动态属性的总大小（以字节为单位）。包括键和值的大小。这对于诊断性能警告信号很有用——例如，如果一个实体有数兆字节的关联动态属性，它在各种设备上加载可能会很慢。
     *
     * Returns the total size, in bytes, of all the dynamic
     * properties that are currently stored for this entity. This
     * includes the size of both the key and the value.  This can
     * be useful for diagnosing performance warning signs - if, for
     * example, an entity has many megabytes of associated dynamic
     * properties, it may be slow to load on various devices.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 创建物品堆叠的精确副本，包括任何自定义数据或属性。
     *
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * @returns
     * 返回槽位中物品的副本。如果槽位为空则返回 `undefined`。
     *
     * Returns a copy of the item in the slot. Returns undefined if
     * the slot is empty.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getItem(): ItemStack | undefined;
    /**
     * @remarks
     * 返回 ItemStack 的 lore 值——一个次要显示字符串。
     *
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * 一个 lore 字符串数组。如果物品没有 lore，则返回空数组。
     *
     * An array of lore strings. If the item does not have lore,
     * returns an empty array.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getLore(): string[];
    /**
     * @remarks
     * 返回 ItemStack 的 lore 值——一个次要显示字符串。字符串类型的 lore 行将被转换为 {@link RawMessage} 并放置在 {@link RawMessage.text} 下。
     *
     * Returns the lore value - a secondary display string - for an
     * ItemStack. String lore lines will be converted to a {@link
     * RawMessage} and put under {@link RawMessage.text}.
     *
     * @returns
     * 一个 lore 行数组。如果物品没有 lore，则返回空数组。
     *
     * An array of lore lines. If the item does not have lore,
     * returns an empty array.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getRawLore(): RawMessage[];
    /**
     * @remarks
     * 返回槽位中物品的所有标签。
     *
     * Returns all tags for the item in the slot.
     *
     * @returns
     * 返回槽位中物品的所有标签。如果槽位为空则返回空数组。
     *
     * Returns all tags for the item in the slot. Return an empty
     * array if the the slot is empty.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 返回此槽位是否拥有物品。
     *
     * Returns true if this slot has an item.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    hasItem(): boolean;
    /**
     * @remarks
     * 返回槽位中的物品是否具有给定标签。
     *
     * Returns whether the item in the slot slot has the given tag.
     *
     * @param tag
     * 物品标签。
     *
     * The item tag.
     * @returns
     * 如果槽位为空或槽位中的物品不具有给定标签，则返回 `false`。
     *
     * Returns false when the slot is empty or the item in the slot
     * does not have the given tag.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回此物品堆叠是否可以与给定的 `itemStack` 堆叠。这是通过比较物品类型以及物品堆叠关联的任何自定义数据和属性来确定的。每个物品堆叠的数量不予考虑。
     *
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     *
     * @param itemStack
     * 正在比较的 ItemStack。
     *
     * The ItemStack that is being compared.
     * @returns
     * 返回此物品堆叠是否可以与给定的 `itemStack` 堆叠。
     *
     * Returns whether this item stack can be stacked with the
     * given `itemStack`.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 在冒险模式下此物品可以破坏的方块类型列表。方块名称显示在物品的工具提示中。将该值设置为 `undefined` 将清除该列表。
     *
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * @worldMutation
     *
     * @param blockIdentifiers
     * 由标识符指定的方块列表。
     *
     * The list of blocks, given by their identifiers.
     * @throws
     * 如果槽位的容器无效则抛出异常。如果提供的任何方块标识符无效也会抛出异常。
     *
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 在冒险模式下此物品可以放置在上面的方块类型列表。这仅适用于方块物品。方块名称显示在物品的工具提示中。将该值设置为 `undefined` 将清除该列表。
     *
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * @worldMutation
     *
     * @param blockIdentifiers
     * 由标识符指定的方块列表。
     *
     * The list of blocks, given by their identifiers.
     * @throws
     * 如果槽位的容器无效则抛出异常。如果提供的任何方块标识符无效也会抛出异常。
     *
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 使用特定值设置多个动态属性。
     *
     * Sets multiple dynamic properties with specific values.
     *
     * @param values
     * 要设置的动态属性的键值对记录。如果数据值为 `null`，将会移除该属性。
     *
     * A Record of key value pairs of the dynamic properties to
     * set. If the data value is null, it will remove that property
     * instead.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidContainerSlotError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    /**
     * @remarks
     * 设置指定属性为一个值。
     *
     * Sets a specified property to a value.
     *
     * @param identifier
     * 属性标识符。
     *
     * The property identifier.
     * @param value
     * 要设置的属性的数据值。如果值为 `null`，将会移除该属性。
     *
     * Data value of the property to set. If the value is null, it
     * will remove the property instead.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidContainerSlotError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 在槽位中设置给定的 ItemStack，替换任何现有物品。
     *
     * Sets the given ItemStack in the slot, replacing any existing
     * item.
     *
     * @worldMutation
     *
     * @param itemStack
     * 要放置在槽位中的 ItemStack。
     *
     * The ItemStack to be placed in the slot.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link ContainerRulesError}
     *
     * {@link InvalidContainerSlotError}
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * 设置 ItemStack 的 lore 值——一个次要显示字符串。
     *
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @worldMutation
     *
     * @param loreList
     * 一个 lore 字符串列表。将此参数设置为 `undefined` 将清除 lore。
     *
     * A list of lore strings. Setting this argument to undefined
     * will clear the lore.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}
