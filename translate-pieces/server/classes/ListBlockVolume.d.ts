/* IMPORT */ import { BlockVolumeBase, Vector3 } from '..';

/**
 * 由唯一方块位置的无序容器组成的体积。
 *
 * Volume composed of an unordered container of unique block
 * locations.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ListBlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * 创建 `ListBlockVolume` 的新实例。
     *
     * Creates a new instance of ListBlockVolume.
     *
     * @param locations
     * 用于构造 `ListBlockVolume` 的初始方块位置数组。
     *
     * Initial array of block locations that ListBlockVolume will
     * be constructed with.
     */
    constructor(locations: Vector3[]);
    /**
     * @remarks
     * 将方块位置插入容器中。
     *
     * Insert block locations into container.
     *
     * @param locations
     * 要插入容器的方块位置数组。
     *
     * Array of block locations to be inserted into container.
     */
    add(locations: Vector3[]): void;
    /**
     * @remarks
     * 从容器中移除方块位置。
     *
     * Remove block locations from container.
     *
     * @param locations
     * 要从容器中移除的方块位置数组。
     *
     * Array of block locations to be removed from container.
     */
    remove(locations: Vector3[]): void;
}
