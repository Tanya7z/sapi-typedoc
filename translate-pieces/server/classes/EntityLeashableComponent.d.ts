/* IMPORT */ import { Entity, EntityComponent } from '..';

/**
 * 允许实体被拴绳拴住。定义实体被拴绳时的条件和事件。
 *
 * Allows the entity to be leashed. Defines the conditions and
 * events for when an entity is leashed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果另一个实体可以通过附加自己的拴绳来"偷走"被拴的实体，则返回 `true`。
     *
     * Returns true if another entity can 'steal' the leashed
     * entity by attaching their own leash to it.
     *
     * @throws This property can throw when used.
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * 拴绳变硬并限制移动的距离（以方块为单位）。
     *
     * Distance in blocks at which the leash stiffens, restricting
     * movement.
     *
     * @throws This property can throw when used.
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * 如果实体被拴住则返回 `true`。
     *
     * Returns true if the entity is leashed.
     *
     * @throws This property can throw when used.
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * 牵着拴绳的实体。
     *
     * Entity that is holding the leash.
     *
     * @throws This property can throw when used.
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * 牵着拴绳的实体的标识符。
     *
     * Identifier of entity that is holding the leash.
     *
     * @throws This property can throw when used.
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * 拴绳断裂的距离（以方块为单位）。
     *
     * Distance in blocks at which the leash breaks.
     *
     * @throws This property can throw when used.
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * "弹簧"效应开始作用以保持此实体靠近拴住它的实体的距离（以方块为单位）。
     *
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     *
     * @throws This property can throw when used.
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * 将此实体拴到另一个实体上。
     *
     * Leashes this entity to another entity.
     *
     * @worldMutation
     *
     * @param leashHolder
     * 要将此实体拴到的实体。
     *
     * The entity to leash this entity to.
     * @throws
     * 如果要拴到的实体超过最大距离，或者玩家死亡或处于旁观模式，则抛出异常。
     *
     * Throws if the entity to leash to is over the max distance,
     * and if the player is dead or in spectator mode.
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * 如果此实体被拴到另一个实体上，则解开拴绳。
     *
     * Unleashes this entity if it is leashed to another entity.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    unleash(): void;
}
