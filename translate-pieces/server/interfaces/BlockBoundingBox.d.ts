/* IMPORT */ import { BlockBoundingBoxUtils, Vector3 } from '..';

/**
 * `BlockBoundingBox` 是一个接口，表示一个轴对齐的矩形 AABB。
 * `BlockBoundingBox` 假设它在创建时处于有效状态（min <= max），但无法保证这一点（除非使用相关的 {@link BlockBoundingBoxUtils} 工具函数创建）。
 * min/max 坐标表示矩形对角相对的顶点。
 * `BlockBoundingBox` 并不表示方块——它与任何类型无关，只是一个数学结构——因此一个
 * ( 0,0,0 ) -> ( 0,0,0 )
 * 的矩形其大小为 ( 0,0,0 )（与非常相似的 {@link BlockVolume} 对象不同）。
 *
 * A BlockBoundingBox is an interface to an object which
 * represents an AABB aligned rectangle.
 * The BlockBoundingBox assumes that it was created in a valid
 * state (min <= max) but cannot guarantee it (unless it was
 * created using the associated {@link BlockBoundingBoxUtils}
 * utility functions.
 * The min/max coordinates represent the diametrically opposite
 * corners of the rectangle.
 * The BlockBoundingBox is not a representation of blocks - it
 * has no association with any type, it is just a mathematical
 * construct - so a rectangle with
 * ( 0,0,0 ) -> ( 0,0,0 )
 * has a size of ( 0,0,0 ) (unlike the very similar {@link
 * BlockVolume} object)
 */
export interface BlockBoundingBox {
    /**
     * @remarks
     * 一个 {@link Vector3}，表示矩形的最大角。
     *
     * A {@link Vector3} that represents the largest corner of the
     * rectangle
     *
     */
    max: Vector3;
    /**
     * @remarks
     * 一个 {@link Vector3}，表示矩形的最小角。
     *
     * A {@link Vector3} that represents the smallest corner of the
     * rectangle
     *
     */
    min: Vector3;
}
