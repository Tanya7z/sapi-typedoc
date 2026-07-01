/* IMPORT */ import { Entity } from '..';

/**
 * 指定用于注册实体数据驱动触发事件时使用的额外过滤器。
 *
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 */
export interface EntityDataDrivenTriggerEventOptions {
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
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的触发事件与此参数中列出的事件之一匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     *
     */
    eventTypes?: string[];
}
