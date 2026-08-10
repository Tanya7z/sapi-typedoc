/* IMPORT */ import { EntityDataDrivenTriggerEventOptions, EntityUpgradeAfterEvent } from '..';

/**
 * Contains event registration related to firing of a data
 * driven entity version upgrade.
 */
export class EntityUpgradeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a data driven
     * entity version upgrade is triggered.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityUpgradeAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: EntityUpgradeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called after a data driven
     * entity version upgrade is triggered.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): void;
}
