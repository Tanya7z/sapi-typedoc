/* IMPORT */ import { EntityDieAfterEvent, EntityEventOptions } from '..';

/**
 * Supports registering for an event that fires after an entity
 * has died.
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to an event that fires when an entity dies.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @param callback
     * Function to call when an entity dies.
     * @param options
     * Additional filtering options for when the subscription
     * fires.
     * @returns
     * Returns the closure that can be used in future downstream
     * calls to unsubscribe.
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * Stops this event from calling your function when an entity
     * dies.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}
