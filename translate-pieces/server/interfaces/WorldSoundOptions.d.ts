/**
 * 包含 playSound 事件的额外选项。
 *
 * Contains additional options for a playSound occurrence.
 */
export interface WorldSoundOptions {
    /**
     * @beta
     * @remarks
     * 首次播放后额外重复声音的次数。`0`（默认值）播放一次声音，`-1` 无限循环，正整数 `N` 总共播放 `N + 1` 次。例如，`loopCount: 1` 播放两次声音。循环次数在声音开始时固定，之后无法更改。使用 `-1` 时，请参阅 `SoundInstance` 了解句柄生命周期要求。
     *
     * Number of additional times to repeat the sound after the
     * initial play. `0` (the default) plays the sound once, `-1`
     * loops it forever, and a positive integer `N` plays the sound
     * `N + 1` times in total. For example, `loopCount: 1` plays
     * the sound twice. The loop count is fixed when the sound
     * starts and cannot be changed afterward. When using `-1`, see
     * `SoundInstance` for handle lifetime requirements.
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 播放声音的音高。
     *
     * Pitch of the sound played.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 此声音被听到的相对音量和空间。
     *
     * Relative volume and space by which this sound is heard.
     *
     */
    volume?: number;
}
