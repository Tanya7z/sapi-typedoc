/* IMPORT */ import { EntityTamedAfterEvent, EntityEventOptions } from '..';

/**
 * 管理与实体被驯服后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is tamed.
 */
export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被驯服后被调用。
     *
     * Adds a callback that will be called after an entity is tamed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityTamedAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被驯服后不再被调用。
     *
     * Removes a callback from being called after an entity is tamed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}
