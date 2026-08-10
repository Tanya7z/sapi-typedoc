/* IMPORT */ import { CurrentThemeColorChangeAfterEvent } from '..';

export class CurrentThemeColorChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: CurrentThemeColorChangeAfterEvent) => void,
    ): (arg0: CurrentThemeColorChangeAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: CurrentThemeColorChangeAfterEvent) => void): void;
}
