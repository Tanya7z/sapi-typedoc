/* IMPORT */ import { ItemType, Vector3 } from '../../server';
/* IMPORT */ import { BlockMaskList, BrushDirectionalPlacementMode, BrushElevationMode, FlattenMode, PaintCompletionState, PaintMode, PendingTransaction, RelativeVolumeListBlockVolume } from '..';
/* IMPORT */ import { BlockStateSuperset } from '../../vanilla-data';

export class BrushShapeManager {
    private constructor();
    readonly activeBrushVolume?: RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    activateBrushTool(): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    beginPainting(onComplete: (arg0: PaintCompletionState) => void): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    clearBlockStateOverrides(): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    deactivateBrushTool(): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    disableItemPlacement(): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    enableItemPlacement(itemType: ItemType, data?: number): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    endPainting(cancelled: boolean): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    getBrushShapeOffset(): Vector3;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    getDirectionalPlacementMode(): BrushDirectionalPlacementMode;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    getInverseEraseMode(): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    isBrushPaintBusy(): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    pushBlockStateOverride<T extends keyof BlockStateSuperset>(
        blockStateName: T,
        blockStateValue: BlockStateSuperset[T],
    ): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setBlockFacePlacementBasedOnCamera(enabled: boolean): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setBrushMask(mask: BlockMaskList): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setBrushShape(shape: Vector3[] | RelativeVolumeListBlockVolume): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setBrushShapeOffset(offset: Vector3): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setBrushShapeVisible(visible: boolean): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setDirectionalPlacementMode(directionalPlacementMode: BrushDirectionalPlacementMode): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setElevationBrushRadius(elevationBrushRadius: number): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setElevationFalloff(elevationFalloff: number): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setElevationMode(elevationMode: BrushElevationMode): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setElevationSampleLayers(elevationSampleLayers: number): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setFlattenMode(flattenMode: FlattenMode): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setFlattenSmoothing(flattenSmoothing: number): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setFloorBlockOverride(floorBlockOverride: boolean): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setInverseEraseMode(inverseEraseMode: boolean): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setPendingTransaction(pendingTransaction?: PendingTransaction): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    setTerrainStrength(terrainStrength: number): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    singlePaint(onComplete: (arg0: PaintCompletionState) => void): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    switchBrushPaintMode(paintMode: PaintMode): void;
}
