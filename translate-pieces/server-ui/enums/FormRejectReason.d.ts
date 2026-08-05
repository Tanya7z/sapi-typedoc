/**
 * 一个枚举，表示表单被拒绝的原因。
 *
 * An enum representing the reasons why a form was rejected.
 */
export enum FormRejectReason {
    /**
     * @remarks
     * 由于来自客户端的响应格式错误或无法解析，表单被拒绝。
     *
     * The form was rejected because the response from the client
     * was malformed or could not be parsed.
     *
     */
    MalformedResponse = 'MalformedResponse',
    /**
     * @remarks
     * 由于玩家在响应前退出了游戏，表单被拒绝。
     *
     * The form was rejected because the player quit the game
     * before responding.
     *
     */
    PlayerQuit = 'PlayerQuit',
    /**
     * @remarks
     * 由于在玩家响应前服务器关闭，表单被拒绝。
     *
     * The form was rejected because the server shut down before
     * the player responded.
     *
     */
    ServerShutdown = 'ServerShutdown',
}
