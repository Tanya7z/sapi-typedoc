/* IMPORT */ import { Container, InvalidContainerError, ItemComponent } from '..';

/**
 * 该组件被添加到具有 `Storage Item`(存储物品)组件的物品上。
 * 可以访问和修改该物品的物品栏容器。
 *
 * This component is added to items with the `Storage Item`
 * component. Can access and modify this items inventory
 * container.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemInventoryComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:inventory';
}
