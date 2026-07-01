/* IMPORT */ import { WeatherChangeBeforeEvent } from '..';

/**
 * Manages callbacks that are connected to before weather
 * changing.
 *
 * 管理与天气变化前相关的回调。
 */
export class WeatherChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before weather changes.
     *
     * 添加一个回调，将在天气变化前调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     *
     * 此闭包以受限执行权限调用。
     * @returns
     * Closure that is called with restricted-execution privilege.
     *
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before weather changes.
     *
     * 移除一个在天气变化前调用的回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     *
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}
