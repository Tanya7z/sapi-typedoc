/* IMPORT */ import { LeverActionAfterEvent } from '..';

/**
 * 管理与拉杆移动（激活或停用）相关的回调。
 *
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 * @seeExample leverActionEvent.ts
 */
export class LeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当拉杆被移动（激活或停用）时将被调用。
     *
     * Adds a callback that will be called when a lever is moved
     * (activates or deactivates).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在拉杆被移动（激活或停用）时不再被调用。
     *
     * Removes a callback from being called when a lever is moved
     * (activates or deactivates).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}
