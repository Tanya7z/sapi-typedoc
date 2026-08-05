/* IMPORT */ import { EntityItemPickupAfterEvent, EntityItemPickupEventOptions } from '..';

/**
 * 管理与实体已拾取物品时相关的回调。
 *
 * Manages callbacks that are connected to when an entity has
 * picked up items.
 */
export class EntityItemPickupAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体已拾取物品时被调用的回调。
     *
     * Adds a callback that will be called when an entity has
     * picked up items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityItemPickupAfterEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体已拾取物品时被调用的回调。
     *
     * Removes a callback from being called when an entity has
     * picked up items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityItemPickupAfterEvent) => void): void;
}
