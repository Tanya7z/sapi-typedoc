/**
 * 输入权限类别。由 {@link PlayerInputPermissionCategoryChangeAfterEvent} 指定哪个类别已更改，以及由 {@link PlayerInputPermissions} 获取或设置权限。
 *
 * Input permission categories. Used by {@link
 * PlayerInputPermissionCategoryChangeAfterEvent} to specify
 * which category was changed and {@link
 * PlayerInputPermissions} to get or set permissions.
 */
export enum InputPermissionCategory {
    /**
     * @remarks
     * 与摄像机移动相关的玩家输入。
     *
     * Player input relating to camera movement.
     *
     */
    Camera = 1,
    /**
     * @remarks
     * 与所有玩家移动相关的输入。禁用此选项相当于禁用跳跃、潜行、横向移动、上马和下马。
     *
     * Player input relating to all player movement. Disabling this
     * is equivalent to disabling jump, sneak, lateral movement,
     * mount, and dismount.
     *
     */
    Movement = 2,
    /**
     * @remarks
     * 玩家在世界中横向移动的输入。在键盘上是 WASD，在手柄或触摸上是移动摇杆。
     *
     * Player input for moving laterally in the world. This would
     * be WASD on a keyboard or the movement joystick on gamepad or
     * touch.
     *
     */
    LateralMovement = 4,
    /**
     * @remarks
     * 与潜行相关的玩家输入。这也影响向下飞行。
     *
     * Player input relating to sneak. This also affects flying
     * down.
     *
     */
    Sneak = 5,
    /**
     * @remarks
     * 与跳跃相关的玩家输入。这也影响向上飞行。
     *
     * Player input relating to jumping. This also affects flying
     * up.
     *
     */
    Jump = 6,
    /**
     * @remarks
     * 与骑乘载具相关的玩家输入。
     *
     * Player input relating to mounting vehicles.
     *
     */
    Mount = 7,
    /**
     * @remarks
     * 与下马相关的玩家输入。当禁用时，玩家仍可以通过其他方式下马，例如在马背上玩家仍然可以跳下，在船上玩家可以进入另一艘船。
     *
     * Player input relating to dismounting. When disabled, the
     * player can still dismount vehicles by other means, for
     * example on horses players can still jump off and in boats
     * players can go into another boat.
     *
     */
    Dismount = 8,
    /**
     * @remarks
     * 与玩家向前移动相关的输入。
     *
     * Player input relating to moving the player forward.
     *
     */
    MoveForward = 9,
    /**
     * @remarks
     * 与玩家向后移动相关的输入。
     *
     * Player input relating to moving the player backward.
     *
     */
    MoveBackward = 10,
    /**
     * @remarks
     * 与玩家向左移动相关的输入。
     *
     * Player input relating to moving the player left.
     *
     */
    MoveLeft = 11,
    /**
     * @remarks
     * 与玩家向右移动相关的输入。
     *
     * Player input relating to moving the player right.
     *
     */
    MoveRight = 12,
}
