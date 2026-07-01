/* IMPORT */ import { EntityComponent, FeedItem } from '..';

/**
 * 定义与此实体进行治愈的交互方式。
 *
 * Defines the interactions with this entity for healing it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 决定是否可以在实体满生命值时使用物品。
     *
     * Determines if an item can be used regardless of the entity
     * being at full health.
     *
     * @throws This property can throw when used.
     */
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * 一组可以专门治愈此实体的物品。
     *
     * A set of items that can specifically heal this entity.
     *
     * @returns
     * 此组件关联的实体。
     *
     * Entity that this component is associated with.
     * @throws This function can throw errors.
     */
    getFeedItems(): FeedItem[];
}
