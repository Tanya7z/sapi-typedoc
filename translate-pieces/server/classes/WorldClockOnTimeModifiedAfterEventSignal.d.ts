/* IMPORT */ import { WorldClock, WorldClockEventOptions, WorldClockOnTimeModifiedAfterEvent } from '..';

/**
 * @rc
 * Manages callbacks that are connected to changes to the time
 * of a {@link WorldClock}.
 */
export class WorldClockOnTimeModifiedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world clock's
     * time is modified.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnTimeModifiedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnTimeModifiedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world clock's
     * time is modified.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnTimeModifiedAfterEvent) => void): void;
}
