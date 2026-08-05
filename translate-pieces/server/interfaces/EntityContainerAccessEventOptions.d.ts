/* IMPORT */ import { ContainerAccessSourceFilter, EntityFilter } from '..';

/**
 * 用于过滤实体容器访问事件的选项。
 *
 * Options used to filter entity container access events.
 */
export interface EntityContainerAccessEventOptions {
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
     * 如果存在，将过滤哪些实体容器可以触发该事件。
     *
     * If present will filter which entity containers can trigger
     * the event.
     *
     */
    entityFilter?: EntityFilter;
}
