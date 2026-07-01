/* IMPORT */ import { EntityHitBlockAfterEvent, EntityEventOptions } from '..';

/**
 * 管理与实体撞击方块后相关的回调。
 *
 * Manages callbacks that are connected to after an entity hits a block.
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体撞击方块后被调用。
     *
     * Adds a callback that will be called after an entity hits a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHitBlockAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体撞击方块后不再被调用。
     *
     * Removes a callback from being called after an entity hits a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}
