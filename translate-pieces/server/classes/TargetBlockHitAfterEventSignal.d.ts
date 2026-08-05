/* IMPORT */ import { TargetBlockHitAfterEvent } from '..';

/**
 * Manages callbacks that are connected to when a target block
 * is hit.
 *
 * 管理与标靶方块被击中时相关的回调。
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a target block is
     * hit.
     *
     * 添加一个回调，当目标方块被击中时调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a target block is
     * hit.
     *
     * 移除一个在目标方块被击中时调用的回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}
