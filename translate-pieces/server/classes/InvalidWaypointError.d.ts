/**
 * 在对无效的路径点执行操作时抛出。当路径点被移除或其追踪的实体不再有效时，路径点将变为无效。
 *
 * Error thrown when attempting to perform operations on an
 * invalid waypoint. A waypoint becomes invalid when it is
 * removed or when the entity it tracks is no longer valid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWaypointError extends Error {
    private constructor();
}
