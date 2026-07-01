/* IMPORT */ import { Entity } from '..';

/**
 * 通过抛射物造成伤害时的额外选项。
 *
 * Additional options for when damage has been applied via a
 * projectile.
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * @remarks
     * 可选的发射抛射物的实体。
     *
     * Optional entity that fired the projectile.
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * 造成伤害的抛射物。
     *
     * Projectile that caused damage.
     *
     */
    damagingProjectile: Entity;
}
