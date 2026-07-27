/* IMPORT */ import { BlockType, Entity, EntityType, ItemType, Player } from '..';

/**
 * 自定义命令接受的参数类型。
 *
 * The types of paramaters accepted by a custom command.
 */
export enum CustomCommandParamType {
    /**
     * @remarks
     * 方块类型参数提供 {@link BlockType}。
     *
     * Block type parameter provides a {@link BlockType}.
     *
     */
    BlockType = 'BlockType',
    /**
     * @remarks
     * 布尔参数。
     *
     * Boolean parameter.
     *
     */
    Boolean = 'Boolean',
    /**
     * @remarks
     * 实体选择器参数提供 {@link Entity}。
     *
     * Entity selector parameter provides an {@link Entity}.
     *
     */
    EntitySelector = 'EntitySelector',
    /**
     * @remarks
     * 实体类型参数提供 {@link EntityType}。
     *
     * Entity type parameter provides an {@link EntityType}.
     *
     */
    EntityType = 'EntityType',
    /**
     * @remarks
     * 命令枚举参数。
     *
     * Command enum parameter.
     *
     */
    Enum = 'Enum',
    /**
     * @remarks
     * 浮点数参数。
     *
     * Float parameter.
     *
     */
    Float = 'Float',
    /**
     * @remarks
     * 整数参数。
     *
     * Integer parameter.
     *
     */
    Integer = 'Integer',
    /**
     * @remarks
     * 物品类型参数提供 {@link ItemType}。
     *
     * Item type parameter provides an {@link ItemType}.
     *
     */
    ItemType = 'ItemType',
    /**
     * @remarks
     * 位置参数提供 {@link @minecraft/server.Vector3}。
     *
     * Location parameter provides a {@link
     * @minecraft/server.Vector3}.
     *
     */
    Location = 'Location',
    /**
     * @remarks
     * 玩家选择器参数提供 {@link Player}。
     *
     * Player selector parameter provides a {@link Player}.
     *
     */
    PlayerSelector = 'PlayerSelector',
    /**
     * @remarks
     * 字符串参数。
     *
     * String parameter.
     *
     */
    String = 'String',
}
