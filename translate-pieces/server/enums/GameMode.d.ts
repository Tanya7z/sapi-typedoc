/**
 * 表示当前世界体验的游戏模式。
 *
 * Represents a game mode for the current world experience.
 */
export enum GameMode {
    /**
     * @remarks
     * 世界处于更受限的体验模式，方块可能无法被操作。
     *
     * World is in a more locked-down experience, where blocks may
     * not be manipulated.
     *
     */
    Adventure = 'Adventure',
    /**
     * @remarks
     * 世界处于完全创造模式。在创造模式下，玩家拥有物品选择选项卡和生存选择选项卡中的所有可用资源。他们还可以立即破坏方块，包括那些通常无法破坏的方块。命令方块和结构方块也可以在创造模式下使用。物品也不会失去耐久度或消失。
     *
     * World is in a full creative mode. In creative mode, the
     * player has all the resources available in the item selection
     * tabs and the survival selection tab. They can also destroy
     * blocks instantly including those which would normally be
     * indestructible. Command and structure blocks can also be
     * used in creative mode. Items also do not lose durability or
     * disappear.
     *
     */
    Creative = 'Creative',
    /**
     * @remarks
     * 世界处于旁观者模式。在旁观者模式下，旁观者始终飞行且无法着陆。旁观者可以穿过实心方块和实体而不会发生任何碰撞，并且无法使用物品或与方块或生物交互。旁观者不会被生物或其他玩家看到，除非是其他旁观者；旁观者显示为透明的浮动头部。
     *
     * World is in spectator mode. In spectator mode, spectators
     * are always flying and cannot become grounded. Spectators can
     * pass through solid blocks and entities without any
     * collisions, and cannot use items or interact with blocks or
     * mobs. Spectators cannot be seen by mobs or other players,
     * except for other spectators; spectators appear as a
     * transparent floating head.
     *
     */
    Spectator = 'Spectator',
    /**
     * @remarks
     * 世界处于生存模式，玩家可能受到伤害，实体可能不是和平的。生存模式下，玩家必须收集资源、建造结构，同时在其生成的世界中生存。活动会随着时间的推移逐渐消耗玩家的生命值和饥饿值。
     *
     * World is in a survival mode, where players can take damage
     * and entities may not be peaceful. Survival mode is where the
     * player must collect resources, build structures while
     * surviving in their generated world. Activities can, over
     * time, chip away at player health and hunger bar.
     *
     */
    Survival = 'Survival',
}
