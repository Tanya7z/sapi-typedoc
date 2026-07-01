/* IMPORT */ import { EntityFilter, ItemFilter } from '..';

/**
 * 传递给 {@link EntityItemDropAfterEventSignal.subscribe} 的接口，用于过滤哪些事件会传递给所提供的回调函数。
 *
 * An interface that is passed into {@link
 * EntityItemDropAfterEventSignal.subscribe} that filters out
 * which events are passed to the provided callback.
 */
export interface EntityItemDropEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match.
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，则仅当事件中的物品匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if an item
     * in the event matches.
     *
     */
    itemFilter?: ItemFilter;
}
