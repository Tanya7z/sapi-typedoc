/* IMPORT */ import { Vector2 } from '../../server';

/**
 * Vector2 wrapper class which can be used as a Vector2 for APIs on \@minecraft/server which require a Vector2.
 *
 * 用于 \@minecraft/server 中需要用到 Vector2 的 API 的 Vector2 包装类。
 * @public
 */
export declare class Vector2Builder implements Vector2 {
    x: number;
    y: number;
    constructor(vecStr: string, delim?: string);
    constructor(vec: Vector2, arg?: never);
    constructor(x: number, y: number);
    toString(options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * 将传入向量的各分量值赋值给本向量，返回自身。
     *
     * Assigns the values of the passed in vector to this vector. Returns itself.
     */
    assign(vec: Vector2): this;
    /**
     * equals
     *
     * 判断两个向量是否相等。
     *
     * Check the equality of two vectors
     */
    equals(v: Vector2): boolean;
    /**
     * add
     *
     * 将向量 v 加到本向量上，返回自身。
     *
     * Adds the vector v to this, returning itself.
     */
    add(v: Partial<Vector2>): this;
    /**
     * subtract
     *
     * 从本向量中减去向量 v，返回自身。
     *
     * Subtracts the vector v from this, returning itself.
     */
    subtract(v: Partial<Vector2>): this;
    /** scale
     *
     * 将本向量按传入的数值进行缩放，返回自身。
     *
     * Scales this by the passed in value, returning itself.
     */
    scale(val: number): this;
    /**
     * dot
     *
     * 计算本向量与传入向量的点积。
     *
     * Computes the dot product of this and the passed in vector.
     */
    dot(vec: Vector2): number;
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
    distance(vec: Vector2): number;
    /**
     * normalize
     *
     * 将本向量归一化，返回自身。
     *
     * Normalizes this vector, returning itself.
     */
    normalize(): this;
    /**
     * floor
     *
     * 将向量的各分量向下取整，返回自身。
     *
     * Floor the components of a vector to produce a new vector
     */
    floor(): this;
    /**
     * clamp
     *
     * 将向量的各分量限制在指定的上下限范围内，返回自身。
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    clamp(limits: {
        min?: Partial<Vector2>;
        max?: Partial<Vector2>;
    }): this;
    /**
     * lerp
     *
     * 使用两个向量各分量的线性插值构造一个新向量，返回自身。
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    lerp(vec: Vector2, t: number): this;
    /**
     * slerp
     *
     * 使用两个向量各分量的球面线性插值构造一个新向量，返回自身。
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    slerp(vec: Vector2, t: number): this;
    /**
     * multiply
     *
     * 对两个向量进行逐分量相乘。
     * 注意不要与 {@link Vector2Builder.dot}（点积）混淆。
     *
     * Element-wise multiplication of two vectors together.
     * Not to be confused with {@link Vector2Builder.dot} product
     */
    multiply(vec: Vector2): this;
}
