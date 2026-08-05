/* IMPORT */ import { EntityComponent } from '..';

/**
 * @beta
 * 为实体添加 NPC 功能，如自定义皮肤、名称和对话交互。
 *
 * Adds NPC capabilities to an entity such as custom skin,
 * name, and dialogue interactions.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当玩家首次与 NPC 交互时打开的 DialogueScene。
     *
     * The DialogueScene that is opened when players first interact
     * with the NPC.
     *
     * @worldMutation
     *
     */
    defaultScene: string;
    /**
     * @remarks
     * NPC 显示给玩家的名称。
     *
     * The name of the NPC as it is displayed to players.
     *
     * @worldMutation
     *
     */
    name: string;
    /**
     * @remarks
     * NPC 将使用的皮肤索引。
     *
     * The index of the skin the NPC will use.
     *
     * @worldMutation
     *
     */
    skinIndex: number;
    static readonly componentId = 'minecraft:npc';
}
