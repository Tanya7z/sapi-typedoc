/* IMPORT */ import { RGBA } from '../../server';
/* IMPORT */ import { WidgetComponentBase } from '..';

export class WidgetComponentText extends WidgetComponentBase {
    private constructor();
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
    label: string;
}
