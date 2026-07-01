/* IMPORT */ import { World } from '..';

/**
 * 用于 {@link World.playMusic}/{@link World.queueMusic} 方法的额外配置选项。
 *
 * Additional configuration options for {@link
 * World.playMusic}/{@link World.queueMusic} methods.
 */
export interface MusicOptions {
    /**
     * @remarks
     * 指定音乐播放结束时的淡出重叠量。
     *
     * Specifies a fade overlap for music at the end of play.
     *
     */
    fade?: number;
    /**
     * @remarks
     * 如果设置为 `true`，此音乐曲目将重复播放。
     *
     * If set to true, this music track will play repeatedly.
     *
     */
    loop?: boolean;
    /**
     * @remarks
     * 音乐的相对音量级别。
     *
     * Relative volume level of the music.
     *
     */
    volume?: number;
}
