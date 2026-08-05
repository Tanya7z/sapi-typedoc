/* IMPORT */ import { VectorXZ } from '../../server';

/**
 * 对 VectorXZ 对象执行操作的实用工具类。所有方法均为静态方法，且不会修改输入对象。
 *
 * Utilities operating on VectorXZ objects. All methods are static and do not modify the input objects.
 *
 * @public
 */
export declare class VectorXZUtils {
    /**
     * equals
     *
     * 检查两个向量是否相等。
     *
     * Check the equality of two vectors
     */
    static equals(v1: VectorXZ, v2: VectorXZ): boolean;
    /**
     * add
     *
     * 将两个向量相加，生成一个新向量。
     *
     * Add two vectors to produce a new vector
     */
    static add(v1: VectorXZ, v2: Partial<VectorXZ>): VectorXZ;
    /**
     * subtract
     *
     * 将第二个向量从第一个向量中减去，生成一个新向量（v1-v2）。
     *
     * Subtract two vectors to produce a new vector (v1-v2)
     */
    static subtract(v1: VectorXZ, v2: Partial<VectorXZ>): VectorXZ;
    /** scale
     *
     * 将向量的所有分量乘以一个标量，生成一个新向量。
     *
     * Multiple all entries in a vector by a single scalar value producing a new vector
     */
    static scale(v1: VectorXZ, scale: number): VectorXZ;
    /**
     * dot
     *
     * 计算两个向量的点积。
     *
     * Calculate the dot product of two vectors
     */
    static dot(a: VectorXZ, b: VectorXZ): number;
    /**
     * magnitude
     *
     * 向量的模长。
     *
     * The magnitude of a vector
     */
    static magnitude(v: VectorXZ): number;
    /**
     * distance
     *
     * 计算两个向量之间的距离。
     *
     * Calculate the distance between two vectors
     */
    static distance(a: VectorXZ, b: VectorXZ): number;
    /**
     * normalize
     *
     * 将向量归一化为单位向量。
     *
     * Takes a vector 3 and normalizes it to a unit vector
     */
    static normalize(v: VectorXZ): VectorXZ;
    /**
     * floor
     *
     * 对向量的各个分量向下取整，生成一个新向量。
     *
     * Floor the components of a vector to produce a new vector
     */
    static floor(v: VectorXZ): VectorXZ;
    /**
     * toString
     *
     * 创建向量的字符串表示形式。
     *
     * Create a string representation of a vectorxz
     */
    static toString(v: VectorXZ, options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * fromString
     *
     * 从 {@link VectorXZUtils.toString} 生成的字符串表示形式中获取 VectorXZ。如果任何数值不是数字，或格式无效，则返回 undefined。
     *
     * Gets a VectorXZ from the string representation produced by {@link VectorXZUtils.toString}. If any numeric value is not a number
     * or the format is invalid, undefined is returned.
     * @param str - 要解析的字符串。
     *
     * The string to parse
     * @param delimiter - 用于分隔各分量的分隔符。默认为 {@link VectorXZUtils.toString} 的默认值。
     *
     * The delimiter used to separate the components. Defaults to the same as the default for {@link VectorXZUtils.toString}
     */
    static fromString(str: string, delimiter?: string): VectorXZ | undefined;
    /**
     * clamp
     *
     * 将向量的各个分量限制在给定范围内，生成一个新向量。
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    static clamp(v: VectorXZ, limits?: {
        min?: Partial<VectorXZ>;
        max?: Partial<VectorXZ>;
    }): VectorXZ;
    /**
     * lerp
     *
     * 使用两个向量之间各分量的线性插值构造一个新向量。
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    static lerp(a: VectorXZ, b: VectorXZ, t: number): VectorXZ;
    /**
     * slerp
     *
     * 使用两个向量之间各分量的球面线性插值构造一个新向量。
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    static slerp(a: VectorXZ, b: VectorXZ, t: number): VectorXZ;
    /**
     * multiply
     *
     * 两个向量按元素相乘。
     * 不要与 {@link VectorXZUtils.dot} 乘积混淆。
     *
     * Element-wise multiplication of two vectors together.
     * Not to be confused with {@link VectorXZUtils.dot} product
     */
    static multiply(a: VectorXZ, b: VectorXZ): VectorXZ;
}
