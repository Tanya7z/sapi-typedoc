/* IMPORT */ import { BlockVolumeBase, BlockVolumeIntersection, Vector3 } from '..';

/**
 * BlockVolume 是一个简单的接口对象，表示在方块世界位置处给定大小的 3D 矩形（以方块计）。
 * 注意这些并不等同于"min"和"max"值，因为向量分量不保证按任何顺序排列。
 * 此外，这些向量位置不可与 BlockLocation 互换。
 * 如果您想将此体积表示为 BlockLocation 范围，可以使用 getBoundingBox 实用函数。
 * 此体积类将保持最初设置的角落索引的顺序。想象一下，每个角落都在编辑器中分配——当您移动角落时（可能会反转边界的 min/max 关系）——
 * 您最初选择为顶部/左侧的角落通常会变成底部/右侧。
 * 在手动编辑这些类型的体积时，您需要在编辑时保持角落的标识——BlockVolume 实用函数正是这样做的。
 * 
 * 需要注意的是，这是测量方块大小（从/到）——一个普通的 AABB (0,0,0) 到 (0,0,0) 传统上大小为 (0,0,0)，
 * 但是，因为我们测量的是方块，BlockVolume 的大小或跨度实际上将是 (1,1,1)。
 * 
 * A BlockVolume is a simple interface to an object which
 * represents a 3D rectangle of a given size (in blocks) at a
 * world block location.
 * Note that these are not analogous to "min" and "max" values,
 * in that the vector components are not guaranteed to be in
 * any order.
 * In addition, these vector positions are not interchangeable
 * with BlockLocation.
 * If you want to get this volume represented as range of of
 * BlockLocations, you can use the getBoundingBox utility
 * function.
 * This volume class will maintain the ordering of the corner
 * indexes as initially set. imagine that each corner is
 * assigned in Editor - as you move the corner around
 * (potentially inverting the min/max relationship of the
 * bounds) - what
 * you had originally selected as the top/left corner would
 * traditionally become the bottom/right.
 * When manually editing these kinds of volumes, you need to
 * maintain the identity of the corner as you edit - the
 * BlockVolume utility functions do this.
 *
 * Important to note that this measures block sizes (to/from) -
 * a normal AABB (0,0,0) to (0,0,0) would traditionally be of
 * size (0,0,0)
 * However, because we're measuring blocks - the size or span
 * of a BlockVolume would actually be (1,1,1)
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * 表示 3D 矩形中一个角落的世界方块位置。
     * 
     * A world block location that represents a corner in a 3D
     * rectangle
     *
     */
    'from': Vector3;
    /**
     * @remarks
     * 表示 3D 矩形中对角角落的世界方块位置。
     * 
     * A world block location that represents the opposite corner
     * in a 3D rectangle
     *
     */
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    /**
     * @remarks
     * 检查给定位置是否直接与 BlockVolume 的外表面相邻。
     * 
     * Check to see if the given location is directly adjacent to
     * the outer surface of a BlockVolume.
     *
     *
     * @param pos
     * 要测试的世界方块位置。
     * 
     * The world block location to test
     * @returns
     * 如果该位置在内部或距离超过 0 个方块，则返回 `false`。
     * 如果该位置直接接触 BlockVolume 的外表面，则返回 `true`。
     * 
     * If the location is either inside or more than 0 blocks away,
     * the function will return false.
     * If the location is directly contacting the outer surface of
     * the BlockVolume, the function will return true.
     */
    doesLocationTouchFaces(pos: Vector3): boolean;
    /**
     * @remarks
     * 检查两个方块体积是否直接相邻且两个面接触。
     * 
     * Check to see if a two block volumes are directly adjacent
     * and two faces touch.
     *
     * @param other
     * 要测试的体积。
     * 
     * The volume to test
     * @returns
     * 如果两个方块体积的外表面在任何点接触且直接相邻，返回 `true`。
     * 
     * If the outer faces of both block volumes touch and are
     * directly adjacent at any point, return true.
     */
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    /**
     * @remarks
     * 返回表示两个 BlockVolume 对象之间交集的枚举。
     * 
     * Return an enumeration which represents the intersection
     * between two BlockVolume objects
     *
     */
    intersects(other: BlockVolume): BlockVolumeIntersection;
}
