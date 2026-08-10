/* IMPORT */ import { WebSocketClientCloseAfterEvent } from '..';

export class CloseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(callback: (arg0: WebSocketClientCloseAfterEvent) => void): (arg0: WebSocketClientCloseAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WebSocketClientCloseAfterEvent) => void): void;
}
