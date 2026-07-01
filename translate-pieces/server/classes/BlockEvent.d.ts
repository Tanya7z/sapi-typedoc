/* IMPORT */ import { Block, Dimension } from '..';

/**
 * 包含有关影响特定方块的事件的信息。
 * 
 * Contains information regarding an event that impacts a
 * specific block.
 */
export class BlockEvent {
    private constructor();
    /**
     * @remarks
     * 当前世界中此事件所在位置的方块。
     * 
     * Block currently in the world at the location of this event.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 包含此事件主题方块的维度。
     * 
     * Dimension that contains the block that is the subject of
     * this event.
     *
     */
    readonly dimension: Dimension;
}
