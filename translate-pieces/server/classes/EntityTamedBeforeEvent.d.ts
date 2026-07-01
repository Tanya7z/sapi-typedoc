/* IMPORT */ import { Entity, Player } from '..';

/**
 * 包含实体被驯服前的相关数据。
 *
 * Contains data related to an entity before it is tamed.
 */
export class EntityTamedBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly entity: Entity;
    readonly player: Player;
}
