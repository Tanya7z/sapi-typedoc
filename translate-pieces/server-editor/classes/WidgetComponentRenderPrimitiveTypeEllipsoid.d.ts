/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase } from '..';

export class WidgetComponentRenderPrimitiveTypeEllipsoid extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    alpha?: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    center: Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    color: RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    radii: Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    rotation?: Vector3;
    constructor(
        center: Vector3,
        radii: Vector3,
        color: RGBA,
        rotation?: Vector3,
        alpha?: number,
    );
}
