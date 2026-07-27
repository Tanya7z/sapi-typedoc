/* IMPORT */ import { Vector3 } from '../../server';

/**
 * 在 AABBUtils 操作中使用无效 AABB 时抛出的错误。
 *
 * An error that is thrown when using an invalid AABB with AABBUtils operations.
 *
 * @public
 */
export declare class AABBInvalidExtentError extends Error {
    constructor(extent: Vector3);
}
