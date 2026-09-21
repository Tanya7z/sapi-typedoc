/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { Axis, InvalidWidgetComponentError, WidgetComponentBase, WidgetComponentGizmoStateChangeEventParameters, WidgetGizmoRotation, WidgetGizmoScaleMode } from '..';

export class WidgetComponentGizmo extends WidgetComponentBase {
    private constructor();
    activated: boolean;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    enabledAxes: Axis;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    normalizedOffsetOverride?: Vector3;
    /**
     * @remarks
     * The rotation rings for this gizmo. Rotation is configured
     * and observed through the returned
     * {@link WidgetGizmoRotation}, and is disabled until at least
     * one rotation axis is enabled on it.
     *
     * @throws This property can throw when used.
     */
    readonly rotation: WidgetGizmoRotation;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    scaleMode: WidgetGizmoScaleMode;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    screenScale: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    worldScale: number;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void): void;
}
