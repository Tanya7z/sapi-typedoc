/* IMPORT */ import { Vector3 } from '..';

/**
 * 描述此可骑乘实体上的特定座位位置。
 *
 * Describes a particular seating position on this rideable
 * entity.
 */
export class Seat {
    private constructor();
    /**
     * @remarks
     * 骑乘者在骑乘此实体时允许旋转的角度（以度为单位）。
     *
     * Angle in degrees that a rider is allowed to rotate while
     * riding this entity.
     *
     */
    readonly lockRiderRotation: number;
    /**
     * @remarks
     * 此座位可支持的最大骑乘者数量。
     *
     * A maximum number of riders that this seat can support.
     *
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * 如果需要填充此座位，可放置在此座位位置的最小骑乘者数量。
     *
     * A minimum number of riders that can be placed in this seat
     * position, if this seat is to be filled.
     *
     */
    readonly minRiderCount: number;
    /**
     * @remarks
     * 此座位的实际位置，相对于实体的位置。
     *
     * Physical location of this seat, relative to the entity's
     * location.
     *
     */
    readonly position: Vector3;
    /**
     * @remarks
     * 旋转骑乘者的角度（以度为单位）。
     *
     * Angle in degrees to rotate riders by.
     *
     */
    readonly seatRotation: number;
}
