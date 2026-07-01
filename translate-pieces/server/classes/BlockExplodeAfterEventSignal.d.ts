/* IMPORT */ import { BlockExplodeAfterEvent } from '..';

/**
 * 管理与爆炸发生时相关回调，当爆炸影响单个方块时触发。
 * 
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在爆炸发生时调用的回调，当爆炸影响单个方块时触发。
     * 
     * Adds a callback that will be called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在爆炸发生时调用的回调。
     * 
     * Removes a callback from being called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}
