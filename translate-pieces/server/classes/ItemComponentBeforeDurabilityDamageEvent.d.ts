/* IMPORT */ import { Entity, ItemStack } from '..';

/**
 * 包含物品因击中实体而受损前的相关信息。
 *
 * Contains information regarding an item before it is damaged
 * from hitting an entity.
 */
export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    /**
     * @remarks
     * 发起攻击的实体。
     *
     * The attacking entity.
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * 事件发生时对物品耐久度造成的损耗。
     *
     * The damage applied to the item's durability when the event
     * occurs.
     *
     */
    durabilityDamage: number;
    /**
     * @remarks
     * 被击中的实体。
     *
     * The entity being hit.
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * 用于击中实体的物品堆。
     *
     * The item stack used to hit the entity.
     *
     */
    itemStack?: ItemStack;
}
