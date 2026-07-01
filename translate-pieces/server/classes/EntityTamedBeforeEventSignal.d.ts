/* IMPORT */ import { EntityTamedBeforeEvent } from '..';

/**
 * 管理与实体被驯服前相关的回调。
 *
 * Manages callbacks that are connected to before an entity is tamed.
 */
export class EntityTamedBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被驯服前调用。
     *
     * Adds a callback that will be called before an entity is tamed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityTamedBeforeEvent) => void): (arg0: EntityTamedBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被驯服前不再被调用。
     *
     * Removes a callback from being called before an entity is tamed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityTamedBeforeEvent) => void): void;
}
