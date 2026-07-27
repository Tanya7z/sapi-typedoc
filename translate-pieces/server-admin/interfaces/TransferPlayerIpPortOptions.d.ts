/**
 * 传输玩家到支持直接主机/端口连接的目标服务器时所使用的选项。
 *
 * Options when transferring a player to a server that supports
 * direct host/port connections.
 */
export interface TransferPlayerIpPortOptions {
    /**
     * @remarks
     * 目标服务器的主机名。
     *
     * Hostname of the destination server.
     *
     */
    hostname: string;
    /**
     * @remarks
     * 目标服务器的端口。
     *
     * Port of the destination server.
     *
     */
    port: number;
}
