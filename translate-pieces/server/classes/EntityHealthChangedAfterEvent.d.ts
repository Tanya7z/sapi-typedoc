/* IMPORT */ import { Entity } from '..';

/**
 * 包含与实体生命值变化相关的数据。
 *
 * Contains data related to an entity's health change.
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly newHealth: number;
    readonly oldHealth: number;
}
