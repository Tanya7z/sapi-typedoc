/* IMPORT */ import { PortalActivateAfterEvent } from '..';

/**
 * @beta
 */
export class PortalActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(callback: (arg0: PortalActivateAfterEvent) => void): (arg0: PortalActivateAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PortalActivateAfterEvent) => void): void;
}
