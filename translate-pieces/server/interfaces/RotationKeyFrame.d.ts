/* IMPORT */ import { EasingType, Vector3 } from '..';

/**
 * 保存相机动画旋转角度的关键帧。
 *
 * Key frame that holds the rotation of the camera animation.
 */
export interface RotationKeyFrame {
    /**
     * @remarks
     * 该帧在旋转中使用的可选缓动类型。
     *
     * The optional easing type that the frame will use for
     * rotation.
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 相机旋转值。
     *
     * Value of the rotation of the camera.
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 相机到达指定旋转角度的时间值。
     *
     * Time value that the camera will be at the given rotation.
     *
     */
    timeSeconds: number;
}
