/* IMPORT */ import { WorldLoadAfterEvent } from '..';

export class WorldLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}
