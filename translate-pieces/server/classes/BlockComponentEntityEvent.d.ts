/* IMPORT */ import { BlockEvent, BlockPermutation, Entity } from '..';

/**
 * 包含有关实体向世界中此方块发送事件的信息。
 * 
 * Contains information regarding an event sent by an entity to
 * this block in the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回接收事件的方块的置换信息。
     * 
     * Returns permutation information about the block receiving
     * the event.
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 发送事件的实体。
     * 
     * The entity that sent the event.
     *
     */
    readonly entitySource: Entity;
    /**
     * @remarks
     * 实体触发的事件的名称。
     * 
     * Name of the event fired by the entity.
     *
     */
    readonly name: string;
}
