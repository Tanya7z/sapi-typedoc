/* IMPORT */ import { Entity, EntityInitializationCause } from '..';

/**
 * 包含实体生成后的相关数据。
 *
 * Contains data related to an entity after it is spawned.
 */
export class EntitySpawnAfterEvent {
    private constructor();
    readonly cause: EntityInitializationCause;
    readonly entity: Entity;
}
