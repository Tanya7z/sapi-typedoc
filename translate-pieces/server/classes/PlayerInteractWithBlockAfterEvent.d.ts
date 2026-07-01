/* IMPORT */ import { Block, Direction, ItemStack, Player, Vector3 } from '..';

/**
 * 包含关于玩家成功与方块交互后事件的信息。
 *
 * Contains information regarding an event after a player successfully interacts with a block.
 */
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 交互成功前的物品堆，如果为空手则为 `undefined`。
     *
     * The ItemStack before the interaction succeeded, or undefined if hand is empty.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 将要被交互的方块。
     *
     * The block that will be interacted with.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在被交互的方块面。
     *
     * The face of the block that is being interacted with.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的位置，物品将放置在此处。
     *
     * Location relative to the bottom north-west corner of the block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件是在玩家首次按下交互按钮时触发的，此值为 `true`；如果是按住交互按钮时触发的事件，则为 `false`。
     *
     * This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button.
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 交互成功后的物品堆，如果为空手则为 `undefined`。
     *
     * The ItemStack after the interaction succeeded, or undefined if hand is empty.
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
}
