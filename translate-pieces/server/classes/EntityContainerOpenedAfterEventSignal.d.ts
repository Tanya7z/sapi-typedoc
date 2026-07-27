/* IMPORT */ import { EntityContainerOpenedAfterEvent } from '..';

/**
 * 管理与实体容器被打开后相关的回调。
 *
 * Manages callbacks that are connected to after an entity container is opened.
 */
export class EntityContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体容器被打开后调用。
     *
     * Adds a callback that will be called after an entity container is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): (arg0: EntityContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体容器被打开后不再被调用。
     *
     * Removes a callback from being called after an entity container is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): void;
}
