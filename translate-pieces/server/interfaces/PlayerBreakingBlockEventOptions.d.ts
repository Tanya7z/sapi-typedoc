/* IMPORT */ import { BlockFilter, EntityFilter, PlayerCancelBreakingBlockAfterEventSignal } from '..';

/**
 * @rc
 * 传递给 {@link PlayerStartBreakingBlockAfterEventSignal.subscribe} 或 {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe} 的接口，用于过滤哪些事件会传递给所提供的回调函数。
 *
 * An interface that is passed into {@link
 * PlayerStartBreakingBlockAfterEventSignal.subscribe} or
 * {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe}
 * that filters out which events are passed to the provided
 * callback.
 */
export interface PlayerBreakingBlockEventOptions {
    /**
     * @remarks
     * 回调函数应针对的 {@link BlockFilter}。如果未定义，回调函数将针对所有方块被调用。
     *
     * The {@link BlockFilter} that the callback should be called
     * for. If undefined, the callback will be called for all
     * blocks.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 回调函数应针对的 {@link EntityFilter}。如果未定义，回调函数将针对所有玩家被调用。
     *
     * The {@link EntityFilter} that the callback should be called
     * for. If undefined, the callback will be called for all
     * players.
     *
     */
    playerFilter?: EntityFilter;
}
