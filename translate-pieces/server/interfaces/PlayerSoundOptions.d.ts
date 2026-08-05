/* IMPORT */ import { Vector3 } from '..';

/**
 * 如何为玩家播放声音的额外选项。
 *
 * Additional options for how a sound plays for a player.
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * 声音的位置；如果未指定，则在玩家附近播放声音。
     *
     * Location of the sound; if not specified, the sound is played
     * near a player.
     *
     */
    location?: Vector3;
    /**
     * @beta
     * @remarks
     * 初始播放后额外重复该声音的次数。`0`（默认值）播放一次，`-1` 无限循环，正整数 `N` 总共播放 `N + 1` 次。例如，`loopCount: 1` 播放两次。循环次数在声音开始时固定，之后无法更改。使用 `-1` 时，请参阅 `SoundInstance` 了解句柄生命周期要求。
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
     * 可选的音高。
     *
     * Optional pitch of the sound.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 可选的音量。
     *
     * Optional volume of the sound.
     *
     */
    volume?: number;
}
