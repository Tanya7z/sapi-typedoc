/* IMPORT */ import { Block, Direction, ItemStack, Player, Vector3 } from '..';

/**
 * 包含有关玩家与方块交互之前的事件信息。
 *
 * Contains information regarding an event before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    /**
     * 将被交互的方块。
     *
     * @remarks
     * The block that will be interacted with.
     *
     */
    readonly block: Block;
    /**
     * 正在被交互的方块面。
     *
     * @remarks
     * The face of the block that is being interacted with.
     *
     */
    readonly blockFace: Direction;
    /**
     * 如果设置为 `true`，交互将被取消。
     *
     * @remarks
     * If set to true the interaction will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * 相对于方块底部西北角的物品放置位置。
     *
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * 如果事件是在玩家初始交互按钮按下时触发的，则为 `true`；如果在按住交互按钮时触发的事件，则为 `false`。
     *
     * @remarks
     * This value will be true if the event was triggered on
     * players initial interaction button press and false on events
     * triggered from holding the interaction button.
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * 交互中正在使用的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
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
}
