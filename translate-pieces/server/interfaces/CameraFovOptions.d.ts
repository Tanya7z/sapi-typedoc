/* IMPORT */ import { EaseOptions } from '..';

/**
 * 用于更改当前相机的视野。
 *
 * Used to change the field of view of the current camera.
 */
export interface CameraFovOptions {
    easeOptions?: EaseOptions;
    /**
     * @remarks
     * 设置视野的值。
     *
     * Set a value for the field of view.
     *
     */
    fov?: number;
}
