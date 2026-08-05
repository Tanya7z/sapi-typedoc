/* IMPORT */ import { EntityItemDropAfterEvent, EntityItemDropEventOptions } from '..';

/**
 * 管理与实体已掉落物品时相关的回调。
 *
 * Manages callbacks that are connected to when an entity has
 * dropped items.
 */
export class EntityItemDropAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体已掉落物品时被调用的回调。
     *
     * Adds a callback that will be called when an entity has
     * dropped items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityItemDropAfterEvent) => void,
        options?: EntityItemDropEventOptions,
    ): (arg0: EntityItemDropAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体已掉落物品时被调用的回调。
     *
     * Removes a callback from being called when an entity has
     * dropped items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityItemDropAfterEvent) => void): void;
}
