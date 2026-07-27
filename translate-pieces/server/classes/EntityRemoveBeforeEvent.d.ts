/* IMPORT */ import { Entity } from '..';

/**
 * 包含实体被移除前的相关数据。
 *
 * Contains data related to an entity before it is removed.
 */
export class EntityRemoveBeforeEvent {
    private constructor();
    readonly removedEntity: Entity;
    readonly removedEntityId: string;
    readonly removedEntityTypeId: string;
}
