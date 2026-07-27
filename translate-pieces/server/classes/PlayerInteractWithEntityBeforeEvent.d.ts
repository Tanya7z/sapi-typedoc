/* IMPORT */ import { Entity, ItemStack, Player } from '..';

/**
 * 包含关于玩家与实体交互前事件的信息。
 *
 * Contains information regarding an event before a player interacts with an entity.
 */
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 `true`，交互将被取消。
     *
     * If set to true the interaction will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 交互中正在使用的物品堆，如果为空手则为 `undefined`。
     *
     * The item stack that is being used in the interaction, or undefined if empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 将要被交互的实体。
     *
     * The entity that will be interacted with.
     *
     */
    readonly target: Entity;
}
