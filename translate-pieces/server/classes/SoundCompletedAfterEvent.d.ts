/**
 * @beta
 * 包含关于声音声明时长已结束的信息。
 *
 * Contains information about a sound thats declared duration
 * elapsed.
 */
export class SoundCompletedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已完成的音频实例的标识符。与播放声音时返回的 `SoundInstance` 的 `id` 属性匹配。
     *
     * Identifier of the sound instance that completed. Matches the
     * `id` property of the `SoundInstance` returned when the sound
     * was played.
     *
     */
    readonly soundInstanceId: string;
}
