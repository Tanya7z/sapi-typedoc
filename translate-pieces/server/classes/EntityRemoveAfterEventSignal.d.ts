/* IMPORT */ import { EntityRemoveAfterEvent, EntityEventOptions } from '..';

/**
 * 管理与实体被移除后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is removed.
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被移除后被调用。
     *
     * Adds a callback that will be called after an entity is removed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityRemoveAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被移除后不再被调用。
     *
     * Removes a callback from being called after an entity is removed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}
