/**
 * @beta
 * 表示应用于摄像机的抖动类型。
 *
 * Represents the type of shake to apply to the camera.
 */
export enum CameraShakeType {
    /**
     * @remarks
     * 一种位置抖动，使摄像机沿其轴移动。
     *
     * A positional shake that moves the camera along its axes.
     *
     */
    Positional = 'Positional',
    /**
     * @remarks
     * 一种旋转抖动，使摄像机绕其轴旋转。
     *
     * A rotational shake that rotates the camera around its axes.
     *
     */
    Rotational = 'Rotational',
}
