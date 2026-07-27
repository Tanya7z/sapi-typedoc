/**
 * 包含实体效果的附加选项。
 *
 * Contains additional options for entity effects.
 */
export interface EntityEffectOptions {
    /**
     * @remarks
     * 效果的强度。
     *
     * The strength of the effect.
     *
     */
    amplifier?: number;
    /**
     * @remarks
     * 如果为 `true`，效果作用于实体时会显示粒子。
     *
     * If true, will show particles when effect is on the entity.
     *
     */
    showParticles?: boolean;
}
