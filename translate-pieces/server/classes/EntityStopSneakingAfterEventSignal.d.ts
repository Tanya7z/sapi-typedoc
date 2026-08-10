/* IMPORT */ import { EntitySneakingChangedEventOptions, EntityStopSneakingAfterEvent } from '..';

/**
 * @rc
 * Manages callbacks that are connected to when an entity stops
 * sneaking.
 */
export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity stops
     * sneaking.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityStopSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity stops
     * sneaking.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}
