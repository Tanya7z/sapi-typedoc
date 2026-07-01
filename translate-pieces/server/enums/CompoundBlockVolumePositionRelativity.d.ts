/**
 * @beta
 * 描述 CompoundBlockVolumeItem 相对于父 CompoundVolume 的相对性枚举。
 *
 * An enum describing the relativity of the
 * CompoundBlockVolumeItem, relative to the parent
 * CompoundVolume.
 */
export enum CompoundBlockVolumePositionRelativity {
    /**
     * @remarks
     * 关联 BlockVolume 中的位置相对于它们被添加到的 CompoundBlockVolume。
     *
     * The locations within the associated BlockVolume are relative
     * to the CompoundBlockVolume to which they were added
     *
     */
    Relative = 0,
    /**
     * @remarks
     * 关联 BlockVolume 中的位置处于绝对世界空间。
     *
     * The locations within the associated BlockVolume are in
     * absolute world space
     *
     */
    Absolute = 1,
}
