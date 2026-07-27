/* IMPORT */ import { VectorXZ } from '../../server';

/**
 * VectorXZ 包装类，可在需要 VectorXZ 的 \@minecraft/server API 中用作 VectorXZ。
 *
 * VectorXZ wrapper class which can be used as a VectorXZ for APIs on \@minecraft/server which require a VectorXZ.
 * @public
 */
export declare class VectorXZBuilder implements VectorXZ {
    x: number;
    z: number;
    constructor(vecStr: string, delim?: string);
    constructor(vec: VectorXZ, arg?: never);
    constructor(x: number, y: number);
    toString(options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * 将传入向量的值赋给当前向量，并返回自身。
     *
     * Assigns the values of the passed in vector to this vector. Returns itself.
     */
    assign(vec: VectorXZ): this;
    /**
     * equals
     *
     * 检查两个向量是否相等。
     *
     * Check the equality of two vectors
     */
    equals(v: VectorXZ): boolean;
    /**
     * add
     *
     * 将向量 v 与当前向量相加，并返回自身。
     *
     * Adds the vector v to this, returning itself.
     */
    add(v: Partial<VectorXZ>): this;
    /**
     * subtract
     *
     * 从当前向量中减去向量 v，并返回自身。
     *
     * Subtracts the vector v from this, returning itself.
     */
    subtract(v: Partial<VectorXZ>): this;
    /** scale
     *
     * 将当前向量按传入的标量进行缩放，并返回自身。
     *
     * Scales this by the passed in value, returning itself.
     */
    scale(val: number): this;
    /**
     * dot
     *
     * 计算当前向量与传入向量的点积。
     *
     * Computes the dot product of this and the passed in vector.
     */
    dot(vec: VectorXZ): number;
    /**
     * magnitude
     *
     * 向量的模长。
     *
     * The magnitude of the vector
     */
    magnitude(): number;
    /**
     * distance
     *
     * 计算两个向量之间的距离。
     *
     * Calculate the distance between two vectors
     */
    distance(vec: VectorXZ): number;
    /**
     * normalize
     *
     * 将当前向量归一化，并返回自身。
     *
     * Normalizes this vector, returning itself.
     */
    normalize(): this;
    /**
     * floor
     *
     * 对向量的各个分量向下取整，并返回自身。
     *
     * Floor the components of a vector to produce a new vector
     */
    floor(): this;
    /**
     * clamp
     *
     * 将当前向量的各分量限制在给定范围内，并返回自身。
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    clamp(limits: {
        min?: Partial<VectorXZ>;
        max?: Partial<VectorXZ>;
    }): this;
    /**
     * lerp
     *
     * 使用两个向量之间各分量的线性插值构造一个新向量，并返回自身。
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    lerp(vec: VectorXZ, t: number): this;
    /**
     * slerp
     *
     * 使用两个向量之间各分量的球面线性插值构造一个新向量，并返回自身。
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    slerp(vec: VectorXZ, t: number): this;
    /**
     * multiply
     *
     * 当前向量与传入向量按元素相乘，并返回自身。
     * 不要与 {@link VectorXZBuilder.dot} 乘积混淆。
     *
     * Element-wise multiplication of two vectors together.
     * Not to be confused with {@link VectorXZBuilder.dot} product
     */
    multiply(vec: VectorXZ): this;
}
