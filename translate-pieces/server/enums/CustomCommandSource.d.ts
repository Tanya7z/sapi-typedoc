/**
 * 谁执行了该命令。
 *
 * Who executed the command.
 */
export enum CustomCommandSource {
    /**
     * @remarks
     * 命令源自命令方块。
     *
     * Command originated from a command block.
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 命令源自实体或玩家。
     *
     * Command originated from an entity or player.
     *
     */
    Entity = 'Entity',
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 命令源自服务器。
     *
     * Command originated from the server.
     *
     */
    Server = 'Server',
}
