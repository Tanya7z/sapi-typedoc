/* IMPORT */ import { Entity, EntityDamageSource } from '..';

/**
 * 包含与游戏中实体死亡相关的数据。
 *
 * Contains data related to the death of an entity in the game.
 */
export class EntityDieAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果指定，提供关于导致此实体死亡的伤害来源的更多信息。
     *
     * If specified, provides more information on the source of
     * damage that caused the death of this entity.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 现已死亡的实体对象。
     *
     * Now-dead entity object.
     *
     */
    readonly deadEntity: Entity;
}
