/* IMPORT */ import { RGBA, VectorXZ } from '../../server';
/* IMPORT */ import { MinimapMarkerData, MinimapMarkerType, MinimapTrackingMode, MinimapViewType } from '..';

/**
 * A MinimapItem represents an individual minimap instance that
 * manages map data, controls display state, and provides
 * configuration for markers and visual properties.
 */
export class MinimapItem {
    private constructor();
    readonly freeCenter: VectorXZ;
    readonly id: string;
    /**
     * @remarks
     * Indicate whether this minimap instance is currently active
     * and being displayed to the player.
     *
     */
    readonly isActive: boolean;
    readonly yLevel: number;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    addCustomMarker(iconIdentifier: string, data: MinimapMarkerData[], dimensionId: string): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    addLocationMarker(data: MinimapMarkerData[], dimensionId: string): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    addMultiplayerMarker(): void;
    getMarkerTypes(): MinimapMarkerType[];
    /**
     * @remarks
     * Retrieve the color assigned to a specific player on the
     * minimap.
     *
     * @throws This function can throw errors.
     */
    getPlayerColor(playerId: string): RGBA;
    hasCustomGroup(iconIdentifier: string): boolean;
    hasMarkerOfType(type: MinimapMarkerType): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeAllCustomMarkers(dimensionId: string): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeCustomMarker(iconIdentifier: string, dimensionId: string): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeLocationMarker(dimensionId: string): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeMultiplayerMarker(): void;
    /**
     * @remarks
     * Control whether the minimap is currently active and visible
     * to the player.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setActive(active: boolean): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setFreeCenter(center: VectorXZ): void;
    /**
     * @remarks
     * Adjust the width and height dimensions of the minimap
     * display.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setSize(mapWidth: number, mapHeight: number): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setTrackingMode(mode: MinimapTrackingMode): void;
    /**
     * @remarks
     * Change the visual perspective or style of the minimap view.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setViewType(viewType: MinimapViewType): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setYLevel(yLevel: number): void;
}
