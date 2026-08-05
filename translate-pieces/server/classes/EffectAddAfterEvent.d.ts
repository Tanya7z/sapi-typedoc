/* IMPORT */ import { Effect, Entity } from '..';

/**
 * 包含与将效果（如中毒）添加到实体相关的变化信息。
 *
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddAfterEvent {
    private constructor();
    /**
     * @remarks
     * 效果的附加属性和详细信息。
     *
     * Additional properties and details of the effect.
     *
     */
    readonly effect: Effect;
    /**
     * @remarks
     * 正在添加效果的实体。
     *
     * Entity that the effect is being added to.
     *
     */
    readonly entity: Entity;
}
