/* IMPORT */ import { GameRuleChangeAfterEvent } from '..';

/**
 * 管理当 world.gameRules 属性发生变化时所连接的回调。
 *
 * Manages callbacks that are connected to when a
 * world.gameRules property has changed.
 */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加当 world.gameRules 属性发生变化时会被调用的回调。
     *
     * Adds a callback that will be called when a world.gameRules
     * property is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除当 world.gameRules 属性发生变化时不再被调用的回调。
     *
     * Removes a callback from being called when a world.gameRules
     * property is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}
