/* IMPORT */ import { EntityFilter, EntityHealCause } from '..';

/**
 * 包含注册实体治疗事件的可选参数。
 *
 * Contains optional parameters for registering an entity heal
 * event.
 */
export interface EntityHealEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当治疗原因匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for healing
     * causes that match.
     *
     */
    allowedHealCauses?: EntityHealCause[];
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
