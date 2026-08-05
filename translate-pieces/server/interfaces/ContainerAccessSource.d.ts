/* IMPORT */ import { Entity } from '..';

/**
 * 表示容器访问的来源。
 *
 * Represents the source of a container access.
 */
export interface ContainerAccessSource {
    /**
     * @remarks
     * 触发容器访问的实体。
     *
     * The entity that triggered the container access.
     *
     */
    entity?: Entity;
}
