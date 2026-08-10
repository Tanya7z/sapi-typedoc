/* IMPORT */ import { BlockPermutation, BlockType, BlockVolumeBase, Vector3 } from '../../server';
/* IMPORT */ import { BlockMaskList, BlockUtilityExtrudeDirection, BlockUtilityFloodMatchCriteria, ManifestTaskPromise, NumberTaskPromise, RelativeVolumeListBlockVolume, VolumeTaskPromise } from '..';

export class BlockUtilityTasks {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    extrude(
        location: Vector3,
        direction?: BlockUtilityExtrudeDirection,
        faceRadius?: number,
        layerCount?: number,
        isShrink?: boolean,
        criteria?: BlockUtilityFloodMatchCriteria,
        customBlockList?: string[],
        maxBlocksPerTick?: number,
        buildGeometry?: boolean,
        tolerance?: number,
        faceVolume?: BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    fillVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        block?: BlockPermutation | BlockType | string,
        maxBlocksPerTick?: number,
    ): NumberTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    findObscuredBlocksWithinVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    floodSearch(
        location: Vector3,
        criteria?: BlockUtilityFloodMatchCriteria,
        radius?: number,
        customBlockList?: string[],
        maxResultBlocks?: number,
        maxBlocksPerTick?: number,
        directionMask?: number,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    generateManifest(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): ManifestTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    replaceBlocksInSelection(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        fromBlockIdentifier: string,
        toBlock?: BlockPermutation | BlockType | string,
        maxBlocksPerTick?: number,
    ): NumberTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    shrinkWrapVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
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
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
}
