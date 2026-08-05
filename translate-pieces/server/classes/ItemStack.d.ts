/* IMPORT */ import { ArgumentOutOfBoundsError, EngineError, UnsupportedFunctionalityError } from '../../common';
/* IMPORT */ import { ItemComponent, ItemComponentRegistry, ItemComponentReturnType, ItemLockMode, ItemType, RawMessage, Vector3 } from '..';

/**
 * 定义一个物品集合。
 *
 * Defines a collection of items.
 * @seeExample itemStacks.ts
 * @seeExample givePlayerEquipment.ts
 * @seeExample spawnFeatherItem.ts
 */
export class ItemStack {
    /**
     * @remarks
     * 物品堆中的物品数量。有效值范围为 1-255。提供的值会被
     * 限制在该物品的最大堆叠数量以内。
     *
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * @worldMutation
     *
     * Bounds: [1, 255]
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * 返回该物品是否可堆叠。当物品的最大堆叠数量大于 1 且不
     * 包含任何自定义数据或属性时，该物品被视为可堆叠。
     *
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * 获取或设置该物品是否在死亡时保留。
     *
     * Gets or sets whether the item is kept on death.
     *
     * @worldMutation
     *
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * 用于在 .lang 文件中本地化该物品名称的键。
     *
     * Key for the localization of this items's name used in .lang
     * files.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 获取或设置该物品的锁定模式。默认值为
     * `ItemLockMode.none`。
     *
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * @worldMutation
     *
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * 最大堆叠数量。该值因物品类型而异。例如，火把的最大堆叠
     * 数量为 64，而鸡蛋的最大堆叠数量为 16。
     *
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * 该物品堆的给定名称。名称标签会在悬停于物品上时显示。将
     * 名称标签设置为空字符串或 `undefined` 会移除名称标签。
     *
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * @worldMutation
     *
     * @throws
     * Throws if the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * 该物品的类型。
     *
     * The type of the item.
     *
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * 该物品堆的物品类型标识符。若未指定命名空间，则默认使用
     * 'minecraft:'。例如 'wheat' 或 'apple'。
     *
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * 物品堆中所有物品的总重量，加上由 `Storage Item` 组件定义
     * 的物品容器内所有物品的重量。每个物品的重量可通过
     * `Storage Weight Modifier` 组件修改。
     *
     * The total weight of all items in the stack plus the weight
     * of all items in the items container which is defined with
     * the `Storage Item` component. The weight per item can be
     * modified by the `Storage Weight Modifier` component.
     *
     */
    readonly weight: number;
    /**
     * @remarks
     * 创建一个可在世界中使用的物品堆新实例。
     *
     * Creates a new instance of a stack of items for use in the
     * world.
     *
     * @param itemType
     * 要创建的物品类型。参见 {@link
     * @minecraft/vanilla-data.MinecraftItemTypes} 枚举以获取
     * Minecraft 中标准物品类型的列表。
     *
     * Type of item to create. See the {@link
     * @minecraft/vanilla-data.MinecraftItemTypes} enumeration for
     * a list of standard item types in Minecraft experiences.
     * @param amount
     * 放入物品堆的物品数量，介于 1-255 之间。提供的值会被限制
     * 在该物品的最大堆叠数量以内。注意某些物品的物品堆中只能有
     * 一个物品。
     *
     * Number of items to place in the stack, between 1-255. The
     * provided value will be clamped to the item's maximum stack
     * size. Note that certain items can only have one item in the
     * stack.
     * Defaults to: 1
     * Bounds: [1, 255]
     * @throws
     * Throws if `itemType` is invalid, or if `amount` is outside
     * the range of 1-255.
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * @remarks
     * 清除已在该物品堆上设置的所有动态属性。
     *
     * Clears all dynamic properties that have been set on this
     * item stack.
     *
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 创建该物品堆的精确副本，包括任何自定义数据或属性。
     *
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * @returns
     * 返回该物品堆的一个副本。
     *
     * Returns a copy of this item stack.
     */
    clone(): ItemStack;
    /**
     * @remarks
     * 获取该物品在冒险模式下可破坏的方块类型列表。
     *
     * Get the list of block types this item can break in Adventure
     * mode.
     *
     * @worldMutation
     *
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * 获取该物品在冒险模式下可放置于其上的方块类型列表。
     *
     * Get the list of block types this item can be placed on in
     * Adventure mode.
     *
     * @worldMutation
     *
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * 获取物品堆的某个组件（表示附加功能）。
     *
     * Gets a component (that represents additional capabilities)
     * for an item stack.
     *
     * @param componentId
     * 组件的标识符（例如 'minecraft:food'）。若未指定命名空间
     * 前缀，则默认使用 'minecraft:'。可用的组件 ID 包括
     * {@link ItemComponentTypes} 枚举中的组件，以及通过
     * {@link ItemComponentRegistry} 注册的自定义组件 ID。
     *
     * The identifier of the component (e.g., 'minecraft:food'). If
     * no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs are those in the {@link
     * ItemComponentTypes} enum and custom component IDs registered
     * with the {@link ItemComponentRegistry}.
     * @returns
     * 若该组件存在于物品堆上则返回该组件，否则返回 undefined。
     *
     * Returns the component if it exists on the item stack,
     * otherwise undefined.
     * @seeExample giveHurtDiamondSword.ts
     */
    getComponent<T extends string>(componentId: T): ItemComponentReturnType<T> | undefined;
    /**
     * @remarks
     * 返回该物品堆上存在的所有脚本组件。
     *
     * Returns all scripting components that are present on this
     * item stack.
     *
     */
    getComponents(): ItemComponent[];
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
     * 返回该属性的值，若属性尚未设置则返回 undefined。
     *
     * Returns the value for the property, or undefined if the
     * property has not been set.
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 返回已在该实体上使用的可用动态属性标识符集合。
     *
     * Returns the available set of dynamic property identifiers
     * that have been used on this entity.
     *
     * @returns
     * 一个字符串数组，包含该实体上已设置的动态属性。
     *
     * A string array of the dynamic properties set on this entity.
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 返回当前为该实体存储的所有动态属性的总大小（以字节为
     * 单位）。这包括键和值两者的大小。该值可用于诊断性能警告
     * 迹象——例如，若某个实体关联了数兆字节的动态属性，它在
     * 各种设备上加载时可能会很慢。
     *
     * Returns the total size, in bytes, of all the dynamic
     * properties that are currently stored for this entity. This
     * includes the size of both the key and the value.  This can
     * be useful for diagnosing performance warning signs - if, for
     * example, an entity has many megabytes of associated dynamic
     * properties, it may be slow to load on various devices.
     *
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 返回物品堆的 lore 值——一个次要显示字符串。
     *
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * lore 行的数组。若该物品没有 lore，则返回空数组。
     *
     * An array of lore lines. If the item does not have lore,
     * returns an empty array.
     */
    getLore(): string[];
    /**
     * @remarks
     * 返回物品堆的 lore 值——一个次要显示字符串。字符串类型的
     * lore 行会被转换为 {@link RawMessage} 并置于 {@link
     * RawMessage.text} 之下。
     *
     * Returns the lore value - a secondary display string - for an
     * ItemStack. String lore lines will be converted to a {@link
     * RawMessage} and put under {@link RawMessage.text}.
     *
     * @returns
     * lore 行的数组。若该物品没有 lore，则返回空数组。
     *
     * An array of lore lines. If the item does not have lore,
     * returns an empty array.
     */
    getRawLore(): RawMessage[];
    /**
     * @remarks
     * 返回与该物品堆关联的标签集合。
     *
     * Returns a set of tags associated with this item stack.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * 若指定组件存在于该物品堆上，则返回 true。
     *
     * Returns true if the specified component is present on this
     * item stack.
     *
     * @param componentId
     * 要获取的组件的标识符（例如 'minecraft:food'）。若未指定
     * 命名空间前缀，则默认使用 'minecraft:'。
     *
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * 检查该物品堆是否关联了特定标签。
     *
     * Checks whether this item stack has a particular tag
     * associated with it.
     *
     * @param tag
     * 要搜索的标签。
     *
     * Tag to search for.
     * @returns
     * 若该物品堆关联了此标签则返回 true，否则返回 false。
     *
     * True if the Item Stack has the tag associated with it, else
     * false.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回该物品堆是否可与给定的 `itemStack` 堆叠。这通过比较
     * 物品类型以及与物品堆关联的任何自定义数据和属性来确定。
     * 每个物品堆的数量不在考虑范围内，但对于不可堆叠的物品，
     * 此方法始终返回 false。
     *
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration, but for non-stackable items this will always
     * return false.
     *
     * @param itemStack
     * 用于检查堆叠兼容性的物品堆。
     *
     * ItemStack to check stacking compatibility with.
     * @returns
     * 若该物品堆可与传入的 itemStack 堆叠则返回 true。对于不可
     * 堆叠的物品返回 false。
     *
     * True if the Item Stack is stackable with the itemStack
     * passed in. False for non-stackable items.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 版本安全的物品匹配检查方式。
     *
     * Version safe way of checking if an item matches.
     *
     * @param itemName
     * 物品的标识符。
     *
     * Identifier of the item.
     * @param states
     * 仅适用于方块。可选的一组状态用于比较。若未指定 states，
     * 则匹配将在更宽泛的类型集合上进行检查。
     *
     *  Applicable only for blocks. An optional set of states to
     * compare against. If states is not specified, matches checks
     * against the set of types more broadly.
     * @returns
     * 返回一个布尔值，表示指定物品是否匹配。
     *
     * Returns a boolean whether the specified item matches.
     */
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks
     * 该物品在冒险模式下可破坏的方块类型列表。方块名称会显示
     * 在物品的提示信息中。将值设置为 undefined 会清空该列表。
     *
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * @worldMutation
     *
     * @param blockIdentifiers
     * 该物品可破坏的方块类型的字符串列表。
     *
     * String list of block types that the item can destroy.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @seeExample giveDestroyRestrictedPickaxe.ts
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 该物品在冒险模式下可放置于其上的方块类型列表。这仅适用于
     * 方块物品。方块名称会显示在物品的提示信息中。将值设置为
     * undefined 会清空该列表。
     *
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * @worldMutation
     *
     * @param blockIdentifiers
     * 该物品可放置于其上的方块类型的字符串列表。
     *
     * String list of block types that the item can be placed on.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @seeExample givePlaceRestrictedGoldBlock.ts
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 一次性设置多个动态属性及其对应的值。
     *
     * Sets multiple dynamic properties with specific values.
     *
     * @param values
     * 要设置的动态属性的键值对 Record。若数据值为 null，则会
     * 移除该属性。
     *
     * A Record of key value pairs of the dynamic properties to
     * set. If the data value is null, it will remove that property
     * instead.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    /**
     * @remarks
     * 将指定属性设置为某个值。注意：此函数仅对不可堆叠的物品
     * 有效。
     *
     * Sets a specified property to a value. Note: This function
     * only works with non-stackable items.
     *
     * @param identifier
     * 属性标识符。
     *
     * The property identifier.
     * @param value
     * 要设置的属性的数据值。若值为 null，则会移除该属性。
     *
     * Data value of the property to set. If the value is null, it
     * will remove the property instead.
     * @throws
     * Throws if the item stack is stackable.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 设置物品堆的 lore 值——一个次要显示字符串。若设置为空
     * 字符串或 undefined，则会清空 lore 列表。
     *
     * Sets the lore value - a secondary display string - for an
     * ItemStack. The lore list is cleared if set to an empty
     * string or undefined.
     *
     * @worldMutation
     *
     * @param loreList
     * lore 行的列表。列表中每个元素代表新的一行。lore 行的最大
     * 数量为 20。lore 行的最大长度为 50 个字符。
     *
     * List of lore lines. Each element in the list represents a
     * new line. The maximum lore line count is 20. The maximum
     * lore line length is 50 characters.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link Error}
     * @seeExample diamondAwesomeSword.ts
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}
