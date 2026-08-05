/* IMPORT */ import { BlockPermutation, EntityComponent } from '..';

/**
 * 定义此实体可以在哪些方块中呼吸，并赋予它们窒息的能力。
 *
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 实体的当前空气供应量。
     *
     * The current air supply of the entity.
     *
     * @worldMutation
     *
     * @throws
     * 如果空气供应超出范围 [suffocationTime, maxAirSupply] 将抛出错误。
     *
     * Will throw an error if the air supply is out of bounds
     * [suffocationTime, maxAirSupply].
     */
    airSupply: number;
    /**
     * @remarks
     * 如果为 `true`，此实体可以在空气中呼吸。
     *
     * If true, this entity can breathe in air.
     *
     * @throws This property can throw when used.
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * 如果为 `true`，此实体可以在熔岩中呼吸。
     *
     * If true, this entity can breathe in lava.
     *
     * @throws This property can throw when used.
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * 如果为 `true`，此实体可以在实心方块中呼吸。
     *
     * If true, this entity can breathe in solid blocks.
     *
     * @throws This property can throw when used.
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * 如果为 `true`，此实体可以在水中呼吸。
     *
     * If true, this entity can breathe in water.
     *
     * @throws This property can throw when used.
     */
    readonly breathesWater: boolean;
    /**
     * @beta
     * @remarks
     * 如果为 `true`，该实体能够呼吸。
     *
     * If true, the entity is able to breathe.
     *
     * @throws This property can throw when used.
     */
    readonly canBreathe: boolean;
    /**
     * @remarks
     * 如果为 `true`，此实体在水中时会显示可见的气泡。
     *
     * If true, this entity will have visible bubbles while in
     * water.
     *
     * @throws This property can throw when used.
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * 恢复到最大呼吸量的时间（以秒为单位）。
     *
     * Time in seconds to recover breath to maximum.
     *
     * @throws This property can throw when used.
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * 窒息伤害之间的时间间隔（以秒为单位）。
     *
     * Time in seconds between suffocation damage.
     *
     * @throws This property can throw when used.
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * 实体可以屏住呼吸的时间（以秒为单位）。
     *
     * Time in seconds the entity can hold its breath.
     *
     * @throws This property can throw when used.
     */
    readonly totalSupply: number;
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * 此实体可以呼吸的方块列表，除了按方块类别区分的单独属性之外。
     *
     * List of blocks this entity can breathe in, in addition to
     * the separate properties for classes of blocks.
     *
     * @throws This function can throw errors.
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * 此实体不能呼吸的方块列表。
     *
     * List of blocks this entity can't breathe in.
     *
     * @throws This function can throw errors.
     */
    getNonBreatheBlocks(): BlockPermutation[];
}
