/* IMPORT */ import { Dimension, DimensionLocation, Entity, Player, RGBA, Vector3 } from '..';

/**
 * 文本图元的基础类。表示世界中的一个对象及其基本属性。
 *
 * The base class for a text primitive. Represents an object in the world and its base properties.
 */
export class PrimitiveShape {
    private constructor();
    /**
     * @remarks
     * 此形状所依附的实体。设置时，此形状将复制所依附实体的根位置，并且形状的位置将用作偏移量。
     *
     * The entity this shape is attached to. When set, this shape will copy the root location of the attached entity and the shape's position will be used as an offset.
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * 形状的颜色。
     *
     * The color of the shape.
     *
     */
    color: RGBA;
    /**
     * @remarks
     * 形状可见的维度。如果维度为 `undefined`，则将在所有维度中显示。
     *
     * The dimension the shape is visible within. If the dimension is undefined, it will display in all dimensions.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 返回形状是否具有有限的自动移除时间。
     *
     * Returns true if the shape has a limited time span before being removed.
     *
     */
    readonly hasDuration: boolean;
    /**
     * @remarks
     * 形状的位置。
     *
     * The location of the shape.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 如果已定义，此距离将用于确定为每个客户端渲染此图元的远近。默认情况下，距离将匹配客户端的渲染距离设置。
     *
     * If defined, this distance will be used to determine how far away this primitive will be rendered for each client. By default the distance will match the client's render distance setting.
     *
     * Minimum Value: 0
     */
    maximumRenderDistance?: number;
    /**
     * @remarks
     * 形状的旋转角度（欧拉角 —— [Pitch, Yaw, Roll]）。
     *
     * The rotation of the shape (Euler angles - [Pitch, Yaw, Roll]).
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 形状的缩放比例。
     *
     * The scale of the shape.
     *
     * Bounds: [-1000, 1000]
     */
    scale: number;
    /**
     * @remarks
     * 距离此形状自动移除的剩余时间（以秒为单位）。如果形状没有有限的生存期，则返回 `undefined`。
     *
     * The time left (in seconds) until this shape is automatically removed. Returns undefined if the shape does not have a limited life-span.
     *
     */
    timeLeft?: number;
    /**
     * @remarks
     * 距离此形状自动移除的总初始时间（以秒为单位）。如果形状没有有限的生存期，则返回 `undefined`。
     *
     * The total initial time-span (in seconds) until this shape is automatically removed. Returns undefined if the shape does not have a limited life-span.
     *
     */
    readonly totalTimeLeft?: number;
    /**
     * @remarks
     * 此形状对其可见的玩家列表。如果留空，形状将对所有玩家可见。
     *
     * The list of players that this shape will be visible to. If left empty, the shape will be visible to all players.
     *
     */
    visibleTo: Player[];
    /**
     * @remarks
     * 从世界中移除此形状。可以通过 PrimitiveShapesManager 的 addText 方法重新添加该形状。
     *
     * Removes this shape from the world. The shape can be re-added via the PrimitiveShapesManager's addText method.
     *
     */
    remove(): void;
    /**
     * @remarks
     * 设置形状的位置和维度。如果维度为 `undefined`，则将在所有维度中显示。
     *
     * Set the location and dimension of the shape. If the dimension is undefined, it will display in all dimensions.
     *
     */
    setLocation(location: DimensionLocation | Vector3): void;
}
