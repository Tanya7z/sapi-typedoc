/* IMPORT */ import { EntityStartSneakingAfterEvent } from '..';

/**
 * 管理与实体开始潜行后相关的回调。
 *
 * Manages callbacks that are connected to after an entity starts sneaking.
 */
export class EntityStartSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体开始潜行后被调用。
     *
     * Adds a callback that will be called after an entity starts sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): (arg0: EntityStartSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体开始潜行后不再被调用。
     *
     * Removes a callback from being called after an entity starts sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): void;
}
