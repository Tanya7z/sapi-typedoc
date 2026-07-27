/* IMPORT */ import { Entity, EntityComponent, ProjectileShootOptions, Vector3 } from '..';

/**
 * 投射物组件控制投射物实体的属性，并允许其向给定方向射出。当实体具有 `minecraft:projectile` 组件时，此组件存在。
 *
 * The projectile component controls the properties of a
 * projectile entity and allows it to be shot in a given
 * direction.
 * This component is present when the entity has the
 * minecraft:projectile component.
 * @seeExample shootArrow.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 投射物在空气中飞行时每 tick 保持的速度比例。
     *
     * The fraction of the projectile's speed maintained every tick
     * while traveling through air.
     *
     * @worldMutation
     *
     */
    airInertia: number;
    /**
     * @remarks
     * 如果为 `true`，实体在受伤时会被点燃。默认燃烧时长为 5 秒。此持续时间可以通过 `onFireTime` 属性修改。如果实体免疫火焰或实体处于潮湿状态，则不会着火。
     *
     * If true, the entity will be set on fire when hurt. The
     * default burn duration is 5 seconds. This duration can be
     * modified via the onFireTime property. The entity will not
     * catch fire if immune or if the entity is wet.
     *
     * @worldMutation
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * 如果为 `true`，投射物在被玩家击中时会生成暴击粒子。例如，玩家攻击潜影贝子弹。
     *
     * If true, the projectile will spawn crit particles when hit
     * by a player. E.g. Player attacking a Shulker bullet.
     *
     * @worldMutation
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * 如果为 `true`，投射物在受到伤害时会被摧毁。例如，玩家攻击潜影贝子弹。
     *
     * If true, the projectile will be destroyed when it takes
     * damage. E.g. Player attacking a Shulker bullet.
     *
     * @worldMutation
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * 应用于投射物的重力。当实体不在地面上时，每 tick 从投射物的垂直位置变化中减去此值。值越高，投射物下落越快。如果为负值，实体将上升而不是下落。
     *
     * The gravity applied to the projectile. When the entity is
     * not on the ground, subtracts this amount from the
     * projectile's change in vertical position every tick. The
     * higher the value, the faster the projectile falls. If
     * negative, the entity will rise instead of fall.
     *
     * @worldMutation
     *
     */
    gravity: number;
    /**
     * @remarks
     * 投射物击中实体时播放的声音。
     *
     * The sound that plays when the projectile hits an entity.
     *
     * @worldMutation
     *
     */
    hitEntitySound?: string;
    /**
     * @remarks
     * 投射物击中方块时播放的声音。
     *
     * The sound that plays when the projectile hits a block.
     *
     * @worldMutation
     *
     */
    hitGroundSound?: string;
    /**
     * @remarks
     * 投射物击中物体时生成的粒子。
     *
     * The particle that spawns when the projectile hits something.
     *
     * @worldMutation
     *
     */
    hitParticle?: string;
    /**
     * @remarks
     * 如果为 `true`，且天气为雷暴且实体与天空之间没有遮挡，则实体在被击中时会遭雷击。例如，带有引雷附魔的投掷三叉戟。
     *
     * If true and the weather is thunder and the entity has line
     * of sight to the sky, the entity will be struck by lightning
     * when hit. E.g. A thrown Trident with the Channeling
     * enchantment.
     *
     * @worldMutation
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * 投射物在液体中飞行时每 tick 保持的速度比例。
     *
     * The fraction of the projectile's speed maintained every tick
     * while traveling through a liquid.
     *
     * @worldMutation
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * 当 `catchFireOnHurt` 设置为 `true` 时，被击中实体着火的持续时间（以秒为单位）。
     *
     * Duration in seconds that the entity hit will be on fire for
     * when catchFireOnHurt is set to true.
     *
     * @worldMutation
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * 投射物的拥有者。用于确定投射物可以与什么碰撞并造成伤害。它还确定哪个实体被指定为攻击者。
     *
     * The owner of the projectile. This is used to determine what
     * the projectile can collide with and damage. It also
     * determines which entity is assigned as the attacker.
     *
     * @worldMutation
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * 如果为 `true`，投射物在未造成伤害时会从生物身上弹开。例如，正在生成的凋灵。
     *
     * If true, the projectile will bounce off mobs when no damage
     * is taken. E.g. A spawning wither.
     *
     * @worldMutation
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * 如果为 `true`，投射物在击中实体时会停止移动，如同被格挡一样。例如，投掷三叉戟的击中行为。
     *
     * If true, the projectile will stop moving when an entity is
     * hit as thought it had been blocked. E.g. Thrown trident on
     * hit behavior.
     *
     * @worldMutation
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * 以给定速度射出投射物。投射物将从其当前位置射出。
     *
     * Shoots the projectile with a given velocity. The projectile
     * will be shot from its current location.
     *
     * @worldMutation
     *
     * @param velocity
     * 发射投射物的速度。这同时控制投射物射出的速度和方向。
     *
     * The velocity to fire the projectile. This controls both the
     * speed and direction which which the projectile will be shot.
     * @param options
     * 射出的可选配置。
     *
     * Optional configuration for the shoot.
     * @throws
     * 如果组件或实体不再存在则抛出异常。
     *
     * Throws if the component or entity no longer exist.
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}
