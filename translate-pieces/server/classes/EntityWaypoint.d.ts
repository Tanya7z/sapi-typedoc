/* IMPORT */ import { Dimension, Vector3 } from '..';

/**
 * 表示实体的路径点。
 *
 * Represents a waypoint for an entity.
 */
export class EntityWaypoint {
    private constructor();
    readonly dimension: Dimension;
    readonly location: Vector3;
}
