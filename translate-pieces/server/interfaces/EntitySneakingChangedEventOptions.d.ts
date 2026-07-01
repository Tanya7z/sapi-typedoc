/* IMPORT */ import { EntityFilter } from '..';

/**
 * @beta
 * 用于过滤实体开始潜行和停止潜行事件的选项。
 *
 * Options used to filter entity start sneaking and stop
 * sneaking events.
 */
export interface EntitySneakingChangedEventOptions {
    entityFilter?: EntityFilter;
}
