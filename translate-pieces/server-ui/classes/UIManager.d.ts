/* IMPORT */ import { Player } from '../../server';

/**
 * 管理与玩家相关的 UI 表单，包括关闭所有打开的表单。
 *
 * Manages UI forms for a player, including closing all open forms.
 */
export class UIManager {
    private constructor();
    /**
     * @remarks
     * 关闭指定玩家的所有已打开的表单。
     *
     * Closes all open forms for the specified player.
     *
     * @worldMutation
     *
     * @param player
     * 要关闭其所有表单的玩家。
     *
     * The player whose forms should be closed.
     * @throws This function can throw errors.
     */
    closeAllForms(player: Player): void;
}
