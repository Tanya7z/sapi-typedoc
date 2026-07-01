/* IMPORT */ import { Entity } from '..';

/**
 * 包含实体撞击另一个实体后的相关信息。
 *
 * Contains information related to an entity hitting another entity.
 */
export class EntityHitEntityAfterEvent {
    private constructor();
    readonly damagingEntity: Entity;
    readonly hitEntity: Entity;
}
