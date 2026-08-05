/* IMPORT */ import { Entity, ItemStack } from '..';

/**
 * 包含使用物品击中实体时的相关信息。
 *
 * Contains information regarding when an item is used to hit
 * an entity.
 */
export class ItemComponentHitEntityEvent {
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
     * 此次击打是否命中或产生了任何效果。
     *
     * Whether the hit landed or had any effect.
     *
     */
    readonly hadEffect: boolean;
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
    readonly itemStack?: ItemStack;
}
