/* IMPORT */ import { RGB } from '..';

/**
 * 表示 Minecraft 中完全可自定义的颜色。
 *
 * Represents a fully customizable color within Minecraft.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface RGBA extends RGB {
    /**
     * @remarks
     * 确定颜色的 alpha（不透明度）分量。有效值在 0（透明）到 1.0（不透明）之间。
     *
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     *
     */
    alpha: number;
}
