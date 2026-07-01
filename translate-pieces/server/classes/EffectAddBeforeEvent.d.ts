/* IMPORT */ import { Entity } from '..';

/**
 * 包含与将效果（如中毒）添加到实体相关的变化信息。
 *
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 当设置为 `true` 时会取消事件。
     *
     * When set to true will cancel the event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 效果的持续时间。
     *
     * Effect duration.
     *
     */
    duration: number;
    /**
     * @remarks
     * 正在添加的效果的类型。
     *
     * The type of the effect that is being added.
     *
     */
    readonly effectType: string;
    /**
     * @remarks
     * 正在添加效果的实体。
     *
     * Entity that the effect is being added to.
     *
     */
    readonly entity: Entity;
}
