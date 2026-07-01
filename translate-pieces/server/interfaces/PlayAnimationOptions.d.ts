/* IMPORT */ import { Player } from '..';

/**
 * 包含动画播放方式的额外选项。
 *
 * Contains additional options for how an animation is played.
 */
export interface PlayAnimationOptions {
    /**
     * @remarks
     * 动画停止后淡出所需的时间。
     *
     * Amount of time to fade out after an animation stops.
     *
     */
    blendOutTime?: number;
    /**
     * @remarks
     * 指定要在实体上使用的已定义的控制器。
     *
     * Specifies a controller to use that has been defined on the
     * entity.
     *
     */
    controller?: string;
    /**
     * @remarks
     * 指定要转换到的状态。
     *
     * Specifies the state to transition to.
     *
     */
    nextState?: string;
    /**
     * @remarks
     * 动画对其可见的玩家列表。
     *
     * A list of players the animation will be visible to.
     *
     */
    players?: Player[];
    /**
     * @remarks
     * 指定此动画完成时应使用的 Molang 表达式。
     *
     * Specifies a Molang expression for when this animation should
     * complete.
     *
     */
    stopExpression?: string;
}
