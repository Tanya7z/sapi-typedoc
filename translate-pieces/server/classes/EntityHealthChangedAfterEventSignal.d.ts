/* IMPORT */ import { EntityHealthChangedAfterEvent, EntityEventOptions } from '..';

/**
 * 管理与实体生命值变化时相关的回调。
 *
 * Manages callbacks that are connected to when an entity's health changes.
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体生命值变化时被调用。
     *
     * Adds a callback that will be called when an entity's health changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体生命值变化时不再被调用。
     *
     * Removes a callback from being called when an entity's health changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}
