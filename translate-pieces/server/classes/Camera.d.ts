/* IMPORT */ import { ArgumentOutOfBoundsError } from '../../common';
/* IMPORT */ import { AnimationOptions, CameraAttachOptions, CameraFadeOptions, CameraFixedBoomOptions, CameraFovOptions, CameraSetFacingOptions, CameraSetLocationOptions, CameraSetPosOptions, CameraSetRotOptions, CameraShakeOptions, CameraTargetOptions, CatmullRomSpline, EaseOptions, InvalidEntityError, LinearSpline } from '..';

/**
 * 包含与指定玩家的活动相机相关的方法。
 *
 * Contains methods relating to the active camera for the
 * specified player.
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * 返回该相机是否可访问和使用。当相机的拥有者玩家已加载且自身有效时，该相机被视为有效。
     *
     * Returns whether the Camera is valid to access and use. A
     * Camera is considered valid when the owning Player of the
     * Camera is loaded and valid itself.
     *
     */
    readonly isValid: boolean;
    /**
     * @beta
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    addShake(shakeCameraOptions: CameraShakeOptions): void;
    /**
     * @remarks
     * 将相机附加到非玩家实体上。
     *
     * Attaches the camera to a non-player entity.
     *
     * @worldMutation
     *
     * @param attachCameraOptions
     * 相机要附加到的实体的选项。包含实体标识符和可选的实体位置。
     *
     * Options for the entity the camera is attaching to. Contains
     * the entity identifier and optional entity location.
     * @throws This function can throw errors.
     */
    attachToEntity(attachCameraOptions?: CameraAttachOptions): void;
    /**
     * @remarks
     * 清除指定玩家的活动相机。使指定玩家结束任何进行中的相机视角，包括任何缓动相机运动，并返回到其正常视角。
     *
     * Clears the active camera for the specified player. Causes
     * the specified players to end any in-progress camera
     * perspectives, including any eased camera motions, and return
     * to their normal perspective.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * 开始相机淡入淡出过渡。淡入淡出过渡是一种全屏颜色，会淡入、保持、然后淡出。
     *
     * Begins a camera fade transition. A fade transition is a
     * full-screen color that fades-in, holds, and then fades-out.
     *
     * @worldMutation
     *
     * @param fadeCameraOptions
     * 相机淡入淡出操作的附加选项。
     *
     * Additional options around camera fade operations.
     * @throws This function can throw errors.
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    playAnimation(splineType: CatmullRomSpline | LinearSpline, cameraAnimationOptions: AnimationOptions): void;
    /**
     * @remarks
     * 为指定玩家设置当前活动相机。
     *
     * Sets the current active camera for the specified player.
     *
     * @worldMutation
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件的标识符。
     *
     * Identifier of a camera preset file defined within JSON.
     * @param setOptions
     * 相机的附加选项。
     *
     * Additional options for the camera.
     * @throws This function can throw errors.
     */
    setCamera(
        cameraPreset: string,
        setOptions?:
            | CameraFixedBoomOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions
            | CameraTargetOptions,
    ): void;
    /**
     * @beta
     * @remarks
     * 使用缓动设置当前活动相机。
     *
     * Sets the current active camera with easing.
     *
     * @worldMutation
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件的标识符。
     *
     * Identifier of a camera preset file defined within JSON.
     * @param easeOptions
     * 用于将相机从上一个位置缓动到当前位置的选项。
     *
     * Options to ease the camera from the previous camera to the
     * current one.
     * @throws
     * 当前在未启用实验性相机切换功能时，缓动到 `minecraft:first_person` 预设会抛出异常。
     *
     * Throws when easing to minecraft:first_person presets
     * currently without the experimental cameras toggle enabled.
     */
    setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void;
    /**
     * @remarks
     * 为指定玩家设置当前活动相机，并将位置和旋转重置为 JSON 中定义的值。
     *
     * Sets the current active camera for the specified player and
     * resets the position and rotation to the values defined in
     * the JSON.
     *
     * @worldMutation
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件的标识符。
     *
     * Identifier of a camera preset file defined within JSON.
     * @param easeOptions
     * 用于将相机缓动回其原始位置和旋转的选项。
     *
     * Options to ease the camera back to its original position and
     * rotation.
     * @throws This function can throw errors.
     */
    setDefaultCamera(cameraPreset: string, easeOptions?: EaseOptions): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setFov(fovCameraOptions?: CameraFovOptions): void;
    /**
     * @beta
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopShaking(): void;
}
