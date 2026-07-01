/**
 * 指定与实体当前持有的物品相关的选项。
 *
 * Specifies options related to the item currently being held
 * by an entity.
 */
export enum HeldItemOption {
    /**
     * @remarks
     * 正在持有任何物品。
     *
     * Any item is being held.
     *
     */
    AnyItem = 'AnyItem',
    /**
     * @remarks
     * 没有持有物品。
     *
     * No item is being held.
     *
     */
    NoItem = 'NoItem',
}
