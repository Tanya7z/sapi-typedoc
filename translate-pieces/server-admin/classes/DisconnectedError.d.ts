/**
 * 当尝试与加入事件交互但玩家已断开连接时抛出的错误。
 *
 * An error that is thrown when trying to interact with a join
 * event and the player is disconnected.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DisconnectedError extends Error {
    private constructor();
    /**
     * @remarks
     * 已断开连接的玩家的 ID。
     *
     * The id of the player that was disconnected.
     *
     * @earlyExecution
     *
     */
    readonly id: string;
}
