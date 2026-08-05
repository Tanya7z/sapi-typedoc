/**
 * 控制方案类型，定义玩家如何响应玩家输入进行移动。有关控制方案的更多详细信息，请参阅以下页面：https://learn.microsoft.com/en-us/minecraft/creator/documents/controlschemes
 *
 * Control Scheme types which define how the player moves in
 * response to player inputs.
 * See the following page for more details on control schemes:
 * https://learn.microsoft.com/en-us/minecraft/creator/documents/controlschemes
 */
export enum ControlScheme {
    CameraRelative = 'CameraRelative',
    CameraRelativeStrafe = 'CameraRelativeStrafe',
    LockedPlayerRelativeStrafe = 'LockedPlayerRelativeStrafe',
    PlayerRelative = 'PlayerRelative',
    PlayerRelativeStrafe = 'PlayerRelativeStrafe',
}
