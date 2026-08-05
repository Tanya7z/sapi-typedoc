/* IMPORT */ import { Block, ExplosionAfterEvent } from '..';

/**
 * 包含有关已发生的爆炸的信息。
 *
 * Contains information regarding an explosion that has
 * happened.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 `true`，则取消爆炸事件。
     *
     * If set to true, cancels the explosion event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 更新受此爆炸事件影响的方法集合。
     *
     * Updates a collection of blocks impacted by this explosion
     * event.
     *
     * @param blocks
     * 受此爆炸影响的新方块列表。
     *
     * New list of blocks that are impacted by this explosion.
     */
    setImpactedBlocks(blocks: Block[]): void;
}
