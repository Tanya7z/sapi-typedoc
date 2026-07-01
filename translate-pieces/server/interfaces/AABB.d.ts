/* IMPORT */ import { Vector3 } from '..';

/**
 * 轴对齐的包围盒。
 *
 * Axis-aligned bounding box.
 */
export interface AABB {
    /**
     * @remarks
     * 盒体的中心点。
     *
     * The centerpoint of the box.
     *
     */
    center: Vector3;
    /**
     * @remarks
     * 从中心点到盒体边界的绝对距离。相当于盒体长度、高度和宽度的一半。始终被视为正值。
     *
     * Absolute distance from the centerpoint to the bounds of the
     * box. Equivalent to half of the box's length, height and
     * width. Will always be treated as positive.
     *
     */
    extent: Vector3;
}
