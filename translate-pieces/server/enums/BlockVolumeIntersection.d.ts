/**
 * 对两个 BlockVolume 对象进行相交测试的结果描述。
 *
 * Description of the resulting intersection test on two
 * BlockVolume objects
 */
export enum BlockVolumeIntersection {
    /**
     * @remarks
     * 体积 B 与体积 A 没有交点。
     *
     * Volume B has no intersection points with Volume A
     *
     */
    Disjoint = 0,
    /**
     * @remarks
     * 体积 B 完全位于体积 A 内部。
     *
     * Volume B resides completely inside Volume A
     *
     */
    Contains = 1,
    /**
     * @remarks
     * 体积 B 与体积 A 部分相交。
     *
     * Volume B partially intersects Volume A
     *
     */
    Intersects = 2,
}
