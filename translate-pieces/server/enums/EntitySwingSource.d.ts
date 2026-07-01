/* IMPORT */ import { PlayerSwingStartAfterEvent } from '..';

/**
 * 描述实体挥动来源的枚举。作为 {@link PlayerSwingStartAfterEvent} 的一部分发送。
 *
 * Enumerator describing the source of an Entity swing. Sent as
 * part of {@link PlayerSwingStartAfterEvent}
 */
export enum EntitySwingSource {
    /**
     * @remarks
     * 当实体作为攻击的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of an attack.
     *
     */
    Attack = 'Attack',
    /**
     * @remarks
     * 当实体作为建造动作的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of a build action.
     *
     */
    Build = 'Build',
    /**
     * @remarks
     * 当实体作为丢弃物品的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of dropping an item.
     *
     */
    DropItem = 'DropItem',
    /**
     * @remarks
     * 当实体作为事件响应的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of an event response.
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * 当实体作为交互的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of an interaction.
     *
     */
    Interact = 'Interact',
    /**
     * @remarks
     * 当实体作为挖掘动作的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of a mine action.
     *
     */
    Mine = 'Mine',
    /**
     * @remarks
     * 当实体挥动没有可确定的来源时发送。
     *
     * Sent when the Entity swing has no determinable source.
     *
     */
    None = 'None',
    /**
     * @remarks
     * 当实体作为投掷物品的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of throwing an item.
     *
     */
    ThrowItem = 'ThrowItem',
    /**
     * @remarks
     * 当实体作为使用物品的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of using an item.
     *
     */
    UseItem = 'UseItem',
}
