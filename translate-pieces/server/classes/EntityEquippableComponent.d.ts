/* IMPORT */ import { ContainerSlot, EntityComponent, EquipmentSlot, InvalidEntityError, ItemStack } from '..';

/**
 * 提供对生物装备槽位的访问。此组件存在于玩家实体上。
 *
 * Provides access to a mob's equipment slots. This component
 * exists on player entities.
 * @seeExample givePlayerElytra.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回拥有者的总护甲等级。
     *
     * Returns the total Armor level of the owner.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly totalArmor: number;
    /**
     * @remarks
     * 返回拥有者的总韧性等级。
     *
     * Returns the total Toughness level of the owner.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly totalToughness: number;
    static readonly componentId = 'minecraft:equippable';
    /**
     * @remarks
     * 获取给定 EquipmentSlot 的已装备物品。
     *
     * Gets the equipped item for the given EquipmentSlot.
     *
     * @param equipmentSlot
     * 装备槽位，例如 `"head"`、`"chest"`、`"offhand"`。
     *
     * The equipment slot. e.g. "head", "chest", "offhand"
     * @returns
     * 返回装备到给定 EquipmentSlot 的物品。如果为空，则返回 `undefined`。
     *
     * Returns the item equipped to the given EquipmentSlot. If
     * empty, returns undefined.
     * @throws This function can throw errors.
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @remarks
     * 获取对应于给定 EquipmentSlot 的 ContainerSlot。
     *
     * Gets the ContainerSlot corresponding to the given
     * EquipmentSlot.
     *
     * @param equipmentSlot
     * 装备槽位，例如 `"head"`、`"chest"`、`"offhand"`。
     *
     * The equipment slot. e.g. "head", "chest", "offhand".
     * @returns
     * 返回对应于给定 EquipmentSlot 的 ContainerSlot。
     *
     * Returns the ContainerSlot corresponding to the given
     * EquipmentSlot.
     * @throws This function can throw errors.
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * 替换给定 EquipmentSlot 中的物品。
     *
     * Replaces the item in the given EquipmentSlot.
     *
     * @worldMutation
     *
     * @param equipmentSlot
     * 装备槽位，例如 `"head"`、`"chest"`、`"offhand"`。
     *
     * The equipment slot. e.g. "head", "chest", "offhand".
     * @param itemStack
     * 要装备的物品。如果为 `undefined`，则清空该槽位。
     *
     * The item to equip. If undefined, clears the slot.
     * @throws This function can throw errors.
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}
