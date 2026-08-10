/* IMPORT */ import { EntityTamedAfterEvent, EntityTamedEventOptions } from '..';

/**
 * @rc
 * Manages callbacks that are connected to when an entity is
 * tamed.
 */
export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityTamedAfterEvent) => void,
        options?: EntityTamedEventOptions,
    ): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}
