/* IMPORT */ import { EntityHitEntityAfterEvent, EntityEventOptions } from '..';

/**
 * 管理与实体撞击另一个实体后相关的回调。
 *
 * Manages callbacks that are connected to after an entity hits another entity.
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体撞击另一个实体后被调用。
     *
     * Adds a callback that will be called after an entity hits another entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHitEntityAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体撞击另一个实体后不再被调用。
     *
     * Removes a callback from being called after an entity hits another entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}
