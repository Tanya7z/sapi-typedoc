/* IMPORT */ import { SoundDefinitionDurationInfo, SoundDefinitionMusicInfo } from '..';

/**
 * @beta
 * 关于在 sound_definitions.json 文件中声明的音效的静态元数据。
 *
 * Static metadata about a sound declared in a sound_definitions.json file.
 */
export class SoundDefinition {
    private constructor();
    /**
     * @remarks
     * 为此音效声明的持续时间元数据。当音效定义未指定持续时间时为 `undefined`。
     *
     * Duration metadata declared for this sound. Undefined when the sound definition does not specify a duration.
     *
     */
    readonly durationInfo?: SoundDefinitionDurationInfo;
    /**
     * @remarks
     * 为此音效声明的音乐元数据。当音效定义未指定 music_info 块时为 `undefined`。
     *
     * Music metadata declared for this sound. Undefined when the sound definition does not specify a music_info block.
     *
     */
    readonly musicInfo?: SoundDefinitionMusicInfo;
    /**
     * @remarks
     * 此定义所声明的音效事件标识符，格式为 'namespace:name'。
     *
     * Identifier of the sound event this definition declares, in the form 'namespace:name'.
     *
     */
    readonly soundEventId: string;
    /**
     * @remarks
     * 为此音效声明的标签元数据，以记录形式将每个标签名称映射到其声明的值。使用单个字符串值声明的标签将作为单元素数组暴露。当音效定义未指定任何标签时为 `undefined`。
     *
     * Tag metadata declared for this sound, as a record mapping each tag name to its declared values. A tag declared with a single string value is exposed as a single-element array. Undefined when the sound definition does not specify any tags.
     *
     */
    readonly tags?: Record<string, string[]>;
}
