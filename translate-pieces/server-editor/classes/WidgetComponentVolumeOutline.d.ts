/* IMPORT */ import { BlockVolume, BlockVolumeBase, RGBA, StructureMirrorAxis, StructureRotation, Vector3 } from '../../server';
/* IMPORT */ import { InvalidWidgetComponentError, RelativeVolumeListBlockVolume, WidgetComponentBase } from '..';

export class WidgetComponentVolumeOutline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    highlightHullColor: RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    highlightOutlineColor: RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    hullColor: RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    mirror: StructureMirrorAxis;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    normalizedOrigin: Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    outlineColor: RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    rotation: StructureRotation;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    showHighlightOutline: boolean;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    showOutline: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: BlockVolume;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    volumeOffset: Vector3;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    getVolume(): RelativeVolumeListBlockVolume | undefined;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setVolume(
        volumeToSet?:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
}
