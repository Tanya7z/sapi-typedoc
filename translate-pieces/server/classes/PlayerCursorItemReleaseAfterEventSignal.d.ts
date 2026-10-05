/* IMPORT */ import { PlayerCursorItemReleaseAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks for items released from a player's cursor
 * to a container.
 */
export class PlayerCursorItemReleaseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that is called when a player releases an
     * item from their cursor to a container.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @param callback
     * The callback function invoked when the event fires.
     */
    subscribe(
        callback: (arg0: PlayerCursorItemReleaseAfterEvent) => void,
    ): (arg0: PlayerCursorItemReleaseAfterEvent) => void;
    /**
     * @remarks
     * Removes a previously registered event callback.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @param callback
     * The callback function to remove.
     */
    unsubscribe(callback: (arg0: PlayerCursorItemReleaseAfterEvent) => void): void;
}
