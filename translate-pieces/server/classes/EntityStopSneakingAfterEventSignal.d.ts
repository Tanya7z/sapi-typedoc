/* IMPORT */ import { EntityStopSneakingAfterEvent } from '..';

/**
 * 管理与实体停止潜行后相关的回调。
 *
 * Manages callbacks that are connected to after an entity stops sneaking.
 */
export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体停止潜行后被调用。
     *
     * Adds a callback that will be called after an entity stops sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体停止潜行后不再被调用。
     *
     * Removes a callback from being called after an entity stops sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}
