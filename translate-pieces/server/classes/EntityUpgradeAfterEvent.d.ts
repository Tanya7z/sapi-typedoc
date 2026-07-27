/* IMPORT */ import { Entity } from '..';

/**
 * 包含实体升级后的相关数据。
 *
 * Contains data related to an entity after it has been upgraded.
 */
export class EntityUpgradeAfterEvent {
    private constructor();
    readonly entity: Entity;
}
