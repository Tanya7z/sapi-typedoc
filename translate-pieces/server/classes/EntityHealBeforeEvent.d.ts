/* IMPORT */ import { Entity, EntityHealSource } from '..';

/**
 * 包含实体在被治愈前的相关数据。
 *
 * Contains data related to an entity before it is healed.
 */
export class EntityHealBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 `true`，会取消治愈事件。
     *
     * If set to true, cancels the heal event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 被治愈的实体。
     *
     * The entity that is being healed.
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
     * 实体将恢复的生命值量。
     *
     * The amount of health the entity will regain.
     *
     */
    healAmount: number;
}
