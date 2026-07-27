/* IMPORT */ import { EntityAttributeComponent } from '..';

/**
 * 定义此实体与饥饿值的交互方式。封装了 `minecraft:player.hunger` 属性。
 *
 * Defines the interactions with this entity for hunger. Wraps the `minecraft:player.hunger` attribute.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHungerComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.hunger';
}
