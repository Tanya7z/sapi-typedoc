/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { RenderPlaneGridResolution, WidgetComponentBase } from '..';

export class WidgetComponentRenderPlane extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    fillColor: RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    gridResolution: RenderPlaneGridResolution;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    maxSizeChunks: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    normal: Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    outlineColor: RGBA;
}
