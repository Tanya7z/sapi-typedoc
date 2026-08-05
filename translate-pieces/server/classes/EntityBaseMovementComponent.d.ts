/* IMPORT */ import { EntityComponent } from '..';

/**
 * 实体移动事件系列的基类。
 *
 * Base class for a family of entity movement events.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该生物此移动模式的最大转弯速率。
     *
     * Maximum turn rate for this movement modality of the mob.
     *
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
}
