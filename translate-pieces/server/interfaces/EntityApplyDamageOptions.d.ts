/* IMPORT */ import { Entity, EntityDamageCause } from '..';

/**
 * 伤害事件的附加描述和元数据。
 *
 * Additional descriptions and metadata for a damage event.
 */
export interface EntityApplyDamageOptions {
    /**
     * @remarks
     * 伤害的底层原因。
     *
     * Underlying cause of the damage.
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
}
