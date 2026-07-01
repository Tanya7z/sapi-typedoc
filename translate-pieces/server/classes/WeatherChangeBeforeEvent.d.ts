/* IMPORT */ import { WeatherType } from '..';

/**
 * Contains information related to changes in weather in the
 * environment.
 *
 * 包含与环境中天气变化相关的信息。
 */
export class WeatherChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the weather change will be cancelled.
     *
     * 如果设置为 `true`，天气变化将被取消。
     */
    cancel: boolean;
    /**
     * @remarks
     * Sets the duration of the new weather (in ticks).
     *
     * 设置新天气的持续时间（以刻为单位）。
     */
    duration: number;
    /**
     * @remarks
     * The type of weather that will be applied.
     *
     * 将应用的天气类型。
     */
    newWeather: WeatherType;
    /**
     * @remarks
     * The type of weather that it was prior to the event being
     * fired.
     *
     * 事件触发之前的天气类型。
     */
    readonly previousWeather: WeatherType;
}
