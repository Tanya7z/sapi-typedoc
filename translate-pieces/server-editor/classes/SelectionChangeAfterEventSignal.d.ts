/* IMPORT */ import { SelectionEventAfterEvent } from '..';

export class SelectionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(callback: (arg0: SelectionEventAfterEvent) => void): (arg0: SelectionEventAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: SelectionEventAfterEvent) => void): void;
}
