/* IMPORT */ import { Entity, Player } from '..';

/**
 * 包含实体被驯服后的相关数据。
 *
 * Contains data related to an entity after it is tamed.
 */
export class EntityTamedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly player: Player;
}
