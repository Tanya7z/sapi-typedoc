/* IMPORT */ import { PressurePlatePushAfterEvent } from '..';

/**
 * 管理连接到压力板按下事件的回调。
 *
 * Manages callbacks that are connected to when a pressure plate is pushed.
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在压力板按下时调用的回调。
     *
     * Adds a callback that will be called when a pressure plate is pushed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在压力板按下时调用的回调。
     *
     * Removes a callback from being called when a pressure plate is pushed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}
