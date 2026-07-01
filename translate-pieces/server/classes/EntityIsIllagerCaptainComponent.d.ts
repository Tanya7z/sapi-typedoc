/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体是一个灾厄队长。
 *
 * When added, this component signifies that this entity is an
 * illager captain.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_illager_captain';
}
