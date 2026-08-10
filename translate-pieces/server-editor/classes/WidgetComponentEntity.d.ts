/* IMPORT */ import { InvalidWidgetComponentError, WidgetComponentBase } from '..';

export class WidgetComponentEntity extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    clickable: boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    playAnimation(animationName: string): void;
}
