/* IMPORT */ import { ExplosionAfterEvent } from '..';

/**
 * 管理与爆炸发生时相关的回调。
 *
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在爆炸发生时被调用。
     *
     * Adds a callback that will be called when an explosion
     * occurs.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在爆炸发生时不再被调用。
     *
     * Removes a callback from being called when an explosion
     * occurs.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}
