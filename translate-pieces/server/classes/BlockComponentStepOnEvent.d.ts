/* IMPORT */ import { BlockEvent, Entity } from '..';

/**
 * 包含有关实体踩上特定方块的信息。
 * 
 * Contains information regarding an entity stepping onto a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 踩上方块的实体。
     * 
     * The entity that stepped on the block.
     *
     */
    readonly entity?: Entity;
}
