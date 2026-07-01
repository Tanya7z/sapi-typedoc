/* IMPORT */ import { EntitySpawnAfterEvent, EntityEventOptions } from '..';

/**
 * 管理与实体生成后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is spawned.
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体生成后被调用。
     *
     * Adds a callback that will be called after an entity is spawned.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void, options?: EntityEventOptions): (arg0: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体生成后不再被调用。
     *
     * Removes a callback from being called after an entity is spawned.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}
