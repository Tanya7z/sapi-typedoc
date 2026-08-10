/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase } from '..';

export class WidgetComponentRenderPrimitiveTypeCuboid extends WidgetComponentRenderPrimitiveTypeBase {
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
    lengthX: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    lengthY: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    lengthZ: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    rotation?: Vector3;
    constructor(
        center: Vector3,
        lengthX: number,
        lengthY: number,
        lengthZ: number,
        color: RGBA,
        rotation?: Vector3,
        alpha?: number,
    );
}
