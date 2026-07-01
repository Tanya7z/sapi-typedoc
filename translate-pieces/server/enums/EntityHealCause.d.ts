/**
 * 描述实体的治疗来源。
 *
 * Describes the source of healing of an Entity.
 */
export enum EntityHealCause {
    /**
     * @remarks
     * 由药水等物品造成的治疗。
     *
     * Healing caused by items such as potions.
     *
     */
    Heal = 'Heal',
    /**
     * @remarks
     * 由再生效果造成的治疗。
     *
     * Healing caused by regeneration effects.
     *
     */
    Regeneration = 'Regeneration',
    /**
     * @remarks
     * 当饥饿值满时造成的治疗。
     *
     * Healing caused when hunger is full.
     *
     */
    SelfHeal = 'SelfHeal',
    /**
     * @remarks
     * 当不死图腾被激活时造成的治疗。
     *
     * Healing caused when Totem of Undying is activated.
     *
     */
    TotemOfUndying = 'TotemOfUndying',
}
