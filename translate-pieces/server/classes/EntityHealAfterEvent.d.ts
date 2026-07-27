/* IMPORT */ import { Entity, EntityHealSource } from '..';

/**
 * 包含实体在被治愈后的相关数据。
 *
 * Contains data related to an entity after it has been healed.
 */
export class EntityHealAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被治愈的实体。
     *
     * The entity that was healed.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 治愈的来源。
     *
     * The source of the healing.
     *
     */
    readonly healSource: EntityHealSource;
    /**
     * @remarks
     * 实体恢复的生命值量。
     *
     * The amount of health the entity regained.
     *
     */
    readonly healAmount: number;
}
