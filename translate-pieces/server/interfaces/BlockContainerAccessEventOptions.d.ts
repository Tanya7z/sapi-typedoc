/* IMPORT */ import { BlockFilter, ContainerAccessSourceFilter } from '..';

/**
 * 用于过滤方块容器访问事件的选项。
 *
 * Options used to filter block container access events.
 */
export interface BlockContainerAccessEventOptions {
    /**
     * @remarks
     * 如果存在，将过滤哪些容器访问源可以触发该事件。
     *
     * If present will filter which container access sources can
     * trigger the event.
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 如果存在，将过滤哪些容器方块可以触发该事件。
     *
     * If present will filter which container blocks can trigger
     * the event.
     *
     */
    blockFilter?: BlockFilter;
}
