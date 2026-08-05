/* IMPORT */ import { EntityComponent, Player } from '..';

/**
 * 包含基于骑乘者来驯服可骑乘实体的选项。
 *
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果实体已被驯服，则返回 `true`。
     *
     * Returns true if the entity is tamed.
     *
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 如果实体已被玩家驯服，则返回 `true`。
     *
     * Returns true if the entity is tamed by a player.
     *
     * @throws This property can throw when used.
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @remarks
     * 返回已驯服此实体的玩家，如果实体未被玩家驯服，则返回 `undefined`。
     *
     * Returns the player that has tamed the entity, or 'undefined'
     * if entity is not tamed by a player.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回已驯服此实体的玩家的 ID，如果实体未被驯服，则返回 `undefined`。
     *
     * Returns the id of player that has tamed the entity, or
     * 'undefined' if entity is not tamed.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * 将此可骑乘实体设置为已驯服。
     *
     * Sets this rideable entity as tamed.
     *
     * @worldMutation
     *
     * @param showParticles
     * 此实体被驯服时是否显示效果粒子。
     *
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks
     * 将此可骑乘实体设置为已被给定玩家驯服。
     *
     * Sets this rideable entity as tamed by the given player.
     *
     * @worldMutation
     *
     * @param showParticles
     * 此实体被驯服时是否显示效果粒子。
     *
     * Whether to show effect particles when this entity is tamed.
     * @param player
     * 应驯服此实体的玩家。
     *
     * The player that this entity should be tamed by.
     * @returns
     * 如果实体被驯服，则返回 `true`。
     *
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}
