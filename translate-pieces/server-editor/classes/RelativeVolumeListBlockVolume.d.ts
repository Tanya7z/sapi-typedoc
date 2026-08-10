/* IMPORT */ import { BlockVolume, BlockVolumeBase, Vector3 } from '../../server';

export class RelativeVolumeListBlockVolume extends BlockVolumeBase {
    readonly isEmpty: boolean;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    origin?: Vector3;
    readonly volumeCount: number;
    constructor(origin?: Vector3);
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    add(
        toAdd:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    clear(): void;
    clone(): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    getVolumeList(): BlockVolume[];
    hasAdjacent(location: Vector3, normalizedOffset: Vector3): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    moveTo(location: Vector3): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    remove(
        toRemove:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    set(
        toSet:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    translate(offset: Vector3): void;
}
