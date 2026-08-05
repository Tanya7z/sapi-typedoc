/* IMPORT */ import { Enchantment, EnchantmentLevelOutOfBoundsError, EnchantmentSlot, EnchantmentType, EnchantmentTypeNotCompatibleError, EnchantmentTypeUnknownIdError, ItemComponent } from '..';

/**
 * 当此组件存在于物品上时，表示该物品可以被附魔。
 *
 * When present on an item, this item can have enchantments
 * applied to it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = 'minecraft:enchantable';
    /**
     * @remarks
     * 向物品堆添加一个附魔。
     *
     * Adds an enchantment to the item stack.
     *
     * @worldMutation
     *
     * @param enchantment
     * 要添加的附魔接口。
     *
     * The enchantment interface to be added.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if the enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: Exception
     * thrown if the enchantment is not compatible with the item
     * stack.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /**
     * @remarks
     * 向物品堆添加一组附魔。
     *
     * Adds a list of enchantments to the item stack.
     *
     * @worldMutation
     *
     * @param enchantments
     * 要添加的附魔列表。
     *
     * The list of enchantments to be added.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if any
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if any enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: Exception
     * thrown if any enchantment is not compatible with the item
     * stack.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /**
     * @remarks
     * 检查某个附魔是否可以添加到物品堆。
     *
     * Checks whether an enchantment can be added to the item
     * stack.
     *
     * @param enchantment
     * 要添加的附魔接口。
     *
     * The enchantment interface to be added.
     * @returns
     * 若该附魔可以添加到物品堆，则返回 true。
     *
     * Returns true if the enchantment can be added to the item
     * stack.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if the enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * 从物品堆获取指定类型的附魔。
     *
     * Gets the enchantment of a given type from the item stack.
     *
     * @param enchantmentType
     * 要获取的附魔类型。
     *
     * The enchantment type to get.
     * @returns
     * 若该附魔存在于物品堆上，则返回该附魔。
     *
     * Returns the enchantment if it exists on the item stack.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * 获取物品堆上的所有附魔。
     *
     * Gets all enchantments on the item stack.
     *
     * @returns
     * 返回物品堆上的附魔列表。
     *
     * Returns a list of enchantments on the item stack.
     * @throws This function can throw errors.
     */
    getEnchantments(): Enchantment[];
    /**
     * @remarks
     * 检查物品堆是否具有指定的附魔类型。
     *
     * Checks whether an item stack has a given enchantment type.
     *
     * @param enchantmentType
     * 要检查的附魔类型。
     *
     * The enchantment type to check for.
     * @returns
     * 若物品堆具有该附魔类型，则返回 true。
     *
     * Returns true if the item stack has the enchantment type.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * 移除应用于此物品堆的所有附魔。
     *
     * Removes all enchantments applied to this item stack.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * 移除指定类型的附魔。
     *
     * Removes an enchantment of the given type.
     *
     * @worldMutation
     *
     * @param enchantmentType
     * 要移除的附魔类型。
     *
     * The enchantment type to remove.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}
