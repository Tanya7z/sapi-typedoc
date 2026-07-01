/* IMPORT */ import { ProgressKeyFrame, RotationKeyFrame } from '..';

/**
 * 相机动画的关键帧集合。
 *
 * Collection of key frames for camera animation.
 */
export interface SplineAnimation {
    /**
     * @remarks
     * 相机沿指定曲线的进度关键帧。
     *
     * Key frames for camera progress along a given curve.
     *
     */
    progressKeyFrames: ProgressKeyFrame[];
    /**
     * @remarks
     * 相机旋转关键帧。
     *
     * Key frames for camera rotation.
     *
     */
    rotationKeyFrames: RotationKeyFrame[];
}
