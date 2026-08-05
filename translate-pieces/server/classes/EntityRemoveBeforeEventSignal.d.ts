/* IMPORT */ import { EntityRemoveBeforeEvent } from '..';

/**
 * 管理与实体被移除前相关的回调。
 *
 * Manages callbacks that are connected to before an entity is removed.
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被移除前调用。
     *
     * Adds a callback that will be called before an entity is removed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被移除前不再被调用。
     *
     * Removes a callback from being called before an entity is removed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}
