/* IMPORT */ import { EntityFilter } from '..';

/**
 * 用于过滤容器访问源的选项。
 *
 * Options for use when filtering container access sources.
 */
export interface ContainerAccessSourceFilter {
    /**
     * @remarks
     * 访问容器的源实体的过滤选项。
     *
     * Filter options for the source entity accessing the
     * container.
     *
     */
    entityFilter?: EntityFilter;
}
