/* IMPORT */ import { ContainerAccessSource, Entity } from '..';

/**
 * 包含关于特定实体容器被关闭的信息。
 *
 * Contains information regarding a specific entity container
 * being closed.
 */
export class EntityContainerClosedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 实体容器被关闭的来源。
     *
     * The source of the entity container being closed.
     *
     */
    readonly closeSource: ContainerAccessSource;
    readonly entity: Entity;
}
