/* IMPORT */ import { ExplosionBeforeEvent } from '..';

/**
 * 管理与爆炸发生前相关的回调。
 *
 * Manages callbacks that are connected to before an explosion
 * occurs.
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在爆炸发生前被调用。该回调可以选择性更改或取消爆炸行为。
     *
     * Adds a callback that will be called when before an explosion
     * occurs. The callback can optionally change or cancel
     * explosion behavior.
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
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在爆炸发生前不再被调用。
     *
     * Removes a callback from being called from before when an
     * explosion would occur.
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
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}
