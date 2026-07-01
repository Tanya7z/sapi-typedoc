/* IMPORT */ import { CameraFadeTimeOptions, RGB } from '..';

/**
 * 用于启动全屏颜色淡入淡出。
 *
 * Used to initiate a full-screen color fade.
 */
export interface CameraFadeOptions {
    /**
     * @remarks
     * 要使用的淡入淡出颜色。
     *
     * Fade color to use.
     *
     */
    fadeColor?: RGB;
    /**
     * @remarks
     * 淡入、保持和淡出的时间，以秒为单位。
     *
     * Time in seconds for the fade-in, hold, and fade-out seconds.
     *
     */
    fadeTime?: CameraFadeTimeOptions;
}
