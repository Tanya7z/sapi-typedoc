/* IMPORT */ import { EntityFilter } from '..';

/**
 * @beta
 * 包含过滤实体驯服事件的选项。
 *
 * Contains options for filtering entity tamed events.
 */
export interface EntityTamedEventFilter {
    entityFilter?: EntityFilter;
    tamingEntityFilter?: EntityFilter;
}
