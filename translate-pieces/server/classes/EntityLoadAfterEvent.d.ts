/* IMPORT */ import { Entity } from '..';

/**
 * 包含实体已加载后的相关数据。
 *
 * Contains data related to an entity after it has been loaded.
 */
export class EntityLoadAfterEvent {
    private constructor();
    readonly entity: Entity;
}
