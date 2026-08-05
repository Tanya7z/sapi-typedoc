/* IMPORT */ import { ButtonPushAfterEvent } from '..';

/**
 * 管理与按钮被按下时相关的回调。
 * @seeExample buttonPushEvent.ts
 */
export class ButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在按钮被按下时调用的回调。
     * 
     * Adds a callback that will be called when a button is pushed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在按钮被按下时调用的回调。
     * 
     * Removes a callback from being called when a button is
     * pushed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}
