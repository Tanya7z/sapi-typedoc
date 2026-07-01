/* IMPORT */ import { EntityComponent, EntityDefinitionFeedItem, Trigger } from '..';

/**
 * 为实体添加成长计时器。可以通过给予实体其喜好的物品（由 feedItems 定义）来加速成长。
 *
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体成长前的剩余时间，-1 表示始终为幼年体。
     *
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * 此实体成长时触发的事件。
     *
     * Event that runs when this entity grows up.
     *
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * 使用的饲料物品在成功交互后将转化为此物品。
     *
     * The feed item used will transform into this item upon
     * successful interaction.
     *
     * @throws This property can throw when used.
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * 实体成长时掉落的物品列表。
     *
     * List of items that the entity drops when it grows up.
     *
     * @throws This function can throw errors.
     */
    getDropItems(): string[];
    /**
     * @remarks
     * 可以喂给实体的物品列表。包含 `item`（物品名称）和 `growth`（定义成长多少时间）。
     *
     * List of items that can be fed to the entity. Includes 'item'
     * for the item name and 'growth' to define how much time it
     * grows up by.
     *
     * @throws This function can throw errors.
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}
