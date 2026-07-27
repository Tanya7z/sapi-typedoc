/* IMPORT */ import { EntityAttributeComponent } from '..';

/**
 * 定义此实体与饱和度的交互方式。封装了 `minecraft:player.saturation` 属性。
 *
 * Defines the interactions with this entity for saturation. Wraps the `minecraft:player.saturation` attribute.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySaturationComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.saturation';
}
