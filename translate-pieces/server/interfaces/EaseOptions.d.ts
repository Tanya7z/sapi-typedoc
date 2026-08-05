/* IMPORT */ import { EasingType } from '..';

/**
 * 包含与位置和/或旋转之间缓动相关的选项。
 *
 * Contains options associated with easing between positions
 * and/or rotations.
 */
export interface EaseOptions {
    /**
     * @remarks
     * 缓动操作的时间。
     *
     * Time for the ease operation.
     *
     */
    easeTime?: number;
    /**
     * @remarks
     * 要使用的缓动操作类型。
     *
     * Type of ease operation to use.
     *
     */
    easeType?: EasingType;
}
