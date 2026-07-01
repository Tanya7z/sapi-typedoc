/* IMPORT */ import { Entity, ItemStack, Player } from '..';

/**
 * 包含有关玩家成功与实体交互之后的事件信息。
 *
 * Contains information regarding an event after a player
 * successfully interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * 交互成功前的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The ItemStack before the interaction succeeded, or undefined
     * if hand is empty.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * 交互成功后的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The ItemStack after the interaction succeeded, or undefined
     * if hand is empty.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 将被交互的实体。
     *
     * @remarks
     * The entity that will be interacted with.
     *
     */
    readonly target: Entity;
}
