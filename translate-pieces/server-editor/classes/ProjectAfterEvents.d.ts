/* IMPORT */ import { SimulationStateChangeAfterEventSignal } from '..';

export class ProjectAfterEvents {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly simulationStateChange: SimulationStateChangeAfterEventSignal;
}
