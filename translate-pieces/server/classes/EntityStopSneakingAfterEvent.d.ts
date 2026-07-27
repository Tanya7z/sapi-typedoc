/* IMPORT */ import { Entity } from '..';

/**
 * 包含实体停止潜行后的相关数据。
 *
 * Contains data related to an entity after it stops sneaking.
 */
export class EntityStopSneakingAfterEvent {
    private constructor();
    readonly entity: Entity;
}
