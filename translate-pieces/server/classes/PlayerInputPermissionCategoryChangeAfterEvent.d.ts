/* IMPORT */ import { InputPermissionCategory, Player } from '..';

/**
 * 包含关于玩家输入权限更改后事件的信息。
 *
 * Contains information regarding an event after a players input permissions change.
 */
export class PlayerInputPermissionCategoryChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已更改的输入权限类别。
     *
     * The category of input permissions that have changed.
     *
     */
    readonly category: InputPermissionCategory;
    /**
     * @remarks
     * 玩家输入权限的启用/禁用状态。
     *
     * The enabled/disabled state of the players input permissions.
     *
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * 输入权限已被更改的玩家。
     *
     * The player that has had their input permissions changed.
     *
     */
    readonly player: Player;
}
