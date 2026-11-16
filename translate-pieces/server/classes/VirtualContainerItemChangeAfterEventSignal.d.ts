/* IMPORT */ import { VirtualContainerEventOptions, VirtualContainerItemChangeAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are invoked when a player changes a
 * slot of a virtual container.
 */
export class VirtualContainerItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player changes a
     * slot of a virtual container.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @param callback
     * Function callback that is called when this event fires.
     * @param options
     * Additional filtering options for the event subscription.
     */
    subscribe(
        callback: (arg0: VirtualContainerItemChangeAfterEvent) => void,
        options?: VirtualContainerEventOptions,
    ): (arg0: VirtualContainerItemChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player changes a
     * slot of a virtual container.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: VirtualContainerItemChangeAfterEvent) => void): void;
}
