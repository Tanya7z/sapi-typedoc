/* IMPORT */ import { WorldClock, WorldClockEventOptions, WorldClockOnResumedAfterEvent } from '..';

/**
 * @rc
 * Manages callbacks that are connected to a {@link WorldClock}
 * being resumed.
 */
export class WorldClockOnResumedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world clock is
     * resumed.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnResumedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnResumedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world clock is
     * resumed.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnResumedAfterEvent) => void): void;
}
