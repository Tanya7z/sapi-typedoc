/* IMPORT */ import { ProjectileHitEntityAfterEvent } from '..';

/**
 * 管理与弹射物击中实体时相关的回调。
 *
 * Manages callbacks that are connected to when a projectile
 * hits an entity.
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在弹射物击中实体时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a projectile hits
     * an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    /**
     * 移除一个在弹射物击中实体时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a projectile hits
     * an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}
