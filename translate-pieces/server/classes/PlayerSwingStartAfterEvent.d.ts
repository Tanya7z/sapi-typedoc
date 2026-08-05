/* IMPORT */ import { EntitySwingSource, ItemStack, Player } from '..';

/**
 * 包含有关玩家开始挥动手臂的信息。
 *
 * Contains information regarding a player starting to swing
 * their arm.
 */
export class PlayerSwingStartAfterEvent {
    private constructor();
    /**
     * 玩家在挥动开始时持有的物品堆。
     *
     * @remarks
     * The item stack being held by the player at the start of
     * their swing.
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 玩家挥动的来源，参见 {@link EntitySwingSource}。
     *
     * @remarks
     * The source of the Player swing, see {@link
     * EntitySwingSource}.
     *
     */
    readonly swingSource: EntitySwingSource;
}
