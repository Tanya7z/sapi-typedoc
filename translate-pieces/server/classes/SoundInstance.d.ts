/* IMPORT */ import { Player, SoundDurationInfo } from '..';

/**
 * 表示已播放音效的句柄。在音效播放期间需要通过此句柄来控制音效（例如调用 `stop`、`setVolume`、`setPitch`、`fade` 或 `seekTo`）。无限循环音效（通过 `loop: -1` 启动）会在最后一个 `SoundInstance` 引用被丢弃时自动停止；只要音效需要继续播放，就应保留此句柄。
 *
 * Represents a handle to a sound that has been played. The handle is required to control the sound while it is playing (for example, to call `stop`, `setVolume`, `setPitch`, `fade`, or `seekTo`). Infinitely-looping sounds (started with `loop: -1`) stop automatically when the last `SoundInstance` reference is dropped; retain the handle for as long as the sound should keep playing.
 */
export class SoundInstance {
    private constructor();
    /**
     * @beta
     * @remarks
     * 获取此音效的持续时间和播放信息。
     *
     * Gets duration and playback information for this sound.
     *
     */
    readonly durationInfo?: SoundDurationInfo;
    /**
     * @beta
     * @remarks
     * 此音效实例的唯一标识符。
     *
     * Unique identifier of this sound instance.
     *
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * 获取此音效为其播放的玩家。
     *
     * Gets the player this sound was played for.
     *
     */
    readonly recipient?: Player;
    /**
     * @beta
     * @remarks
     * 获取此实例启动时使用的音效事件标识符。
     *
     * Gets the identifier of the sound event this instance was started with.
     *
     */
    readonly soundEventId: string;
    /**
     * @beta
     * @remarks
     * 将当前音效实例从当前音量渐变为指定音量，持续指定时间。要从静音淡入，请先调用 `setVolume(0.0)`；要淡出，请传入目标音量 `0.0`。
     *
     * Fades this sound instance from its current volume to the target volume over the specified duration. To fade in from silence, call `setVolume(0.0)` first; to fade out, pass a target volume of `0.0`.
     *
     * @worldMutation
     *
     * @param duration
     * 淡变的持续时间（以秒为单位）。必须为非负值。
     *
     * Duration of the fade in seconds. Must be non-negative.
     * Minimum value: 0
     * @param targetVolume
     * 淡变到的目标音量。必须为非负值。
     *
     * Volume to fade to. Must be non-negative.
     * Minimum value: 0
     */
    fade(duration: number, targetVolume: number): void;
    /**
     * @beta
     * @remarks
     * 暂停此音效。
     *
     * Pauses this sound.
     *
     * @worldMutation
     *
     */
    pause(): void;
    /**
     * @beta
     * @remarks
     * 暂停后恢复此音效。
     *
     * Resumes this sound after a pause.
     *
     * @worldMutation
     *
     */
    resume(): void;
    /**
     * @beta
     * @remarks
     * 设置此音效实例的播放位置。
     *
     * Sets the playback position of this sound instance.
     *
     * @worldMutation
     *
     * @param seconds
     * 要跳转到的位置（以秒为单位）。必须为非负值。
     *
     * Position to seek to in seconds. Must be non-negative.
     * Minimum value: 0
     */
    seekTo(seconds: number): void;
    /**
     * @beta
     * @remarks
     * 设置此音效实例的音高。
     *
     * Sets the pitch of this sound instance.
     *
     * @worldMutation
     *
     * @param pitch
     * 0.01 到 10.0 之间的音高倍率。值为 1.0 表示正常音高。
     *
     * Pitch multiplier between 0.01 and 10.0. A value of 1.0 is normal pitch.
     * Bounds: [0.009999999776482582, 10]
     */
    setPitch(pitch: number): void;
    /**
     * @beta
     * @remarks
     * 设置此音效实例的音量。
     *
     * Sets the volume of this sound instance.
     *
     * @worldMutation
     *
     * @param volume
     * 0.0 到 10.0 之间的音量级别。
     *
     * Volume level between 0.0 and 10.0.
     * Bounds: [0, 10]
     */
    setVolume(volume: number): void;
    /**
     * @rc
     * @remarks
     * 停止此音效实例的播放。
     *
     * Stops this sound instance from playing.
     *
     * @worldMutation
     *
     */
    stop(): void;
}
