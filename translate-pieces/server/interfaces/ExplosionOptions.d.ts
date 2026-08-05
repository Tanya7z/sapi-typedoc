/* IMPORT */ import { Entity } from '..';

/**
 * {@link Dimension.createExplosion} 方法的附加配置选项。
 * @seeExample createNoBlockExplosion.ts
 * @seeExample createExplosions.ts
 *
 * Additional configuration options for the {@link
 * Dimension.createExplosion} method.
 */
export interface ExplosionOptions {
    /**
     * @remarks
     * 爆炸是否也会影响水下区域。
     *
     * Whether parts of the explosion also impact underwater.
     *
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * 爆炸是否会破坏爆炸半径内的方块。
     *
     * Whether the explosion will break blocks within the blast
     * radius.
     *
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * 如果为 `true`，爆炸会在爆炸半径内或附近伴随火焰。
     *
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     *
     */
    causesFire?: boolean;
    /**
     * @remarks
     * 可选的爆炸来源。
     *
     * Optional source of the explosion.
     *
     */
    source?: Entity;
}
