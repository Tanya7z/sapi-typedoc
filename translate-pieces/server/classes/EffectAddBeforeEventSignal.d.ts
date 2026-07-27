/* IMPORT */ import { EffectAddBeforeEvent } from '..';

/**
 * 管理与将效果添加到实体时相关的回调。
 *
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当效果被添加到实体时将被调用。
     *
     * Adds a callback that will be called when an effect is added
     * to an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限被调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在效果被添加到实体时不再被调用。
     *
     * Removes a callback from being called when an effect is added
     * to an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}
