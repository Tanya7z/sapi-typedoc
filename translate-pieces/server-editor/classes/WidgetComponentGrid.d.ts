/* IMPORT */ import { RGBA, Vector2 } from '../../server';
/* IMPORT */ import { Plane, WidgetComponentBase } from '..';

export class WidgetComponentGrid extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    gridColor: RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    gridCount: Vector2;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    gridSize: Vector2;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    plane: Plane;
}
