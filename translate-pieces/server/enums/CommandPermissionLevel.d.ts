/**
 * 执行自定义命令所需的权限等级。
 *
 * The required permission level to execute the custom command.
 */
export enum CommandPermissionLevel {
    /**
     * @remarks
     * 任何对象都可以运行此等级。
     *
     * Anything can run this level.
     *
     */
    Any = 0,
    /**
     * @remarks
     * 任何操作员都可以运行此命令，包括命令方块。
     *
     * Any operator can run this command, including command blocks.
     *
     */
    GameDirectors = 1,
    /**
     * @remarks
     * 任何操作员都可以运行此命令，但不包括命令方块。
     *
     * Any operator can run this command, but NOT command blocks.
     *
     */
    Admin = 2,
    /**
     * @remarks
     * 任何服务器主机都可以运行此命令。
     *
     * Any server host can run this command.
     *
     */
    Host = 3,
    /**
     * @remarks
     * 仅专用服务器可以运行此命令。
     *
     * Only dedicated server can run this command.
     *
     */
    Owner = 4,
}
