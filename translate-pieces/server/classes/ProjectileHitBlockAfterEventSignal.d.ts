/* IMPORT */ import { ProjectileHitBlockAfterEvent } from '..';

/**
 * 管理与弹射物击中方块时相关的回调。
 *
 * Manages callbacks that are connected to when a projectile
 * hits a block.
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在弹射物击中方块时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a projectile hits a
     * block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * 移除一个在弹射物击中方块时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a projectile hits
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}
