/* IMPORT */ import { AABB, BlockVolume, Vector3 } from '../../server';

/**
 * 对 AABB 对象执行操作的实用工具类。所有方法均为静态方法，且不会修改输入对象。
 *
 * Utilities operating on AABB objects. All methods are static and do not modify the input objects.
 *
 * @public
 */
export declare class AABBUtils {
    private constructor();
    /**
     * EPSILON
     *
     * 内部 epsilon 值，用于确定有效性以及设置方块体积容差。
     *
     * The internal epsilon value that determines validity and used for block volume tolerance.
     */
    static EPSILON: number;
    /**
     * createFromCornerPoints
     *
     * 根据定义其角点的点获取 AABB，点的顺序不限。
     *
     * Gets an AABB from points defining it's corners, the order doesn't matter.
     * @param pointA - 第一个角点。
     *
     * The first corner point.
     * @param pointB - 第二个角点。
     *
     * The second corner point.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if the resulting AABB is invalid.
     *
     * @returns - 生成的 AABB。
     *
     * The resulting AABB.
     */
    static createFromCornerPoints(pointA: Vector3, pointB: Vector3): AABB;
    /**
     * isValid
     *
     * 确定 AABB 是否在所有轴上都具有非零范围。
     *
     * Determines if the AABB has non-zero extent on all axes.
     * @param aabb - 要测试有效性的 AABB。
     *
     * The AABB to test for validity.
     * @returns - 如果所有范围轴均非零，则为 true；否则为 false。
     *
     * True if all extent axes are non-zero, otherwise false.
     */
    static isValid(aabb: AABB): boolean;
    /**
     * throwErrorIfInvalid
     *
     * 如果 AABB 无效，则抛出错误。
     *
     * Throws an error if the AABB is invalid.
     * @param aabb - 要测试有效性的 AABB。
     *
     * The AABB to test for validity.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if the input AABB is invalid.
     */
    static throwErrorIfInvalid(aabb: AABB): void;
    /**
     * equals
     *
     * 比较两个 AABB 是否相等。
     *
     * Compares the equality of two AABBs.
     * @param aabb - 用于比较的第一个 AABB。
     *
     * The first AABB in the comparison.
     * @param other - 用于比较的第二个 AABB。
     *
     * The second AABB in the comparison.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if either of the input AABBs are invalid.
     *
     * @returns - 如果两个 AABB 的中心点和范围均相等，则为 true。
     *
     * True if the center and extent of both AABBs are equal.
     */
    static equals(aabb: AABB, other: AABB): boolean;
    /**
     * getMin
     *
     * 获取 AABB 的最小角点。
     *
     * Gets the minimum corner of an AABB.
     * @param aabb - 要获取最小角点的 AABB。
     *
     * The AABB to retrieve the minimum corner of.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if the input AABB is invalid.
     *
     * @returns - AABB 的最小角点。
     *
     * The minimum corner of the AABB.
     */
    static getMin(aabb: AABB): Vector3;
    /**
     * getMax
     *
     * 获取 AABB 的最大角点。
     *
     * Gets the maximum corner of an AABB.
     * @param aabb - 要获取最大角点的 AABB。
     *
     * The AABB to retrieve the maximum corner of.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if the input AABB is invalid.
     *
     * @returns - AABB 的最大角点。
     *
     * The maximum corner of the AABB.
     */
    static getMax(aabb: AABB): Vector3;
    /**
     * getSpan
     *
     * 获取 AABB 的跨度。
     *
     * Gets the span of an AABB.
     * @param aabb - 要获取跨度的 AABB。
     *
     * The AABB to retrieve the span of.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if the input AABB is invalid.
     *
     * @returns - AABB 的跨度。
     *
     * The span of the AABB.
     */
    static getSpan(aabb: AABB): Vector3;
    /**
     * getBlockVolume
     *
     * 创建包含源 AABB 全部范围的最小 BlockVolume。
     *
     * Creates the smallest BlockVolume that includes all of a source AABB.
     * @param aabb - 源 AABB。
     *
     * The source AABB.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if the input AABB is invalid.
     *
     * @returns - 包含源 AABB 的 BlockVolume。
     *
     * The BlockVolume containing the source AABB.
     */
    static getBlockVolume(aabb: AABB): BlockVolume;
    /**
     * translate
     *
     * 根据源 AABB 和平移向量创建平移后的 AABB。
     *
     * Creates a translated AABB given a source AABB and translation vector.
     * @param aabb - 源 AABB。
     *
     * The source AABB.
     * @param delta - 要加到 AABB 中心点上的平移向量。
     *
     * The translation vector to add to the AABBs center.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if the input AABB is invalid.
     *
     * @returns - 平移后的 AABB。
     *
     * The resulting translated AABB.
     */
    static translate(aabb: AABB, delta: Vector3): AABB;
    /**
     * dilate
     *
     * 根据源 AABB 和膨胀向量创建膨胀后的 AABB。
     *
     * Creates a dilated AABB given a source AABB and dilation vector.
     * @param aabb - 源 AABB。
     *
     * The source AABB.
     * @param size - 要加到 AABB 范围上的膨胀向量。
     *
     * The dilation vector to add to the AABBs extent.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if the input AABB is invalid.
     *
     * @returns - 膨胀后的 AABB。
     *
     * The resulting dilated AABB.
     */
    static dilate(aabb: AABB, size: Vector3): AABB;
    /**
     * expand
     *
     * 根据两个源 AABB 创建扩展后的 AABB。
     *
     * Creates an expanded AABB given two source AABBs.
     * @param aabb - 第一个源 AABB。
     *
     * The first source AABB.
     * @param other - 第二个源 AABB。
     *
     * The second source AABB.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if either of the input AABBs are invalid.
     *
     * @returns - 扩展后的 AABB。
     *
     * The resulting expanded AABB.
     */
    static expand(aabb: AABB, other: AABB): AABB;
    /**
     * getIntersection
     *
     * 创建两个源 AABB 相交区域的 AABB。
     *
     * Creates an AABB of the intersecting area of two source AABBs.
     * @param aabb - 第一个源 AABB。
     *
     * The first source AABB.
     * @param other - 第二个源 AABB。
     *
     * The second source AABB.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if either of the input AABBs are invalid.
     *
     * @returns - 如果两个 AABB 相交，则返回相交区域的 AABB；否则返回 undefined。
     *
     * The resulting intersecting AABB if they intersect, otherwise returns undefined.
     */
    static getIntersection(aabb: AABB, other: AABB): AABB | undefined;
    /**
     * intersects
     *
     * 计算两个 AABB 是否相交。
     *
     * Calculates if two AABBs are intersecting.
     * @param aabb - 第一个 AABB。
     *
     * The first AABB.
     * @param other - 第二个 AABB。
     *
     * The second AABB.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if either of the input AABBs are invalid.
     *
     * @returns - 如果两个 AABB 相交，则为 true；否则为 false。
     *
     * True if the AABBs are intersecting, otherwise false.
     */
    static intersects(aabb: AABB, other: AABB): boolean;
    /**
     * isInside
     *
     * 计算某个位置是否位于 AABB 内部。
     *
     * Calculates if a position is inside of an AABB.
     * @param aabb - 用于测试的 AABB。
     *
     * The AABB to test against.
     * @param pos - 要测试的位置。
     *
     * The position to test.
     * @throws {@link AABBInvalidExtentError}
     * This exception is thrown if the input AABB is invalid.
     *
     * @returns 如果位置位于 AABB 内部，则为 true；否则返回 false。
     *
     * True if the position is inside of the AABB, otherwise returns false.
     */
    static isInside(aabb: AABB, pos: Vector3): boolean;
}
