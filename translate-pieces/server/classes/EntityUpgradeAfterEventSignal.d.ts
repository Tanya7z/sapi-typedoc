/* IMPORT */ import { EntityUpgradeAfterEvent } from '..';

/**
 * 管理与实体升级后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is upgraded.
 */
export class EntityUpgradeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体升级后被调用。
     *
     * Adds a callback that will be called after an entity is upgraded.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): (arg0: EntityUpgradeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体升级后不再被调用。
     *
     * Removes a callback from being called after an entity is upgraded.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): void;
}
