/**
 * @beta
 * Action 枚举决定了 CompoundBlockVolume 在执行内部/外部计算时如何关联 CompoundBlockVolumeItem。
 *
 * The Action enum determines how the CompoundBlockVolume
 * considers the associated CompoundBlockVolumeItem when
 * performing inside/outside calculations.
 */
export enum CompoundBlockVolumeAction {
    /**
     * @remarks
     * 关联的 BlockVolume 被视为正空间，任何相交测试均视为命中。
     *
     * The associated BlockVolume is considered a positive space,
     * and any intersection tests are considered hits
     *
     */
    Add = 0,
    /**
     * @remarks
     * 关联的 BlockVolume 被视为负空间或空洞，任何相交测试均视为未命中。使用 Subtract 动作，可以在方块体积上"打孔"，使得相交测试可以通过这些空间。
     *
     * The associated BlockVolume is considered a negative or void
     * space, and any intersection tests are considered misses.
     * Using the Subtract action, it is possible to `punch holes`
     * in block volumes so that any intersection tests may pass
     * through such spaces
     *
     */
    Subtract = 1,
}
