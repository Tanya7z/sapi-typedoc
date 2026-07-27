/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体的皮肤 ID（材质变体）。
 *
 * Defines the entity's skin ID (texture variant).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:skin_id';
}
