/* IMPORT */ import { EntitySwingSource, HeldItemOption } from '..';

/**
 * 传递给 {@link @minecraft/server.PlayerSwingStartAfterEventSignal.subscribe} 的接口，用于过滤哪些事件会传递给所提供的回调函数。
 *
 * An interface that is passed into {@link
 * @minecraft/server.PlayerSwingStartAfterEventSignal.subscribe} that
 * filters out which events are passed to the provided
 * callback.
 */
export interface PlayerSwingEventOptions {
    /**
     * @remarks
     * 回调函数应针对的持有物品选项。如果未定义，无论玩家手中是否持有物品，回调函数都会被调用。
     *
     * The held item option that the callback should be called for.
     * If undefined, the callback will be called whether or not the
     * player is holding an item in their hand.
     *
     */
    heldItemOption?: HeldItemOption;
    /**
     * @remarks
     * 回调函数应针对的 {@link EntitySwingSource}。如果未定义，回调函数将针对所有挥动来源被调用。
     *
     * The {@link EntitySwingSource} that the callback should be
     * called for. If undefined, the callback will be called for
     * all swing sources.
     *
     */
    swingSource?: EntitySwingSource;
}
