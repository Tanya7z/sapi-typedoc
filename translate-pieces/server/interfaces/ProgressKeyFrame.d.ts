/* IMPORT */ import { EasingType } from '..';

/**
 * 保存相机动画进度的关键帧。
 *
 * Key frame that holds the progress of the camera animation.
 */
export interface ProgressKeyFrame {
    /**
     * @remarks
     * 表示相机沿曲线的进度值。取值范围为 [0.0, 1.0]（包含两端）。
     *
     * Value to denote how far along the curve the camera will be.
     * Values are [0.0, 1.0] inclusive.
     *
     */
    alpha: number;
    /**
     * @remarks
     * 该帧在位置变化中使用的可选缓动类型。
     *
     * The optional easing type that the frame will use for
     * position.
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 相机到达指定 alpha 值的时间值。
     *
     * Time value that the camera will be at the given alpha.
     *
     */
    timeSeconds: number;
}
