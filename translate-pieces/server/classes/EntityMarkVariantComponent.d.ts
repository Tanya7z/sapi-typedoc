/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体的标记变体。
 *
 * Defines the entity's mark variant.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:mark_variant';
}
