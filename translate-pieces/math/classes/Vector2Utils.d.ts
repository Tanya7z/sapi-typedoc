/* IMPORT */ import { Vector2 } from '../../server';

/**
 * Utilities operating on Vector2 objects. All methods are static and do not modify the input objects.
 *
 * 操作 Vector2 对象的工具类。所有方法都是静态的，并且不会修改输入对象。
 *
 * @public
 */
export declare class Vector2Utils {
    /**
     * equals
     *
     * 判断两个向量是否相等。
     *
     * Check the equality of two vectors
     */
    static equals(v1: Vector2, v2: Vector2): boolean;
    /**
     * add
     *
     * 将两个向量相加，生成一个新向量。
     *
     * Add two vectors to produce a new vector
     */
    static add(v1: Vector2, v2: Partial<Vector2>): Vector2;
    /**
     * subtract
     *
     * 将两个向量相减，生成一个新向量 (v1-v2)。
     *
     * Subtract two vectors to produce a new vector (v1-v2)
     */
    static subtract(v1: Vector2, v2: Partial<Vector2>): Vector2;
    /** scale
     *
     * 将向量中的所有分量乘以一个标量值，生成一个新向量。
     *
     * Multiple all entries in a vector by a single scalar value producing a new vector
     */
    static scale(v1: Vector2, scale: number): Vector2;
    /**
     * dot
     *
     * 计算两个向量的点积。
     *
     * Calculate the dot product of two vectors
     */
    static dot(a: Vector2, b: Vector2): number;
    /**
     * magnitude
     *
     * 向量的模长。
     *
     * The magnitude of a vector
     */
    static magnitude(v: Vector2): number;
    /**
     * distance
     *
     * 计算两个向量之间的距离。
     *
     * Calculate the distance between two vectors
     */
    static distance(a: Vector2, b: Vector2): number;
    /**
     * normalize
     *
     * 将一个二维向量归一化为单位向量。
     *
     * Takes a vector 3 and normalizes it to a unit vector
     */
    static normalize(v: Vector2): Vector2;
    /**
     * floor
     *
     * 将向量的各分量向下取整，生成一个新向量。
     *
     * Floor the components of a vector to produce a new vector
     */
    static floor(v: Vector2): Vector2;
    /**
     * toString
     *
     * 创建 Vector2 的字符串表示形式。
     *
     * Create a string representation of a vector2
     *
     * 将 Vector2 转换为字符串形式。
     */
    static toString(v: Vector2, options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * fromString
     *
     * 从 {@link Vector2Utils.toString} 生成的字符串形式中解析出一个 Vector2。
     * 如果任何数值不是数字或格式无效，则返回 undefined。
     *
     * Gets a Vector2 from the string representation produced by {@link Vector2Utils.toString}. If any numeric value is not a number
     * or the format is invalid, undefined is returned.
     * @param str - 要解析的字符串
     *
     * The string to parse
     * @param delimiter - 用于分隔各分量的分隔符。默认与 {@link Vector2Utils.toString} 的默认值相同。
     *
     * The delimiter used to separate the components. Defaults to the same as the default for {@link Vector2Utils.toString}
     */
    static fromString(str: string, delimiter?: string): Vector2 | undefined;
    /**
     * clamp
     *
     * 将向量的各分量限制在指定的上下限范围内，生成一个新向量。
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    static clamp(v: Vector2, limits?: {
        min?: Partial<Vector2>;
        max?: Partial<Vector2>;
    }): Vector2;
    /**
     * lerp
     *
     * 使用两个向量各分量的线性插值构造一个新向量。
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    static lerp(a: Vector2, b: Vector2, t: number): Vector2;
    /**
     * slerp
     *
     * 使用两个向量各分量的球面线性插值构造一个新向量。
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    static slerp(a: Vector2, b: Vector2, t: number): Vector2;
    /**
     * multiply
     *
     * 对两个向量进行逐分量相乘。
     * 注意不要与 {@link Vector2Utils.dot}（点积）混淆。
     *
     * Element-wise multiplication of two vectors together.
     * Not to be confused with {@link Vector2Utils.dot} product
     */
    static multiply(a: Vector2, b: Vector2): Vector2;
}
