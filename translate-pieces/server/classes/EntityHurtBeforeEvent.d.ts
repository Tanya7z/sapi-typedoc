/* IMPORT */ import { Entity, EntityDamageSource } from '..';

/**
 * 包含与即将受到伤害的实体相关的信息。
 *
 * Contains information related to an entity that will be hurt.
 */
export class EntityHurtBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * 描述将要造成的伤害量。
     *
     * Describes the amount of damage that will be caused.
     *
     */
    damage: number;
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
     * 将要受到伤害的实体。
     *
     * Entity that will be hurt.
     *
     */
    readonly hurtEntity: Entity;
}
