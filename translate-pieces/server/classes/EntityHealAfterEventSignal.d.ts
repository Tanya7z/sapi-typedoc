/* IMPORT */ import { EntityHealAfterEvent, EntityEventOptions } from '..';

/**
 * 管理与实体被治愈后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is healed.
 */
export class EntityHealAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被治愈后调用。
     *
     * Adds a callback that will be called after an entity is healed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHealAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHealAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被治愈后不再被调用。
     *
     * Removes a callback from being called after an entity is healed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}
