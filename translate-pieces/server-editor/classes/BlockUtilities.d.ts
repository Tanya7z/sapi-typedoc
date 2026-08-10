/* IMPORT */ import { BlockBoundingBox, BlockPermutation, BlockType, BlockVolumeBase, ListBlockVolume, Vector3 } from '../../server';
/* IMPORT */ import { BlockMaskList, ContiguousSelectionProperties, QuickExtrudeProperties, RelativeVolumeListBlockVolume } from '..';

export class BlockUtilities {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    fillVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        block?: BlockPermutation | BlockType | string,
    ): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    findObscuredBlocksWithinVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    getContiguousSelection(properties?: ContiguousSelectionProperties): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    getDimensionLocationBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    getDimensionMaxLocation(): Vector3;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    getDimensionMinLocation(): Vector3;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    getFacePreviewSelection(properties?: QuickExtrudeProperties): ListBlockVolume;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    isLocationInsideCurrentDimensionBounds(
        locationOrVolumeOrBounds:
            | BlockBoundingBox
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    quickExtrude(properties?: QuickExtrudeProperties): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    shrinkWrapVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    trimVolumeToFitContents(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        retainMarqueeAfterTrimming: boolean,
        ignoreLiquid: boolean,
        ignoreNoCollision: boolean,
        blockMask?: BlockMaskList,
    ): RelativeVolumeListBlockVolume;
}
