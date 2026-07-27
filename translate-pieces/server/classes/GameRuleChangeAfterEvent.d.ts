/* IMPORT */ import { GameRule } from '..';

/**
 * 包含关于已更改的 world.gameRules 属性的信息。
 *
 * Contains information regarding a changed world.gameRules
 * property.
 */
export class GameRuleChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 与已更改的 world.gameRules 属性相对应的规则标识符。
     *
     * The rule identifier pertaining to the changed
     * world.gameRules property.
     *
     */
    readonly rule: GameRule;
    /**
     * @remarks
     * 更改之后的 world.gameRules 属性的值。
     *
     * The value of the world.gameRules property after being
     * changed.
     *
     */
    readonly value: boolean | number;
}
