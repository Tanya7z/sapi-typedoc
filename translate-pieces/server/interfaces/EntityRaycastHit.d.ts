/* IMPORT */ import { Entity } from '..';

/**
 * 包含实体射线投射命中结果的信息。
 *
 * Contains information for entity raycast hit results.
 */
export interface EntityRaycastHit {
    /**
     * @remarks
     * 从射线原点到实体边界的距离。
     *
     * Distance from ray origin to entity bounds.
     *
     */
    distance: number;
    /**
     * @remarks
     * 被击中的实体。
     *
     * Entity that was hit.
     *
     */
    entity: Entity;
}
