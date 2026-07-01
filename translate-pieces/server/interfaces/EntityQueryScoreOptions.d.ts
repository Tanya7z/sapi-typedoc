/**
 * 包含根据目标的分数筛选玩家的额外选项。
 *
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * 如果设置为 `true`，则此分数范围内的实体和玩家将从查询结果中排除。
     *
     * If set to true, entities and players within this score range
     * are excluded from query results.
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * 如果定义，仅包含分数等于或低于 `maxScore` 的玩家。
     *
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * 如果定义，仅包含分数等于或高于 `minScore` 的玩家。
     *
     * If defined, only players that have a score equal to or over
     * minScore are included.
     *
     */
    minScore?: number;
    /**
     * @remarks
     * 筛选的计分板目标标识符。
     *
     * Identifier of the scoreboard objective to filter on.
     *
     */
    objective?: string;
}
