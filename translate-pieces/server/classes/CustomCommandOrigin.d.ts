/* IMPORT */ import { Block, CustomCommandSource, Entity } from '..';

/**
 * 关于命令来源的详细信息。
 *
 * Details about the origins of the command.
 */
export class CustomCommandOrigin {
    private constructor();
    /**
     * @remarks
     * 如果此命令是通过 NPC 发起的，则返回发起 NPC 对话的实体。
     *
     * If this command was initiated via an NPC, returns the entity
     * that initiated the NPC dialogue.
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * 如果此命令是通过方块（如命令方块）触发的，则为来源方块。
     *
     * Source block if this command was triggered via a block
     * (e.g., a commandblock.)
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * 如果此命令是由实体（如 NPC）触发的，则为来源实体。
     *
     * Source entity if this command was triggered by an entity
     * (e.g., a NPC).
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * 返回触发此命令的来源类型。
     *
     * Returns the type of source that fired this command.
     *
     */
    readonly sourceType: CustomCommandSource;
}
