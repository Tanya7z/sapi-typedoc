/* IMPORT */ import { SimulationStateAfterEvent } from '..';

export class SimulationStateChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(callback: (arg0: SimulationStateAfterEvent) => void): (arg0: SimulationStateAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: SimulationStateAfterEvent) => void): void;
}
