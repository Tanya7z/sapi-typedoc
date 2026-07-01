/* IMPORT */ import { Container, EntityComponent, InvalidEntityError } from '..';

/**
 * 表示此实体的末影箱物品属性。此组件始终存在于玩家身上，其容器中的任何物品在玩家打开末影箱时都会显示出来。
 *
 * Represents this entity's ender inventory properties. This
 * component is always present on players and any items in its
 * container will display for the player when they access an
 * ender chest.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEnderInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 定义此实体的末影箱物品容器。如果实体已被移除，则容器将为 `undefined`。
     *
     * Defines the ender inventory container for this entity. The
     * container will be undefined if the entity has been removed.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:ender_inventory';
}
