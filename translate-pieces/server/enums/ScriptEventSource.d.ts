/**
 * 描述脚本事件的来源。
 *
 * Describes where the script event originated from.
 */
export enum ScriptEventSource {
    /**
     * @remarks
     * 脚本事件源自方块，例如命令方块。
     *
     * The script event originated from a Block such as a Command
     * Block.
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 脚本事件源自实体，例如玩家、命令方块矿车或动画控制器。
     *
     * The script event originated from an Entity such as a Player,
     * Command Block Minecart or Animation Controller.
     *
     */
    Entity = 'Entity',
    /**
     * @remarks
     * 脚本事件源自 NPC 对话。
     *
     * The script event originated from an NPC dialogue.
     *
     */
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 脚本事件源自服务器，例如来自 runCommand API 调用或专用服务器控制台。
     *
     * The script event originated from the server, such as from a
     * runCommand API call or a dedicated server console.
     *
     */
    Server = 'Server',
}
