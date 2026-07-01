/* IMPORT */ import { Entity, EntityDamageSource } from '..';

/**
 * 包含与实体受到伤害相关的信息。
 *
 * Contains information related to an entity getting hurt.
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * 描述造成的伤害量。
     *
     * Describes the amount of damage caused.
     *
     */
    readonly damage: number;
    /**
     * @remarks
     * 可能施加此伤害的实体的来源信息。
     *
     * Source information on the entity that may have applied this
     * damage.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 受到伤害的实体。
     *
     * Entity that was hurt.
     *
     */
    readonly hurtEntity: Entity;
}
