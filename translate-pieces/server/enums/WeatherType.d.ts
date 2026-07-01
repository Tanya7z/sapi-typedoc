/**
 * 用于指定世界中天气状况的类型。
 *
 * Used to specify the type of weather condition within the
 * world.
 */
export enum WeatherType {
    /**
     * @remarks
     * 指定晴天天气状况。
     *
     * Specifies a clear weather condition.
     *
     */
    Clear = 'Clear',
    /**
     * @remarks
     * 指定雨天天气状况。
     *
     * Specifies a rain weather condition.
     *
     */
    Rain = 'Rain',
    /**
     * @remarks
     * 指定雷雨天气状况。
     *
     * Specifies a rain and thunder weather condition.
     *
     */
    Thunder = 'Thunder',
}
