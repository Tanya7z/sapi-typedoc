/**
 * @beta
 * 用于缩小一组声音定义范围的筛选条件。每个字段都是可选的，仅在定义时应用其约束；一个定义必须满足所有已定义的字段才能通过。
 *
 * Criteria used to narrow a set of sound definitions. Each
 * field is optional and applies its constraint only when
 * defined; a definition must satisfy every defined field to
 * pass.
 */
export interface SoundDefinitionFilter {
    /**
     * @remarks
     * 要与定义中 `music_info.artist` 进行匹配的艺术家名称。比较不区分大小写。当定义为非空数组时，只有在其声明的艺术家与提供的值之一匹配时，定义才通过。当未定义时，不对艺术家施加约束。
     *
     * Artist names to match against the definition's
     * music_info.artist. Comparison is case-insensitive. When
     * defined as a non-empty array, a definition passes only when
     * its declared artist matches one of the supplied values. When
     * undefined, no constraint on artist is applied.
     *
     */
    artists?: string[];
    /**
     * @remarks
     * 要与定义中 `music_info.genres` 进行匹配的流派。比较不区分大小写。当定义为非空数组时，只有在其声明的至少一个流派与提供的值之一匹配时，定义才通过。当未定义时，不对流派施加约束。
     *
     * Genres to match against the definition's music_info.genres.
     * Comparison is case-insensitive. When defined as a non-empty
     * array, a definition passes only when at least one of its
     * declared genres matches one of the supplied values. When
     * undefined, no constraint on genres is applied.
     *
     */
    genres?: string[];
    /**
     * @remarks
     * 以秒为单位的上限（包含）。当定义时，持续时间更长的定义以及未声明持续时间的定义将被排除。当未定义时，不应用上限。
     *
     * Upper bound in seconds, inclusive. When defined, definitions
     * with a longer duration and definitions without a declared
     * duration are excluded. When undefined, no upper bound is
     * applied.
     *
     */
    maxDuration?: number;
    /**
     * @remarks
     * 以秒为单位的下限（包含）。当定义时，持续时间更短的定义以及未声明持续时间的定义将被排除。当未定义时，不应用下限。
     *
     * Lower bound in seconds, inclusive. When defined, definitions
     * with a shorter duration and definitions without a declared
     * duration are excluded. When undefined, no lower bound is
     * applied.
     *
     */
    minDuration?: number;
    /**
     * @remarks
     * 要与定义中 `music_info.moods` 进行匹配的情绪。比较不区分大小写。当定义为非空数组时，只有在其声明的至少一个情绪与提供的值之一匹配时，定义才通过。当未定义时，不对情绪施加约束。
     *
     * Moods to match against the definition's music_info.moods.
     * Comparison is case-insensitive. When defined as a non-empty
     * array, a definition passes only when at least one of its
     * declared moods matches one of the supplied values. When
     * undefined, no constraint on moods is applied.
     *
     */
    moods?: string[];
    /**
     * @remarks
     * 要与定义的标签进行匹配的标签约束。标签名称和值的比较不区分大小写。当定义为非空记录时，只有对于每个具有非空值数组的条目，该标签名称在定义中存在且至少有一个匹配值时，定义才通过。当未定义时，不对标签施加约束。
     *
     * Tag constraints to match against the definition's tags.
     * Comparisons of tag names and values are case-insensitive.
     * When defined as a non-empty record, a definition passes only
     * when, for each entry with a non-empty value array, the tag
     * name is present on the definition with at least one matching
     * value. When undefined, no constraint on tags is applied.
     *
     */
    tags?: Record<string, string[]>;
    /**
     * @remarks
     * 要与定义中 `music_info.title` 进行匹配的标题。比较不区分大小写。当定义为非空数组时，只有在其声明的标题与提供的值之一匹配时，定义才通过。当未定义时，不对标题施加约束。
     *
     * Titles to match against the definition's music_info.title.
     * Comparison is case-insensitive. When defined as a non-empty
     * array, a definition passes only when its declared title
     * matches one of the supplied values. When undefined, no
     * constraint on title is applied.
     *
     */
    titles?: string[];
}
