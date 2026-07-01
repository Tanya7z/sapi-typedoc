/* IMPORT */ import { Entity } from '..';

/**
 * 包含实体被移除后的相关数据。
 *
 * Contains data related to an entity after it is removed.
 */
export class EntityRemoveAfterEvent {
    private constructor();
    readonly removedEntity: Entity;
    readonly removedEntityId: string;
    readonly removedEntityTypeId: string;
}
