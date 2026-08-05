/* IMPORT */ import { Dimension, DimensionLocation, Entity, Player, RGBA, Vector3 } from '../../server';

/**
 * 所有调试形状的基类。表示世界中的一个对象及其基本属性。
 *
 * The base class for all debug shapes. Represents an object in
 * the world and its base properties.
 */
export class DebugShape {
    private constructor();
    /**
     * @remarks
     * 此形状所附加的实体。设置后，此形状将复制附加实体的根位置，
     * 而形状的位置将作为偏移量使用。
     *
     * The entity this shape is attached to. When set, this shape
     * will copy the root location of the attached entity and the
     * shape's position will be used as an offset.
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
     * 该形状可见的维度。如果该维度未定义，则会在所有维度中显示。
     *
     * The dimension the shape is visible within. If the dimension
     * is undefined, it will display in all dimensions.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 如果形状在被移除之前具有有限的时间跨度，则返回 true。
     *
     * Returns true if the shape has a limited time span before
     * being removed.
     *
     */
    readonly hasDuration: boolean;
    /**
     * @remarks
     * 形状的位置。对于大多数形状，该位置是形状的中心，
     * 但 DebugLine 和 DebugArrow 例外，它们表示线的起点。
     *
     * The location of the shape. For most shapes the location is
     * the centre of the shape, except DebugLine and DebugArrow
     * where this represents the start point of the line.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 如果已定义，此距离将用于确定该形状对每个客户端所渲染的远处距离。
     * 默认情况下，距离将匹配客户端的视距设置。
     *
     * If defined, this distance will be used to determine how far
     * away this shape will be rendered for each client. By default
     * the distance will match the client's render distance
     * setting.
     *
     * Minimum Value: 0
     */
    maximumRenderDistance?: number;
    /**
     * @remarks
     * 形状的旋转（欧拉角 - [俯仰角，偏航角，滚转角]）。
     *
     * The rotation of the shape (Euler angles - [Pitch, Yaw,
     * Roll]).
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 形状的缩放比例。此属性不适用于 DebugLine 或 DebugArrow。
     *
     * The scale of the shape. This does not apply to DebugLine or
     * DebugArrow.
     *
     */
    scale: number;
    /**
     * @remarks
     * 此形状被自动移除之前剩余的时间（以秒为单位）。
     * 如果形状没有有限的生命周期，则返回 undefined。
     *
     * The time left (in seconds) until this shape is automatically
     * removed. Returns undefined if the shape does not have a
     * limited life-span.
     *
     */
    timeLeft?: number;
    /**
     * @remarks
     * 直到该形状被自动移除为止的初始总时间跨度（以秒为单位）。
     * 如果形状没有有限的生命周期，则返回 undefined。
     *
     * The total initial time-span (in seconds) until this shape is
     * automatically removed. Returns undefined if the shape does
     * not have a limited life-span.
     *
     */
    readonly totalTimeLeft?: number;
    /**
     * @remarks
     * 可以看到此形状的玩家列表。如果留空，则所有玩家都可以看到该形状。
     *
     * The list of players that this shape will be visible to. If
     * left empty, the shape will be visible to all players.
     *
     */
    visibleTo: Player[];
    /**
     * @remarks
     * 从世界中移除此形状。可以通过 DebugDrawer 的 addShape 方法重新添加。
     *
     * Removes this shape from the world. The shape can be re-added
     * via the DebugDrawer's addShape method.
     *
     */
    remove(): void;
    /**
     * @remarks
     * 设置形状的位置和维度。如果该维度未定义，则会在所有维度中显示。
     * 对于大多数形状，该位置是形状的中心，但 DebugLine 和 DebugArrow
     * 例外，它们表示线的起点。
     *
     * Set the location and dimension of the shape. If the
     * dimension is undefined, it will display in all dimensions.
     * For most shapes the location is the centre of the shape,
     * except DebugLine and DebugArrow where this represents the
     * start point of the line.
     *
     */
    setLocation(location: DimensionLocation | Vector3): void;
}
