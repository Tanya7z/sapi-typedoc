/**
 * 当表单操作因为目标玩家已离开游戏而失败时抛出。
 *
 * Thrown when a form operation fails because the target player
 * has left the game.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerLeftError extends Error {
    private constructor();
    /**
     * @remarks
     * 玩家离开游戏时正在显示的表单标识符。
     *
     * The identifier of the form that was being shown when the
     * player left the game.
     *
     * @earlyExecution
     *
     */
    readonly formId: string;
}
