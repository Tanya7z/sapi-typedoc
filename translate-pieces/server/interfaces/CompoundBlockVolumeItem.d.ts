/* IMPORT */ import { BlockVolume, CompoundBlockVolumeAction, CompoundBlockVolumePositionRelativity } from '..';

/**
 * @beta
 * 此接口定义了 {@link CompoundBlockVolume} 中的一个条目，表示一个正空间或负空间的体积。
 *
 * This interface defines an entry into the {@link
 * CompoundBlockVolume} which represents a volume of positive
 * or negative space.
 *
 */
export interface CompoundBlockVolumeItem {
    /**
     * @remarks
     * "action" 定义了方块体积在复合体积堆栈中的表示方式。
     * "Add" 创建一个被正向选择的方块体积。
     * "Subtract" 创建一个表示总体复合体积中空洞或负空间的方块体积。
     *
     * The 'action' defines how the block volume is represented in
     * the compound block volume stack.
     * 'Add' creates a block volume which is positively selected
     * 'Subtract' creates a block volume which represents a hole or
     * negative space in the overall compound block volume.
     *
     */
    action?: CompoundBlockVolumeAction;
    /**
     * @remarks
     * 位置关系枚举决定了指定的 `BlockVolume` 是相对于父复合体积原点定位，还是位于绝对世界坐标中。
     *
     * The relativity enumeration determines whether the
     * BlockVolume specified is positioned relative to the parent
     * compound block volume origin, or in absolute world space.
     *
     */
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    /**
     * @remarks
     * 空间的体积。
     *
     * The volume of space
     *
     */
    volume: BlockVolume;
}
