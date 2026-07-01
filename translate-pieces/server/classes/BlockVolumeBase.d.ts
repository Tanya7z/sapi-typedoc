/* IMPORT */ import { ArgumentOutOfBoundsError } from '../../common';
/* IMPORT */ import { BlockBoundingBox, BlockLocationIterator, Vector3 } from '..';

/**
 * BlockVolume 的基础类型。
 * 
 * Base type for BlockVolumes.
 */
export class BlockVolumeBase {
    private constructor();
    /**
     * @remarks
     * 获取一个 {@link BlockLocationIterator}，表示指定体积内的所有方块世界位置。
     * 
     * Fetch a {@link BlockLocationIterator} that represents all of
     * the block world locations within the specified volume
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @beta
     * @remarks
     * 返回一个 {@link BlockBoundingBox} 对象，表示体积的有效最小和最大坐标。
     * 
     * Return a {@link BlockBoundingBox} object which represents
     * the validated min and max coordinates of the volume
     *
     * @throws This function can throw errors.
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 返回 BlockVolume 的容量（体积）（W*D*H）。
     * 
     * Return the capacity (volume) of the BlockVolume (W*D*H)
     *
     */
    getCapacity(): number;
    /**
     * @beta
     * @remarks
     * 返回体积内最接近给定位置的方块位置列表，按距离排序（最近优先）。
     * 
     * Returns a list of block positions within the volume that are
     * closest to a given location, sorted by distance (nearest
     * first)
     *
     * @param count
     * 要返回的最接近位置的数量。
     * 
     * Number of closest positions to return
     * @param location
     * 测量距离的位置。
     * 
     * Position to measure distance from
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    getClosest(count: number, location: Vector3): Vector3[];
    /**
     * @beta
     * @remarks
     * 返回体积内距离给定位置最远的方块位置列表，按距离排序（最远优先）。
     * 
     * Returns a list of block positions within the volume that are
     * farthest from a given location, sorted by distance (farthest
     * first)
     *
     * @param count
     * 要返回的最远位置的数量。
     * 
     * Number of farthest positions to return
     * @param location
     * 测量距离的位置。
     * 
     * Position to measure distance from
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    getFarthest(count: number, location: Vector3): Vector3[];
    /**
     * @remarks
     * 获取体积的最大角落位置（保证 >= min）。
     * 
     * Get the largest corner position of the volume (guaranteed to
     * be >= min)
     *
     * @throws This function can throw errors.
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取体积的最小角落位置（保证 <= max）。
     * 
     * Get the smallest corner position of the volume (guaranteed
     * to be <= max)
     *
     * @throws This function can throw errors.
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取一个 {@link Vector3} 对象，其中每个分量表示沿该轴的方块数量。
     * 
     * Get a {@link Vector3} object where each component represents
     * the number of blocks along that axis
     *
     */
    getSpan(): Vector3;
    /**
     * @remarks
     * 检查给定的世界方块位置是否在 BlockVolume 内部。
     * 
     * Check to see if a given world block location is inside a
     * BlockVolume
     *
     */
    isInside(location: Vector3): boolean;
    /**
     * @remarks
     * 按指定量移动 BlockVolume。
     * 
     * Move a BlockVolume by a specified amount
     *
     * @param delta
     * 移动的方块数量。
     * 
     * Amount of blocks to move by
     */
    translate(delta: Vector3): void;
}
