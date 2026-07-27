/* IMPORT */ import { Entity } from '..';

/**
 * 包含与实体已掉落物品相关的信息。
 *
 * Contains information related to an entity having dropped
 * items.
 */
export class EntityItemDropAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已掉落物品的实体。
     *
     * The entity that has dropped the items.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体已掉落的物品列表。
     *
     * The list of items the entity has dropped.
     *
     */
    readonly items: Entity[];
}
