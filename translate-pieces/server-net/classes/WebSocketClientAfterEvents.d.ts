/* IMPORT */ import { CloseAfterEventSignal, MessageAfterEventSignal } from '..';

export class WebSocketClientAfterEvents {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly close: CloseAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly message: MessageAfterEventSignal;
}
