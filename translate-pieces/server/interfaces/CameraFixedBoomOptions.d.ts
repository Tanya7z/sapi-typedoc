/* IMPORT */ import { Vector2, Vector3 } from '..';

/**
 * 控制第三人称吊臂预设的支点和偏移的选项。
 *
 * Options to control pivot points and offsets of the third
 * person boom preset.
 */
export interface CameraFixedBoomOptions {
    /**
     * @remarks
     * 将支点更改为距离玩家 <x, y, z> 的位置。
     *
     * Changes the pivot point to be <x, y, z> away from the
     * player.
     *
     */
    entityOffset?: Vector3;
    /**
     * @remarks
     * 将相机从中心偏移 <x, y>。
     *
     * Offsets the camera from center by <x, y>.
     *
     */
    viewOffset?: Vector2;
}
