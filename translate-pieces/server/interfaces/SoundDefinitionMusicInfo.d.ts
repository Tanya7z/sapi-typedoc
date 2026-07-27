/**
 * @beta
 * 在声音定义上声明的音乐元数据。每个字段都是可选的，当声音定义未为其声明值时，该字段为 `undefined`。
 *
 * Music metadata declared on a sound definition. Each field is
 * optional and is undefined when the sound definition does not
 * declare a value for it.
 */
export interface SoundDefinitionMusicInfo {
    /**
     * @remarks
     * 为此声音声明的艺术家。当未声明艺术家时为 `undefined`。
     *
     * Artist declared for this sound. Undefined when no artist was
     * declared.
     *
     */
    artist?: string;
    /**
     * @remarks
     * 为此声音声明的流派。当未声明流派时为 `undefined`。
     *
     * Genres declared for this sound. Undefined when no genres
     * were declared.
     *
     */
    genres?: string[];
    /**
     * @remarks
     * 为此声音声明的情绪。当未声明情绪时为 `undefined`。
     *
     * Moods declared for this sound. Undefined when no moods were
     * declared.
     *
     */
    moods?: string[];
    /**
     * @remarks
     * 为此声音声明的标题。当未声明标题时为 `undefined`。
     *
     * Title declared for this sound. Undefined when no title was
     * declared.
     *
     */
    title?: string;
}
