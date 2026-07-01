/* IMPORT */ import { EntityDamageCause, EntityFilter } from '..';

/**
 * 包含注册实体受伤前事件的可选参数。
 *
 * Contains optional parameters for registering an entity hurt
 * before event.
 */
export interface EntityHurtBeforeEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当伤害原因匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for damage
     * causes that match.
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * 如果设置了此值，则仅当实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match.
     *
     */
    entityFilter?: EntityFilter;
}
