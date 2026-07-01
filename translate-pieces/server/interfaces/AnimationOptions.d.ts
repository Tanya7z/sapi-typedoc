/* IMPORT */ import { SplineAnimation } from '..';

/**
 * 用于创建相机动画。
 *
 * Used to create camera animations.
 */
export interface AnimationOptions {
    /**
     * @remarks
     * 相机动画的关键帧。
     *
     * Key frames for the camera animation.
     *
     */
    animation: SplineAnimation;
    /**
     * @remarks
     * 相机动画的总时长，以秒为单位。
     *
     * Total time of the camera animation in seconds.
     *
     */
    totalTimeSeconds: number;
}
