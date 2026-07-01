/* IMPORT */ import { Entity, ItemStack } from '..';

/**
 * 包含与实体已拾取物品相关的信息。
 *
 * Contains information related to an entity having picked up
 * items.
 */
export class EntityItemPickupAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已拾取物品的实体。
     *
     * The entity that has picked up the items.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体已拾取的物品列表。
     *
     * The list of items the entity has picked up.
     *
     */
    readonly items: ItemStack[];
}
