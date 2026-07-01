/**
 * 可通过 ItemStack.getComponent 函数访问的物品组件类型。
 *
 * The types of item components that are accessible via
 * function ItemStack.getComponent.
 */
export enum ItemComponentTypes {
    /**
     * @beta
     */
    BlockDynamicProperties = 'minecraft:block_actor_dynamic_properties',
    /**
     * @remarks
     * minecraft:book 组件。
     *
     * The minecraft:book component.
     *
     */
    Book = 'minecraft:book',
    Compostable = 'minecraft:compostable',
    /**
     * @remarks
     * minecraft:cooldown 组件。
     *
     * The minecraft:cooldown component.
     *
     */
    Cooldown = 'minecraft:cooldown',
    /**
     * @remarks
     * minecraft:durability 组件。
     *
     * The minecraft:durability component.
     *
     */
    Durability = 'minecraft:durability',
    Dyeable = 'minecraft:dyeable',
    /**
     * @remarks
     * minecraft:enchantable 组件。
     *
     * The minecraft:enchantable component.
     *
     */
    Enchantable = 'minecraft:enchantable',
    /**
     * @remarks
     * minecraft:food 组件。
     *
     * The minecraft:food component.
     *
     */
    Food = 'minecraft:food',
    Inventory = 'minecraft:inventory',
    Potion = 'minecraft:potion',
}
