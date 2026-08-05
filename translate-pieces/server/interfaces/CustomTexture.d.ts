export interface CustomTexture {
    /**
     * @remarks
     * 图标的相对高度。值必须在 0.0 到 1.0 之间（含）。
     *
     * The height of the icon, in relative units. Value must be
     * between 0.0 and 1.0, inclusive.
     *
     * Bounds: [0, 1]
     */
    iconHeight: number;
    /**
     * @remarks
     * 图标的相对宽度。值必须在 0.0 到 1.0 之间（含）。
     *
     * The width of the icon, in relative units. Value must be
     * between 0.0 and 1.0, inclusive.
     *
     * Bounds: [0, 1]
     */
    iconWidth: number;
    /**
     * @remarks
     * 自定义纹理的资源路径。这应是一个有效的纹理资源字符串路径。
     *
     * The resource path to the custom texture. This should be a
     * valid string path to a texture asset.
     *
     */
    path: string;
}
