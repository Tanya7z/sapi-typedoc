/* IMPORT */ import { BlockBoundingBox, Vector3 } from '..';

/**
 * @beta
 * 边界框工具类，提供许多用于创建和使用 {@link BlockBoundingBox}
 * 对象的有用函数。
 * 
 * Bounding Box Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * BlockBoundingBox} objects
 */
export class BlockBoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * 创建一个经过验证的 {@link BlockBoundingBox} 实例，其中 min 和 max 分量保证满足 (min <= max)。
     * 
     * Create a validated instance of a {@link BlockBoundingBox}
     * where the min and max components are guaranteed to be (min
     * <= max)
     *
     * @worldMutation
     *
     * @param min
     * 一个角落的世界坐标位置。
     * 
     * A corner world location
     * @param max
     * 对角线相对的另一个角落的世界坐标位置。
     * 
     * A corner world location diametrically opposite
     */
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 沿各轴按给定大小扩展一个 {@link BlockBoundingBox}。
     * 大小可以为负数以实现收缩。
     * 注意：如果收缩大小大于跨度，角落可能被反转，但 min/max 关系将保持正确。
     * 
     * Expand a {@link BlockBoundingBox} by a given amount along
     * each axis.
     * Sizes can be negative to perform contraction.
     * Note: corners can be inverted if the contraction size is
     * greater than the span, but the min/max relationship will
     * remain correct
     *
     * @worldMutation
     *
     * @returns
     * 返回一个新的 {@link BlockBoundingBox} 对象，表示更改后的结果。
     * 
     * Return a new {@link BlockBoundingBox} object representing
     * the changes
     */
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 检查两个 {@link BlockBoundingBox} 对象是否完全相同。
     * 
     * Check if two {@link BlockBoundingBox} objects are identical
     *
     * @worldMutation
     *
     */
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 扩展初始 box 对象的边界以包含第二个 box 参数。
     * 生成的 {@link BlockBoundingBox} 对象将是一个恰好包含这两个盒子的 BlockBoundingBox。
     * 
     * Expand the initial box object bounds to include the 2nd box
     * argument.  The resultant {@link BlockBoundingBox} object
     * will be a BlockBoundingBox which exactly encompasses the two
     * boxes.
     *
     * @worldMutation
     *
     * @returns
     * 一个新的 {@link BlockBoundingBox} 实例，表示能够同时包含两者的最小可能边界框。
     * 
     * A new {@link BlockBoundingBox} instance representing the
     * smallest possible bounding box which can encompass both
     */
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    /**
     * @remarks
     * 计算给定 {@link BlockBoundingBox} 对象的中心方块。
     * 
     * Calculate the center block of a given {@link
     * BlockBoundingBox} object.
     *
     * @worldMutation
     *
     * @returns
     * 注意 {@link BlockBoundingBox} 对象表示完整的方块，因此具有奇数边界的盒子的中心在数学上并不居中。
     * 例如，BlockBoundingBox(0,0,0 -> 3,3,3) 的中心为 (1,1,1)（而不是预期的 (1.5,1.5,1.5)）。
     * 
     * Note that {@link BlockBoundingBox} objects represent whole
     * blocks, so the center of boxes which have odd numbered
     * bounds are not mathematically centered...
     * i.e. a BlockBoundingBox( 0,0,0 -> 3,3,3 )  would have a
     * center of (1,1,1)  (not (1.5, 1.5, 1.5) as expected)
     */
    static getCenter(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 计算表示两个相交 BlockBoundingBox 的并集区域的 BlockBoundingBox。
     * 
     * Calculate the BlockBoundingBox which represents the union
     * area of two intersecting BlockBoundingBoxes
     *
     * @worldMutation
     *
     */
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    /**
     * @remarks
     * 获取 BlockBoundingBox 各轴分量的跨度。
     * 
     * Get the Span of each of the BlockBoundingBox Axis components
     *
     * @worldMutation
     *
     */
    static getSpan(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 检查两个 BlockBoundingBox 对象是否相交。
     * 
     * Check to see if two BlockBoundingBox objects intersect
     *
     * @worldMutation
     *
     */
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 检查给定的坐标是否在 BlockBoundingBox 内部。
     * 
     * Check to see if a given coordinate is inside a
     * BlockBoundingBox
     *
     * @worldMutation
     *
     */
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * 检查 BlockBoundingBox 是否有效（即 min <= max）。
     * 
     * Check to see if a BlockBoundingBox is valid (i.e. (min <=
     * max))
     *
     * @worldMutation
     *
     */
    static isValid(box: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 按给定量移动 BlockBoundingBox。
     * 
     * Move a BlockBoundingBox by a given amount
     *
     * @worldMutation
     *
     * @returns
     * 返回一个新的 BlockBoundingBox 对象，表示移动后的结果。
     * 
     * Return a new BlockBoundingBox object which represents the
     * change
     */
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}
