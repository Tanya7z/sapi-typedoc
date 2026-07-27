/**
 * 生物的装备槽。包括盔甲、副手和主手槽。
 *
 * The equipment slot of the mob. This includes armor, offhand
 * and mainhand slots.
 */
export enum EquipmentSlot {
    /**
     * @beta
     * @remarks
     * 身体槽。此槽用于为非人形生物持有盔甲。
     *
     * The body slot. This slot is used to hold armor for
     * non-humanoid mobs.
     *
     */
    Body = 'Body',
    /**
     * @remarks
     * 胸部槽。此槽用于持有胸甲或鞘翅等物品。
     *
     * The chest slot. This slot is used to hold items such as
     * Chestplate or Elytra.
     *
     */
    Chest = 'Chest',
    /**
     * @remarks
     * 脚部槽。此槽用于持有靴子等物品。
     *
     * The feet slot. This slot is used to hold items such as
     * Boots.
     *
     */
    Feet = 'Feet',
    /**
     * @remarks
     * 头部槽。此槽用于持有头盔或雕刻南瓜等物品。
     *
     * The head slot. This slot is used to hold items such as
     * Helmets or Carved Pumpkins.
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * 腿部槽。此槽用于持有护腿等物品。
     *
     * The legs slot. This slot is used to hold items such as
     * Leggings.
     *
     */
    Legs = 'Legs',
    /**
     * @remarks
     * 主手槽。对于玩家，主手槽指的是当前激活的快捷栏槽位。
     *
     * The mainhand slot. For players, the mainhand slot refers to
     * the currently active hotbar slot.
     *
     */
    Mainhand = 'Mainhand',
    /**
     * @remarks
     * 副手槽。此槽用于持有盾牌和地图等物品。
     *
     * The offhand slot. This slot is used to hold items such as
     * shields and maps.
     *
     */
    Offhand = 'Offhand',
}
