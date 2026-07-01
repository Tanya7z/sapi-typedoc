/* IMPORT */ import { Entity, EntityComponent, Seat } from '..';

/**
 * 当添加时，此组件添加了实体可以被另一个实体骑乘的能力。
 *
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 * @seeExample minibiomes.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 可用于控制此实体的座位（从零开始索引）。
     *
     * Zero-based index of the seat that can used to control this
     * entity.
     *
     * @throws This property can throw when used.
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * 确定当实体蹲下时是否不支持交互。
     *
     * Determines whether interactions are not supported if the
     * entity is crouching.
     *
     * @throws This property can throw when used.
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * 当玩家看着要骑乘此实体时应该显示的一组文本（通常用于触摸屏控制）。
     *
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     *
     * @throws This property can throw when used.
     */
    readonly interactText: string;
    /**
     * @remarks
     * 可成为乘客的生物的最大宽度。
     *
     * The max width a mob can be to be a passenger.
     *
     * @throws This property can throw when used.
     */
    readonly passengerMaxWidth: number;
    /**
     * @remarks
     * 如果为 `true`，此实体将把具有正确 `family_types` 的实体拉入任何可用座位。
     *
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     *
     * @throws This property can throw when used.
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * 如果为 `true`，骑乘者看着此实体时可以被拾取。
     *
     * If true, this entity will be picked when looked at by the
     * rider.
     *
     * @throws This property can throw when used.
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * 为此实体定义的骑乘者座位数量。
     *
     * Number of seats for riders defined for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * 向此实体添加一个骑乘者实体。
     *
     * Adds an entity to this entity as a rider.
     *
     * @worldMutation
     *
     * @param rider
     * 将成为此实体骑乘者的实体。
     *
     * Entity that will become the rider of this entity.
     * @returns
     * 如果骑乘者实体成功添加，则返回 `true`。
     *
     * True if the rider entity was successfully added.
     * @throws This function can throw errors.
     * @seeExample minibiomes.ts
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * 弹射此实体的指定骑乘者。
     *
     * Ejects the specified rider of this entity.
     *
     * @worldMutation
     *
     * @param rider
     * 应从此实体弹射的实体。
     *
     * Entity that should be ejected from this entity.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * 弹射此实体的所有骑乘者。
     *
     * Ejects all riders of this entity.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    /**
     * @remarks
     * 此实体支持的作为骑乘者的实体类型字符串列表。
     *
     * A string-list of entity types that this entity can support
     * as riders.
     *
     * @throws This function can throw errors.
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * 获取当前骑乘此实体的所有实体列表。
     *
     * Gets a list of the all the entities currently riding this
     * entity.
     *
     * @throws This function can throw errors.
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * 获取骑乘此实体的每个位置的位置和骑乘者数量列表。
     *
     * Gets a list of positions and number of riders for each
     * position for entities riding this entity.
     *
     * @throws This function can throw errors.
     */
    getSeats(): Seat[];
}
