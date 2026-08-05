/**
 * @beta
 * 描述单个旗帜图案，包括颜色和图案类型。
 * 
 * Describes a single banner pattern, which includes a colour
 * and a pattern type.
 */
export class BannerPattern {
    private constructor();
    /**
     * @remarks
     * 应用于此旗帜图案的颜色。
     * 
     * The color to apply to this banner pattern.
     *
     */
    readonly color: string;
    /**
     * @remarks
     * 应用于旗帜的图案类型（例如渐变、V 形、十字等）。
     * 
     * The pattern type (e.g. gradient, chevron, cross, etc.) to
     * apply to the banner.
     *
     */
    readonly pattern: string;
}
