/* IMPORT */ import { EntityHealBeforeEvent } from '..';

/**
 * 管理与实体被治愈前相关的回调。
 *
 * Manages callbacks that are connected to before an entity is healed.
 */
export class EntityHealBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被治愈前调用。
     *
     * Adds a callback that will be called before an entity is healed.
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
     * 以受限执行权限被调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: EntityHealBeforeEvent) => void): (arg0: EntityHealBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被治愈前不再被调用。
     *
     * Removes a callback from being called before an entity is healed.
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
    unsubscribe(callback: (arg0: EntityHealBeforeEvent) => void): void;
}
