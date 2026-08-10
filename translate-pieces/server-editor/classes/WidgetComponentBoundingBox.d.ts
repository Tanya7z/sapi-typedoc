/* IMPORT */ import { BlockVolume, RGBA, StructureMirrorAxis, StructureRotation, Vector3 } from '../../server';
/* IMPORT */ import { Axis, InvalidWidgetComponentError, WidgetComponentBase, WidgetComponentBoundingBoxStateChangeEventParameters } from '..';

export class WidgetComponentBoundingBox extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    boundsOffset: Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    enableResizeHandles: Axis;
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
    showWorldIntersections: boolean;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    size: Vector3;
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
    visibleHull: boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    deactivateHandles(): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters) => void): void;
}
