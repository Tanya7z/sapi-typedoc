/* IMPORT */ import { PressurePlatePopAfterEvent } from '..';

/**
 * 管理与压力板弹起时相关的回调。
 *
 * Manages callbacks that are connected to when a pressure
 * plate is popped.
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在压力板弹起时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * popped.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * 移除一个在压力板弹起时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is popped.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}
