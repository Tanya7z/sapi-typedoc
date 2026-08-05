/**
 * 提供 Minecraft 一天中常见时段的数值。
 *
 * Provides numeric values for common periods in the Minecraft
 * day.
 */
export enum TimeOfDay {
    /**
     * @remarks
     * 将时间设置为一天的开始，在 Minecraft 中对应时间 1,000（相当于早上 7 点）。
     *
     * Sets the time to the start of the day, which is time of the
     * day 1,000 (or the equivalent of 7am) in Minecraft.
     *
     */
    Day = 1000,
    /**
     * @remarks
     * 将时间设置为正午，在 Minecraft 中对应时间 6,000。
     *
     * Sets the time to noon, which is time of the day 6,000 in
     * Minecraft.
     *
     */
    Noon = 6000,
    /**
     * @remarks
     * 将时间设置为日落，在 Minecraft 中对应时间 12,000（相当于下午 6 点）。
     *
     * Sets the time to sunset, which is time of the day 12,000 (or
     * the equivalent of 6pm) in Minecraft.
     *
     */
    Sunset = 12000,
    /**
     * @remarks
     * 将时间设置为夜晚，在 Minecraft 中对应时间 13,000（相当于晚上 7:00）。
     *
     * Sets the time to night, which is time of the day 13,000 (or
     * the equivalent of 7:00pm) in Minecraft.
     *
     */
    Night = 13000,
    /**
     * @remarks
     * 将时间设置为午夜，在 Minecraft 中对应时间 18,000（相当于凌晨 12:00）。
     *
     * Sets the time to midnight, which is time of the day 18,000
     * (or the equivalent of 12:00am) in Minecraft.
     *
     */
    Midnight = 18000,
    /**
     * @remarks
     * 将时间设置为日出，在 Minecraft 中对应时间 23,000（相当于早上 5 点）。
     *
     * Sets the time to sunrise, which is time of the day 23,000
     * (or the equivalent of 5am) in Minecraft.
     *
     */
    Sunrise = 23000,
}
