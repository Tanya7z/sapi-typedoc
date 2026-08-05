/* IMPORT */ import { Dimension, Entity, EntityHitInformation, Vector3 } from '..';

/**
 * 包含与弹射物击中实体相关的信息。
 *
 * Contains information related to a projectile hitting an
 * entity.
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * 弹射物击中发生的维度。
     *
     * @remarks
     * Dimension where this projectile hit took place.
     *
     */
    readonly dimension: Dimension;
    /**
     * 弹射物击中实体时的方向向量。
     *
     * @remarks
     * Direction vector of the projectile as it hit an entity.
     *
     */
    readonly hitVector: Vector3;
    /**
     * 弹射物击中的位置。
     *
     * @remarks
     * Location where the projectile hit occurred.
     *
     */
    readonly location: Vector3;
    /**
     * 击中实体的弹射物实体。
     *
     * @remarks
     * Entity for the projectile that hit an entity.
     *
     */
    readonly projectile: Entity;
    /**
     * 发射弹射物的可选源实体。
     *
     * @remarks
     * Optional source entity that fired the projectile.
     *
     */
    readonly source?: Entity;
    /**
     * 包含有关被击中的实体的附加信息。
     *
     * @remarks
     * Contains additional information about an entity that was
     * hit.
     *
     * @worldMutation
     *
     */
    getEntityHit(): EntityHitInformation;
}
