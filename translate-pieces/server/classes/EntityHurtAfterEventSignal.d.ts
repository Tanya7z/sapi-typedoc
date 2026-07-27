/* IMPORT */ import { EntityHurtAfterEvent, EntityHurtAfterEventOptions } from '..';

/**
 * 管理与实体受到伤害时相关的回调。
 *
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体受到伤害时被调用的回调。
     *
     * Adds a callback that will be called when an entity is hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityHurtAfterEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体受到伤害时被调用的回调。
     *
     * Removes a callback from being called when an entity is hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}
