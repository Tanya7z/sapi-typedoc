/* IMPORT */ import { WorldClock, WorldClockEventOptions, WorldClockOnPausedAfterEvent } from '..';

/**
 * @rc
 * Manages callbacks that are connected to a {@link WorldClock}
 * being paused.
 */
export class WorldClockOnPausedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world clock is
     * paused.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnPausedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnPausedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world clock is
     * paused.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnPausedAfterEvent) => void): void;
}
