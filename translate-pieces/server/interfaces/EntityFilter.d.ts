/* IMPORT */ import { EntityQueryPropertyOptions, EntityQueryScoreOptions, GameMode } from '..';

/**
 * 包含筛选实体的选项。
 *
 * Contains options for filtering entities.
 */
export interface EntityFilter {
    /**
     * @remarks
     * 排除匹配一个或多个指定系列的实体。
     *
     * Excludes entities that match one or more of the specified
     * families.
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * 如果实体的特定游戏模式与指定游戏模式匹配，则排除该实体。
     *
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     *
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * 排除名称与指定值之一匹配的实体。
     *
     * Excludes entities that have a name that match one of the
     * specified values.
     *
     */
    excludeNames?: string[];
    /**
     * @remarks
     * 排除带有与指定值之一匹配的标签的实体。
     *
     * Excludes entities with a tag that matches one of the
     * specified values.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 排除如果它们是指定类型之一的实体。
     *
     * Excludes entities if they are one of the specified types.
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 如果指定，则包含匹配所有指定系列的实体。
     *
     * If specified, includes entities that match all of the
     * specified families.
     *
     */
    families?: string[];
    /**
     * @remarks
     * 如果指定，则包含游戏模式与指定游戏模式匹配的实体。
     *
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * 如果指定，则仅包含水平旋转角度最多为此值的实体。
     *
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * 如果定义，仅返回等级最多为此值的玩家。
     *
     * If defined, only players that have at most this level are
     * returned.
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * 如果指定，仅返回垂直旋转角度最多为此值的实体。
     *
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * 如果指定，将仅包含水平旋转角度至少为此值的实体。
     *
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * 如果定义，仅返回等级至少为此值的玩家。
     *
     * If defined, only players that have at least this level are
     * returned.
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * 如果指定，将仅包含垂直旋转角度至少为此值的实体。
     *
     * If specified, will only include entities that have at least
     * this vertical rotation.
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * 包含具有指定名称的实体。
     *
     * Includes entities with the specified name.
     *
     */
    name?: string;
    propertyOptions?: EntityQueryPropertyOptions[];
    /**
     * @remarks
     * 获取/设置一组带有特定计分板目标过滤器的 `EntityQueryScoreOptions` 对象。
     *
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * 包含匹配所有指定标签的实体。
     *
     * Includes entities that match all of the specified tags.
     *
     */
    tags?: string[];
    /**
     * @remarks
     * 如果定义，则包含匹配此类型的实体。
     *
     * If defined, entities that match this type are included.
     *
     */
    type?: string;
}
