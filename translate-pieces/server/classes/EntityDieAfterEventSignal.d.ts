/* IMPORT */ import { EntityDieAfterEvent, EntityEventOptions } from '..';

/**
 * 管理与实体死亡后相关的回调。
 *
 * Manages callbacks that are connected to after an entity dies.
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体死亡后被调用。
     *
     * Adds a callback that will be called after an entity dies.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityDieAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体死亡后不再被调用。
     *
     * Removes a callback from being called after an entity dies.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}
