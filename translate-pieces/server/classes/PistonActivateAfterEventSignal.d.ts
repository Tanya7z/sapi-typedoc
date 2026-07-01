/* IMPORT */ import { PistonActivateAfterEvent } from '..';

/**
 * 管理与活塞激活相关的回调。
 *
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @seeExample pistonAfterEvent.ts
     */
    subscribe(callback: (arg0: PistonActivateAfterEvent) => void): (arg0: PistonActivateAfterEvent) => void;
    /**
     * 移除在活塞扩展或收缩时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PistonActivateAfterEvent) => void): void;
}
