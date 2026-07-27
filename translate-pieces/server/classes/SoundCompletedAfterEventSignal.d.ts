/* IMPORT */ import { SoundCompletedAfterEvent } from '..';

/**
 * @beta
 * 管理当被追踪声音的声明时长结束时触发的回调。
 *
 * Manages callbacks that are invoked when a tracked sound's
 * declared duration elapses.
 */
export class SoundCompletedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当被追踪声音的声明时长结束时将被调用。
     *
     * Adds a callback that will be invoked when a tracked sound's
     * declared duration elapses.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: SoundCompletedAfterEvent) => void): (arg0: SoundCompletedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个先前注册的、在追踪声音声明时长结束时调用的回调。
     *
     * Removes a callback from being invoked when a tracked sound's
     * declared duration elapses.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: SoundCompletedAfterEvent) => void): void;
}
