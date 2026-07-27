/* IMPORT */ import { Entity, EntityDamageCause } from '..';

/**
 * 提供关于伤害如何应用于实体的信息。
 *
 * Provides information about how damage has been applied to an
 * entity.
 */
export interface EntityDamageSource {
    /**
     * @remarks
     * 伤害的原因枚举。
     *
     * Cause enumeration of damage.
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * 可选的造成伤害的实体。
     *
     * Optional entity that caused the damage.
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * 可能造成伤害的可选抛射物。
     *
     * Optional projectile that may have caused damage.
     *
     */
    damagingProjectile?: Entity;
}
