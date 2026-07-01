/* IMPORT */ import { BlockHitInformation, Dimension, Entity, Vector3 } from '..';

/**
 * 包含与抛射物击中方块相关的信息。
 *
 * Contains information related to a projectile hitting a block.
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此抛射物撞击发生的维度。
     *
     * Dimension where this projectile hit took place.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 抛射物击中方块时的方向向量。
     *
     * Direction vector of the projectile as it hit a block.
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 抛射物撞击发生的位置。
     *
     * Location where the projectile hit occurred.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 击中方块的抛射物实体。
     *
     * Entity for the projectile that hit a block.
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 发射抛射物的可选源实体。
     *
     * Optional source entity that fired the projectile.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 包含关于抛射物击中的方块的附加信息。
     *
     * Contains additional information about the block that was hit by the projectile.
     *
     * @worldMutation
     *
     */
    getBlockHit(): BlockHitInformation;
}
