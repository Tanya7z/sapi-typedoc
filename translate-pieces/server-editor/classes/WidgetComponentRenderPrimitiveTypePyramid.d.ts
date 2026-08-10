/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase } from '..';

export class WidgetComponentRenderPrimitiveTypePyramid extends WidgetComponentRenderPrimitiveTypeBase {
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
    rotation?: Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    widthX: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    widthZ?: number;
    constructor(
        center: Vector3,
        widthX: number,
        height: number,
        color: RGBA,
        widthZ?: number,
        rotation?: Vector3,
        alpha?: number,
    );
}
