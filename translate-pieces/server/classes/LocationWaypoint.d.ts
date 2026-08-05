/* IMPORT */ import { DimensionLocation, InvalidWaypointTextureSelectorError, RGB, Waypoint, WaypointTextureSelector } from '..';

/**
 * 指向世界中固定位置的路径点。与实体路径点不同，位置路径点始终保持有效，并且其位置可以更新。
 *
 * Waypoint that points to a fixed location in the world.
 * Unlike entity waypoints, location waypoints always remain
 * valid and their position can be updated.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationWaypoint extends Waypoint {
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(dimensionLocation: DimensionLocation, textureSelector: WaypointTextureSelector, color?: RGB);
    /**
     * @remarks
     * 更新此路径点指向的维度和位置。
     *
     * Updates the dimension and location that this waypoint points
     * to.
     *
     * @worldMutation
     *
     * @param dimensionLocation
     * 路径点的新 `DimensionLocation`（维度和坐标）。
     *
     * The new {@link DimensionLocation} (dimension and
     * coordinates) for the waypoint.
     */
    setDimensionLocation(dimensionLocation: DimensionLocation): void;
}
