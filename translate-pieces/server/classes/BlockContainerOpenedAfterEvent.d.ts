/* IMPORT */ import { BlockEvent, ContainerAccessSource } from '..';

/**
 * 包含有关特定容器方块被打开的信息。
 * 
 * Contains information regarding a specific container block
 * being opened.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerOpenedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被打开的方块容器的来源。
     * 
     * The source of the block container being opened.
     *
     * @worldMutation
     *
     */
    openSource: ContainerAccessSource;
}
