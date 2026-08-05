/* IMPORT */ import { Entity } from '..';

/**
 * 包含被击中的实体的附加信息。
 *
 * Contains additional information about an entity that was
 * hit.
 */
export interface EntityHitInformation {
    /**
     * @remarks
     * 被击中的实体。
     *
     * Entity that was hit.
     *
     */
    entity?: Entity;
}
