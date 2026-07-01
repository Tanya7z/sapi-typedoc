/* IMPORT */ import { WeatherChangeAfterEvent } from '..';

/**
 * Manages callbacks that are connected to weather changing.
 *
 * 管理与天气变化相关的回调。
 */
export class WeatherChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when weather changes.
     *
     * 添加一个回调，当天气变化时调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: WeatherChangeAfterEvent) => void): (arg0: WeatherChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when weather changes.
     *
     * 移除一个在天气变化时调用的回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WeatherChangeAfterEvent) => void): void;
}
