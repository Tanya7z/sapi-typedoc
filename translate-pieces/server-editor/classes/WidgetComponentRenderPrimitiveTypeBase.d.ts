/* IMPORT */ import { PrimitiveType } from '..';

export class WidgetComponentRenderPrimitiveTypeBase {
    private constructor();
    readonly primitiveType: PrimitiveType;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    renderPriority: number;
}
