/* IMPORT */ import { ContainerAccessSource, Entity } from '..';

/**
 * 包含关于特定实体容器被打开的信息。
 *
 * Contains information regarding a specific entity container
 * being opened.
 */
export class EntityContainerOpenedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 实体容器被打开的来源。
     *
     * The source of the entity container being opened.
     *
     */
    readonly openSource: ContainerAccessSource;
    readonly entity: Entity;
}
