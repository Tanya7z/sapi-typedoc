/**
 * 当指定位置或边界区域所在的区块未加载时抛出。
 *
 * Thrown when the chunk for provided location or bounding area
 * is not loaded.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}
