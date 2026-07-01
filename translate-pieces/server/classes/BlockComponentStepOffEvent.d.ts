/* IMPORT */ import { BlockEvent, Entity } from '..';

/**
 * 包含有关实体离开特定方块的信息。
 * 
 * Contains information regarding an entity stepping off a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 离开方块的实体。
     * 
     * The entity that stepped off the block.
     *
     */
    readonly entity?: Entity;
}
