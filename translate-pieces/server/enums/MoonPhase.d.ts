/**
 * 包含基于当前日期的不同月相阶段的枚举。使用 world.getMoonPhase 获取当前月相。
 *
 * 月亮的满盈程度控制着各种生物行为，例如沼泽生物群系中史莱姆的生成数量、骷髅和僵尸生成时带有盔甲的几率，以及蜘蛛生成时带有特定状态效果的几率。
 *
 * Enum containing the different phases of the moon based on
 * the current day.,Obtain the current MoonPhase using
 * world.getMoonPhase.
 *
 * The fullness of the moon controls various mob behaviors such
 * as the number of slimes that spawn in Swamp biomes, the
 * chance skeletons and zombies have to spawn with armor, as
 * well as the chance for spiders to spawn with certain status
 * effects.
 */
export enum MoonPhase {
    /**
     * @remarks
     * 最亮的月相。在此阶段，猫有 50% 的几率生成黑猫。
     *
     * The brightest moon phase. During this phase, cats have a 50%
     * chance of spawning as black cats.
     *
     */
    FullMoon = 0,
    /**
     * @remarks
     * 满月之后的阶段。
     *
     * The phase following the Full Moon.
     *
     */
    WaningGibbous = 1,
    /**
     * @remarks
     * 蛾眉月之后的阶段。
     *
     * The phase following the Waxing Crescent.
     *
     */
    FirstQuarter = 2,
    /**
     * @remarks
     * 下弦月之后的阶段。
     *
     * The phase following the Last Quarter.
     *
     */
    WaningCrescent = 3,
    /**
     * @remarks
     * 最暗的月相。
     *
     * The darkest moon phase.
     *
     */
    NewMoon = 4,
    /**
     * @remarks
     * 新月之后的阶段。
     *
     * The phase following the New Moon.
     *
     */
    WaxingCrescent = 5,
    /**
     * @remarks
     * 亏凸月之后的阶段。
     *
     * The phase following the Waning Gibbous.
     *
     */
    LastQuarter = 6,
    /**
     * @remarks
     * 上弦月之后的阶段。
     *
     * The phase following the First Quarter.
     *
     */
    WaxingGibbous = 7,
}
