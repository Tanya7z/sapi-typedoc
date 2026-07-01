/**
 * 表示定位栏操作可能失败的各种原因的枚举。
 *
 * Enum representing the different reasons why a locator bar
 * operation may fail.
 */
export enum LocatorBarErrorReason {
    /**
     * @remarks
     * 该路径点已存在于定位栏中，无法再次添加。
     *
     * The waypoint already exists in the locator bar and cannot be
     * added again.
     *
     */
    WaypointAlreadyExists = 'WaypointAlreadyExists',
    /**
     * @remarks
     * 已达到最大路径点数量，无法再添加更多。
     *
     * The maximum number of waypoints has been reached and no more
     * can be added.
     *
     */
    WaypointLimitExceeded = 'WaypointLimitExceeded',
    /**
     * @remarks
     * 指定的路径点在定位栏中不存在。
     *
     * The specified waypoint does not exist in the locator bar.
     *
     */
    WaypointNotFound = 'WaypointNotFound',
}
