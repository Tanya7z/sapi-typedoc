export enum WebSocketClientCloseReasons {
    /**
     * @remarks
     * 服务器已关闭该 Socket。
     *
     * The server has closed the socket.
     *
     */
    ClosedByServer = 0,
    /**
     * @remarks
     * 客户端已关闭该 Socket。
     *
     * The client has closed the socket.
     *
     */
    ClosedByClient = 1,
    /**
     * @remarks
     * 客户端接收到的负载体积超过了每个 Tick 配置的最大允许值，因此客户端关闭了 Socket。
     *
     * The client has received payloads whose body exceeds the
     * configured maximum size allowed per tick so the client has
     * closed the socket.
     *
     */
    IncomingPayloadsTooLarge = 2,
}
