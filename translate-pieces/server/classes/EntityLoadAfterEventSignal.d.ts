/* IMPORT */ import { EntityLoadAfterEvent } from '..';

/**
 * 管理与实体加载后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is loaded.
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体加载后被调用。
     *
     * Adds a callback that will be called after an entity is loaded.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体加载后不再被调用。
     *
     * Removes a callback from being called after an entity is loaded.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}
