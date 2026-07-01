/* IMPORT */ import { EntityContainerClosedAfterEvent } from '..';

/**
 * 管理与实体容器被关闭后相关的回调。
 *
 * Manages callbacks that are connected to after an entity container is closed.
 */
export class EntityContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体容器被关闭后调用。
     *
     * Adds a callback that will be called after an entity container is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): (arg0: EntityContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体容器被关闭后不再被调用。
     *
     * Removes a callback from being called after an entity container is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): void;
}
