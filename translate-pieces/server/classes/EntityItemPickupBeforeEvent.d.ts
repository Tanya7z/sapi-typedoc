/* IMPORT */ import { Entity } from '..';

/**
 * 包含与实体将要拾取物品相关的信息。
 *
 * Contains information related to an entity picking up an
 * item.
 */
export class EntityItemPickupBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 `true`，则物品将不会被拾取。
     *
     * If set to true the item will not be picked up.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 将要拾取物品的实体。
     *
     * The entity that will pick up the item.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 将要被拾取的物品。
     *
     * The item that will be picked up.
     *
     */
    readonly item: Entity;
}
