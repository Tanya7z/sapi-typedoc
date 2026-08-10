/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase } from '..';

export class WidgetComponentRenderPrimitiveTypeLine extends WidgetComponentRenderPrimitiveTypeBase {
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
    end: Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    start: Vector3;
    constructor(start: Vector3, end: Vector3, color: RGBA);
}
