/**
 * 描述实体的伤害来源。
 *
 * Describes the source of damage from an Entity.
 */
export enum EntityDamageCause {
    /**
     * @remarks
     * 由下落的铁砧造成的伤害。
     *
     * Damage caused by a falling anvil.
     *
     */
    anvil = 'anvil',
    /**
     * @remarks
     * 由非实体爆炸造成的伤害。例如，爆炸的床。
     *
     * Damage caused from a non-Entity explosion. For example, an
     * exploding bed.
     *
     */
    blockExplosion = 'blockExplosion',
    /**
     * @remarks
     * 由营火造成的伤害。
     *
     * Damage caused by Campfires.
     *
     */
    campfire = 'campfire',
    /**
     * @remarks
     * 未使用。
     *
     * Unused.
     *
     */
    charging = 'charging',
    /**
     * @remarks
     * 由物理接触实体或方块造成的伤害。例如，触碰甜浆果丛或河豚。
     *
     * Damage caused by physically touching an Entity or Block. For
     * example, touching a Sweet Berry bush or Pufferfish.
     *
     */
    contact = 'contact',
    /**
     * @remarks
     * 由实体处于无空气状态且在液体方块内部造成的伤害。
     *
     * Damage caused by an Entity being out of air and inside a
     * liquid block.
     *
     */
    drowning = 'drowning',
    /**
     * @remarks
     * 由实体攻击造成的伤害。
     *
     * Damage caused by an Entity attack.
     *
     */
    entityAttack = 'entityAttack',
    /**
     * @remarks
     * 由实体爆炸造成的伤害。例如，苦力怕或凋灵。
     *
     * Damage caused by an Entity explosion. For example, a Creeper
     * or Wither.
     *
     */
    entityExplosion = 'entityExplosion',
    /**
     * @remarks
     * 由摔落到地面造成的伤害。
     *
     * Damage caused by falling onto the ground.
     *
     */
    fall = 'fall',
    /**
     * @remarks
     * 由下落的方块造成的伤害。注意：铁砧和钟乳石有它们自己的伤害原因。
     *
     * Damage caused by falling blocks. Note: Anvils and
     * Stalactites have their own damage causes.
     *
     */
    fallingBlock = 'fallingBlock',
    /**
     * @remarks
     * 由着火造成的伤害。
     *
     * Damage caused by catching on fire.
     *
     */
    fire = 'fire',
    /**
     * @remarks
     * 由持续燃烧造成的伤害。
     *
     * Damage caused by burning over time.
     *
     */
    fireTick = 'fireTick',
    /**
     * @remarks
     * 由烟花造成的伤害。
     *
     * Damage caused by fireworks.
     *
     */
    fireworks = 'fireworks',
    /**
     * @remarks
     * 在穿着鞘翅滑翔时高速撞墙造成的伤害。
     *
     * Damage caused by flying into a wall at high speed while
     * gliding with Elytra.
     *
     */
    flyIntoWall = 'flyIntoWall',
    /**
     * @remarks
     * 由停留在细雪方块内造成的伤害。
     *
     * Damage caused by staying inside a Powder Snow block.
     *
     */
    freezing = 'freezing',
    /**
     * @remarks
     * 由接触熔岩方块造成的伤害。
     *
     * Damage caused by touching a Lava block.
     *
     */
    lava = 'lava',
    /**
     * @remarks
     * 由被闪电击中造成的伤害。
     *
     * Damage caused by being struck by lightning.
     *
     */
    lightning = 'lightning',
    maceSmash = 'maceSmash',
    /**
     * @remarks
     * 由魔法攻击造成的伤害。例如，唤魔者尖牙或潮涌核心方块。
     *
     * Damage caused by magical attacks. For example, Evoker Fang
     * or Conduit Block.
     *
     */
    magic = 'magic',
    /**
     * @remarks
     * 由接触岩浆块造成的伤害。
     *
     * Damage caused by touching a Magma block.
     *
     */
    magma = 'magma',
    /**
     * @remarks
     * 由无来源造成的伤害。例如，来自命令或脚本。
     *
     * Damage caused by no source. For example, from a command or
     * script.
     *
     */
    none = 'none',
    /**
     * @remarks
     * 由间接来源造成的伤害。例如，在行为包中将生物的生命值设为 0。
     *
     * Damage caused by an indirect source. For example, setting a
     * mob's health to 0 in a behavior pack.
     *
     */
    override = 'override',
    /**
     * @remarks
     * 由活塞造成的伤害。
     *
     * Damage caused by a Piston.
     *
     */
    piston = 'piston',
    /**
     * @remarks
     * 由弹射物造成的伤害。
     *
     * Damage caused by a projectile.
     *
     */
    projectile = 'projectile',
    /**
     * @remarks
     * 由山羊冲撞造成的伤害。
     *
     * Damage caused by Goat ramming.
     *
     */
    ramAttack = 'ramAttack',
    /**
     * @remarks
     * 由 /kill 命令造成的伤害。
     *
     * Damage caused by the /kill command.
     *
     */
    selfDestruct = 'selfDestruct',
    /**
     * @remarks
     * 由监守者的音波尖啸攻击造成的伤害。
     *
     * Damage caused by the Warden's Sonic Boom attack.
     *
     */
    sonicBoom = 'sonicBoom',
    /**
     * @remarks
     * 由灵魂营火造成的伤害。
     *
     * Damage caused by a Soul Campfire.
     *
     */
    soulCampfire = 'soulCampfire',
    /**
     * @remarks
     * 由下落的钟乳石块造成的伤害。
     *
     * Damage caused by a falling Stalactite block.
     *
     */
    stalactite = 'stalactite',
    /**
     * @remarks
     * 由接触石笋块造成的伤害。
     *
     * Damage caused by touching a Stalagmite block.
     *
     */
    stalagmite = 'stalagmite',
    /**
     * @remarks
     * 因饥饿值空而随时间造成的伤害。
     *
     * Damage caused over time by having an empty hunger bar.
     *
     */
    starve = 'starve',
    /**
     * @remarks
     * 由实体处于无空气状态且在非液体方块内部造成的伤害。
     *
     * Damage caused by an Entity being out of air and inside a
     * non-liquid block.
     *
     */
    suffocation = 'suffocation',
    /**
     * @remarks
     * 由实体处于不适宜生存的气候中造成的伤害。例如，雪傀儡在温度大于 1 的生物群系中。
     *
     * Damage caused by an Entity being in an inhabitable climate.
     * For example, a Snow Golem in a biome with a temperature
     * greater than 1.
     *
     */
    temperature = 'temperature',
    /**
     * @remarks
     * 由荆棘盔甲附魔和守卫者荆棘效果造成的伤害。
     *
     * Damage caused by the Thorns armor enchantment and by the
     * Guardian thorns effect.
     *
     */
    thorns = 'thorns',
    /**
     * @remarks
     * 因掉入虚空而随时间造成的伤害。
     *
     * Damage caused over time by falling into the void.
     *
     */
    'void' = 'void',
    /**
     * @remarks
     * 由凋灵效果造成的伤害。例如，接触凋灵玫瑰。
     *
     * Damage caused by the Wither effect. For example, from
     * touching a Wither Rose.
     *
     */
    wither = 'wither',
}
