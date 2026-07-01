/**
 * 指定放置结构时应如何镜像。
 *
 * Specifies how a structure should be mirrored when placed.
 */
export enum StructureMirrorAxis {
    /**
     * @remarks
     * 不镜像。
     *
     * No mirroring.
     *
     */
    None = 'None',
    /**
     * @remarks
     * 结构沿 X 轴镜像。
     *
     * Structure is mirrored across the X axis.
     *
     */
    X = 'X',
    /**
     * @remarks
     * 结构沿 X 和 Z 轴镜像。
     *
     * Structure is mirrored across both the X and Z axes.
     *
     */
    XZ = 'XZ',
    /**
     * @remarks
     * 结构沿 Z 轴镜像。
     *
     * Structure is mirrored across the Z axis.
     *
     */
    Z = 'Z',
}
