/* IMPORT */ import { BiomeType, RGB } from '../../server';
/* IMPORT */ import { MinimapCreateOptions, MinimapItem, MinimapViewType } from '..';

/**
 * Manage minimap instances within the editor, providing
 * functionality to create, destroy, and retrieve minimap
 * displays.
 *
 */
export class MinimapManager {
    private constructor();
    /**
     * @remarks
     * Create a new minimap instance with the specified view type
     * and dimensions.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    createMinimap(
        viewType: MinimapViewType,
        mapWidth: number,
        mapHeight: number,
        options?: MinimapCreateOptions,
    ): MinimapItem;
    /**
     * @remarks
     * Remove an existing minimap instance from the manager using
     * its unique identifier.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    destroyMinimap(minimapId: string): void;
    /**
     * @remarks
     * Retrieve a list of all active minimap identifiers currently
     * managed by the system.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    getAllMinimapIds(): string[];
    /**
     * @remarks
     * Retrieve a specific minimap instance using its unique
     * identifier.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    getMinimap(minimapId: string): MinimapItem;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setVanillaBiomeColorMap(colorMap: Record<string, RGB>): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    updateVanillaColorMap(biomeType: BiomeType, color: RGB): void;
}
