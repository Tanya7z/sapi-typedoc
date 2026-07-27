/* IMPORT */ import { EntityFilter } from '..';

/**
 * @rc
 * 包含用于筛选实体已被驯服事件的选项。
 *
 * Contains options for filtering entity tamed events.
 */
export interface EntityTamedEventOptions {
    entityFilter?: EntityFilter;
    tamingEntityFilter?: EntityFilter;
}
