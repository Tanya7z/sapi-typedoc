/* IMPORT */ import { EntityAttributeComponent } from '..';

/**
 * 定义与此实体的 exhaustion（疲劳度）交互方式。封装了 `minecraft:player.exhaustion` 属性。
 *
 * Defines the interactions with this entity for Exhaustion.
 * Wraps the `minecraft.player.exhaustion` attribute.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityExhaustionComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.exhaustion';
}
