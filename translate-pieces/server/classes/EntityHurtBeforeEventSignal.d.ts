/* IMPORT */ import { EntityHurtBeforeEvent, EntityHurtBeforeEventOptions } from '..';

/**
 * 管理与实体将要受到伤害时相关的回调。
 *
 * Manages callbacks that are connected to when an entity will
 * be hurt.
 */
export class EntityHurtBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体将要受到伤害时被调用的回调。
     *
     * Adds a callback that will be called when an entity will be
     * hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: EntityHurtBeforeEvent) => void,
        options?: EntityHurtBeforeEventOptions,
    ): (arg0: EntityHurtBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在实体将要受到伤害时被调用的回调。
     *
     * Removes a callback from being called when an entity will be
     * hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EntityHurtBeforeEvent) => void): void;
}
