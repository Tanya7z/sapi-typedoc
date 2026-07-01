/**
 * @beta
 * 提供声明了时长的声音的时长和播放信息。
 *
 * Provides duration and playback information for a sound whose
 * definition declares a duration.
 */
export class SoundDurationInfo {
    private constructor();
    /**
     * @remarks
     * 获取声音的总时长（以秒为单位）。
     *
     * Gets the total duration of the sound in seconds.
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取声音是否仍被追踪。
     *
     * Gets whether the sound is still being tracked.
     *
     */
    readonly isActive: boolean;
    /**
     * @remarks
     * 返回声音开始播放以来的已播放时间（以秒为单位）。
     *
     * Returns the elapsed playback time of the sound, in seconds,
     * since it started playing.
     *
     * @worldMutation
     *
     * @returns
     * 已播放的时间（以秒为单位）。
     *
     * Elapsed playback time in seconds.
     */
    getPlaybackPosition(): number;
}
