/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase } from '..';

export class WidgetComponentRenderPrimitiveTypeCylinder extends WidgetComponentRenderPrimitiveTypeBase {
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
    height: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    radiusX: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    radiusZ: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    rotation?: Vector3;
    constructor(
        center: Vector3,
        radiusX: number,
        radiusZ: number,
        height: number,
        color: RGBA,
        rotation?: Vector3,
        alpha?: number,
    );
}
