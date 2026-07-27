/* IMPORT */ import { Entity } from '..';

/**
 * 包含注册实体事件的可选参数。
 *
 * Contains optional parameters for registering an entity
 * event.
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当实体与此集合中的实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的实体类型与此参数匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
}
