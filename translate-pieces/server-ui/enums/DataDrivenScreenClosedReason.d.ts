/**
 * 数据驱动 UI 界面（MessageBox 或 CustomForm）被关闭的原因。
 *
 * The reason why a data driven UI screen (MessageBox or
 * CustomForm) was closed.
 */
export enum DataDrivenScreenClosedReason {
    /**
     * @remarks
     * 该界面被客户端关闭（例如，玩家关闭了它，或者存在客户端授权的关闭按钮）。
     *
     * The screen was closed by the client (e.g., the player
     * dismissed it or there was a client authoritative close
     * button).
     *
     */
    ClientClosed = 'ClientClosed',
    /**
     * @remarks
     * 该界面被服务器关闭，很可能是通过 close API 关闭的。
     *
     * The screen was closed by the server, likely by the close
     * API.
     *
     */
    ServerClosed = 'ServerClosed',
    /**
     * @remarks
     * 由于玩家正忙于另一个 UI 交互，无法显示该界面。
     *
     * The screen could not be shown because the player was busy
     * with another UI interaction.
     *
     */
    UserBusy = 'UserBusy',
}
