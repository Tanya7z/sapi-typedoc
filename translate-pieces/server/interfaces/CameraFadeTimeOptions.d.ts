/**
 * 包含淡入淡出过渡的时间。
 *
 * Contains timings for a fade transition.
 */
export interface CameraFadeTimeOptions {
    /**
     * @remarks
     * 淡入的时间，以秒为单位。
     *
     * Time, in seconds, for a fade-in.
     *
     */
    fadeInTime: number;
    /**
     * @remarks
     * 淡出的时间，以秒为单位。
     *
     * Time, in seconds, for a fade-out.
     *
     */
    fadeOutTime: number;
    /**
     * @remarks
     * 保持全屏颜色的时间，以秒为单位。
     *
     * Time, in seconds, to hold the full screen color.
     *
     */
    holdTime: number;
}
