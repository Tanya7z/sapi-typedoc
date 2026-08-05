/* IMPORT */ import { EntityFilter, Vector3 } from '..';

/**
 * 包含在区域内选择实体的选项。
 * @seeExample blockConditional.ts
 * @seeExample findEntitiesHavingPropertyEqualsTo.ts
 * @seeExample playSoundChained.ts
 * @seeExample setScoreboardChained.ts
 * @seeExample summonMobChained.ts
 * @seeExample bounceSkeletons.ts
 * @seeExample tagsQuery.ts
 * @seeExample testThatEntityIsFeatherItem.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityQueryOptions extends EntityFilter {
    /**
     * @remarks
     * 限制返回的实体数量，按照此属性指定的最近 N 个实体来选择。查询选项对象上也必须指定 `location` 值。
     *
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    closest?: number;
    /**
     * @remarks
     * 限制返回的实体数量，按照此属性指定的最远 N 个实体来选择。查询选项对象上也必须指定 `location` 值。
     *
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    farthest?: number;
    /**
     * @remarks
     * 向查询添加一个种子位置，与 `closest`、`farthest`、`limit`、`volume` 和 `distance` 属性配合使用。
     *
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * 如果指定，则包含距离 `location` 属性中指定位置小于此距离的实体。
     *
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * 如果指定，则包含距离 `location` 属性中指定位置至少为此距离的实体。
     *
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * 与 `location` 结合使用，指定一个要包含的实体的长方体体积。
     *
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     *
     */
    volume?: Vector3;
}
