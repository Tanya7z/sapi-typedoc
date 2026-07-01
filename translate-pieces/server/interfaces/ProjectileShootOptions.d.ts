/**
 * @minecraft/server.EntityProjectileComponent.shoot 的可选参数。
 *
 * Optional arguments for
 * @minecraft/server.EntityProjectileComponent.shoot.
 */
export interface ProjectileShootOptions {
    /**
     * @remarks
     * 控制射击的精度。值为 0 表示完美精度。
     *
     * Controls the accuracy of the shot. A value of 0 is perfect
     * accuracy.
     *
     */
    uncertainty?: number;
}
