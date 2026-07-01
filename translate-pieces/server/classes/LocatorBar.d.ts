/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { GameRule, InvalidWaypointError, LocatorBarError, Waypoint } from '..';

/**
 * 管理玩家定位栏上显示的路径点集合。允许添加、移除和查询路径点，具有最大容量限制。
 *
 * 定位栏中的无效路径点将在下一个游戏刻自动移除。这包括与已从世界中移除的实体绑定的路径点。
 *
 * 注意：你可以使用 `playerWaypoints` {@link GameRule} 控制是否自动将玩家路径点添加到定位栏。接受的值有 `off`（玩家不显示在定位栏上）和 `everyone`（所有玩家在定位栏上可见）。
 *
 * 注意：你只能修改、移除或查询由此包添加的路径点。
 *
 * Manages the collection of waypoints displayed on a player's
 * locator bar. Allows adding, removing, and querying waypoints
 * with a maximum capacity limit.
 *
 * Invalid waypoints in the locator bar will be automatically
 * removed in the next tick. This includes waypoints tied to
 * entities that have been removed from the world.
 *
 * Note: You can control whether vanilla player waypoints are
 * automatically added to the locator bar using the
 * `playerWaypoints` {@link GameRule}. Accepted values are
 * `off` (players are not shown on the locator bar) and
 * `everyone` (all players are visible on the locator bar).
 *
 * Note: You can only modify, remove, or query waypoints that
 * were added by this pack.
 * @seeExample sharedWaypoint.ts
 */
export class LocatorBar {
    private constructor();
    /**
     * @remarks
     * 定位栏中当前的路径点数量。
     *
     * The current number of waypoints in the locator bar.
     *
     */
    readonly count: number;
    /**
     * @remarks
     * 可以添加到定位栏的最大路径点数量。
     *
     * The maximum number of waypoints that can be added to the
     * locator bar.
     *
     */
    readonly maxCount: number;
    /**
     * @remarks
     * 将路径点添加到定位栏。如果路径点已存在、已达到最大路径点限制或路径点无效，则抛出错误。
     *
     * Adds a waypoint to the locator bar. Throws an error if the
     * waypoint already exists, the maximum waypoint limit has been
     * reached, or the waypoint is invalid.
     *
     * @worldMutation
     *
     * @param waypoint
     * 要添加到定位栏的 {@link Waypoint}。
     *
     * The {@link Waypoint} to add to the locator bar.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidWaypointError}
     *
     * {@link LocatorBarError}
     */
    addWaypoint(waypoint: Waypoint): void;
    /**
     * @remarks
     * 返回当前定位栏中所有路径点的数组。
     *
     * Returns an array of all waypoints currently in the locator
     * bar.
     *
     * @worldMutation
     *
     */
    getAllWaypoints(): Waypoint[];
    /**
     * @remarks
     * 检查指定的路径点是否存在于定位栏中。
     *
     * Checks whether the specified waypoint exists in the locator
     * bar.
     *
     * @worldMutation
     *
     * @param waypoint
     * 要检查的 {@link Waypoint}。
     *
     * The {@link Waypoint} to check for.
     */
    hasWaypoint(waypoint: Waypoint): boolean;
    /**
     * @remarks
     * 从定位栏中移除所有路径点，将其完全清空。
     *
     * Removes all waypoints from the locator bar, clearing it
     * completely.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    removeAllWaypoints(): void;
    /**
     * @remarks
     * 从定位栏中移除指定路径点。如果路径点不存在于定位栏中，则返回错误。
     *
     * Removes a specific waypoint from the locator bar. Returns an
     * error if the waypoint does not exist in the locator bar.
     *
     * @worldMutation
     *
     * @param waypoint
     * 要从定位栏中移除的 {@link Waypoint}。
     *
     * The {@link Waypoint} to remove from the locator bar.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link LocatorBarError}
     */
    removeWaypoint(waypoint: Waypoint): void;
}
