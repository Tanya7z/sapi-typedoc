/* IMPORT */ import { BlockEvent, Entity } from '..';

/**
 * 包含有关实体摔落到特定方块上的信息。
 * 
 * Contains information regarding an entity falling onto a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 摔落到方块上的实体。
     * 
     * The entity that fell onto the block.
     *
     */
    readonly entity?: Entity;
    /**
     * @remarks
     * 实体摔落到此方块上的距离。
     * 
     * The distance that the entity fell onto this block with.
     *
     */
    readonly fallDistance: number;
}
