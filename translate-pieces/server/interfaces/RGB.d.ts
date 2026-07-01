/**
 * 表示 Minecraft 中完全可自定义的颜色。
 *
 * Represents a fully customizable color within Minecraft.
 */
export interface RGB {
    /**
     * @remarks
     * 确定颜色的蓝色分量。有效值在 0 到 1.0 之间。
     *
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     *
     */
    blue: number;
    /**
     * @remarks
     * 确定颜色的绿色分量。有效值在 0 到 1.0 之间。
     *
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     *
     */
    green: number;
    /**
     * @remarks
     * 确定颜色的红色分量。有效值在 0 到 1.0 之间。
     *
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     *
     */
    red: number;
}
