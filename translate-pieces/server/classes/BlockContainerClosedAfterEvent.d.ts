/* IMPORT */ import { BlockEvent, ContainerAccessSource } from '..';

/**
 * 包含有关特定容器方块被关闭的信息。
 * 
 * Contains information regarding a specific container block
 * being closed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerClosedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被关闭的方块容器的来源。
     * 
     * The source of the block container being closed.
     *
     * @worldMutation
     *
     */
    closeSource: ContainerAccessSource;
}
