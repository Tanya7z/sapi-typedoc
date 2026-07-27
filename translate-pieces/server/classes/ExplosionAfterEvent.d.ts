/* IMPORT */ import { Block, Dimension, Entity } from '..';

/**
 * 包含有关已发生的爆炸的信息。
 *
 * Contains information regarding an explosion that has
 * happened.
 */
export class ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 爆炸发生的维度。
     *
     * Dimension where the explosion has occurred.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 爆炸的可选来源。
     *
     * Optional source of the explosion.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 受此爆炸事件影响的方块集合。
     *
     * A collection of blocks impacted by this explosion event.
     *
     */
    getImpactedBlocks(): Block[];
}
