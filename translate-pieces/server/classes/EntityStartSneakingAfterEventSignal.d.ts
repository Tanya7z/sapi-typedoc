/* IMPORT */ import { EntitySneakingChangedEventOptions, EntityStartSneakingAfterEvent } from '..';

/**
 * @rc
 * Manages callbacks that are connected to when an entity
 * begins sneaking.
 */
export class EntityStartSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity begins
     * sneaking.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityStartSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStartSneakingAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity begins
     * sneaking.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): void;
}
