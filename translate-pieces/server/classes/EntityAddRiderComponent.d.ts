/* IMPORT */ import { EntityComponent } from '..';

/**
 * 添加时，此组件使实体在生成时携带指定 entityType 的骑乘者。
 *
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 在特定条件下生成时作为此实体骑乘者添加的实体类型。
     *
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     *
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /**
     * @remarks
     * 可选的在骑乘者为此实体生成时触发的事件。
     *
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}
