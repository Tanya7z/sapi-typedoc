// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * 包含调试实用工具相关函数。
 *
 * Contains debug utility functions.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/debug-utilities",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import { ArgumentOutOfBoundsError } from '@minecraft/common';
import { Dimension, DimensionLocation, Entity, Player, RGBA, RawMessage, RawMessageError, Vector2, Vector3 } from '@minecraft/server';
/**
 * 箭头头部/箭尖的长度。
 *
 * The length of the arrow's head/tip.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugArrow extends DebugLine {
    /**
     * @remarks
     * 向世界中添加一个新的调试形状。
     *
     * Adds a new debug shape to the world.
     *
     */
    headLength: number;
    /**
     * @remarks
     * 箭头头部/箭尖的半径。
     *
     * The radius of the arrow's head/tip.
     *
     */
    headRadius: number;
    /**
     * @remarks
     * 箭头头部/箭尖底部圆周的段数（默认：4）。
     *
     * The number of segments for the base circle of the arrow's
     * head/tip (default: 4).
     *
     * Bounds: [3, 128]
     */
    headSegments: number;
    constructor(
        location: DimensionLocation | Vector3,
        endLocation: Vector3,
    );
}

/**
 * 表示一个长方体（立方体）的调试形状类。
 *
 * A debug shape class that represents a box or cuboid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugBox extends DebugShape {
    /**
     * @remarks
     * 该形状的包围盒。最终绘制的方块将是该包围盒乘以形状的缩放比例。
     *
     * The bounding box of the shape. The final box will be this
     * bound multiplied by the shape's scale.
     *
     */
    bound: Vector3;
    constructor(location: DimensionLocation | Vector3);
}

/**
 * 表示一个圆（2D）的调试形状类。
 *
 * A debug shape class that represents a circle (2D).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCircle extends DebugShape {
    constructor(location: DimensionLocation | Vector3);
}

/**
 * 表示圆锥体的调试形状类。
 *
 * A debug shape class that represents a cone.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCone extends DebugShape {
    /**
     * @remarks
     * 圆锥体的高度。
     *
     * The height of the cone.
     *
     */
    height: number;
    /**
     * @remarks
     * 用于近似圆锥体圆形底面的分段数量。取值范围:[3, 128]
     *
     * The number of segments used to approximate the circular base
     * of the cone. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    numSegments: number;
    /**
     * @remarks
     * 圆锥体圆形底面的半径(x:底部半径,y:顶部半径)。
     *
     * The radii of the cone's circular base (x: bottom radius, y:
     * top radius).
     *
     */
    radii: Vector2;
    constructor(location: DimensionLocation | Vector3);
}

/**
 * 表示圆柱体的调试形状类。
 *
 * A debug shape class that represents a cylinder.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCylinder extends DebugShape {
    /**
     * @remarks
     * 圆柱体的高度。
     *
     * The height of the cylinder.
     *
     */
    height: number;
    /**
     * @remarks
     * 用于近似圆柱体圆形截面的分段数。取值范围：[3, 128]
     *
     * The number of segments used to approximate the circular
     * cross-section of the cylinder. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    numSegments: number;
    /**
     * @remarks
     * 圆柱体圆形截面的半径（x：底部半径，y：顶部半径）。
     *
     * The radii of the cylinder's circular cross-section (x:
     * bottom radius, y: top radius).
     *
     */
    radii: Vector2;
    constructor(location: DimensionLocation | Vector3);
}

/**
 * 用于在世界中添加和移除线框形状的调试绘制类。
 *
 * Debug Drawing class used to allow adding and removing
 * wireframe shapes in world space.
 */
export class DebugDrawer {
    private constructor();
    /**
     * @remarks
     * 向世界中添加一个新的调试形状。
     *
     * Adds a new debug shape to the world.
     *
     * @param shape
     * 要添加的调试形状,应为 DebugBox、DebugLine、DebugCircle、DebugSphere、DebugArrow 或 DebugText 类型。
     *
     * The debug shape to be added. Should be of type DebugBox,
     * DebugLine, DebugCircle, DebugSphere, DebugArrow or
     * DebugText.
     */
    addShape(shape: DebugShape, dimension?: Dimension): void;
    /**
     * @remarks
     * 移除世界中的所有调试形状。
     *
     * Removes all debug shapes from the world.
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * 从世界中移除一个调试形状实例。等同于在形状本身上调用 remove。
     *
     * Removes an instance of a debug shape from the world. This is
     * equivalent to calling remove on the shape itself.
     *
     */
    removeShape(shape: DebugShape): void;
}

/**
 * 表示椭球体的调试形状类。
 *
 * A debug shape class that represents an ellipsoid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugEllipsoid extends DebugShape {
    /**
     * @remarks
     * 椭球体沿各坐标轴（x、y、z）的半径。
     *
     * The radii of the ellipsoid along each axis (x, y, z).
     *
     */
    radii: Vector3;
    /**
     * @remarks
     * 沿每个轴用于近似椭球体的分段数。范围：[3, 128]
     *
     * The number of segments used to approximate the ellipsoid per
     * axis. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    segmentsPerAxis: number;
    constructor(location: DimensionLocation | Vector3);
}

/**
 * 表示一条线段的调试形状类。
 *
 * A debug shape class that represents a line segment.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugLine extends DebugShape {
    /**
     * @remarks
     * 线段的终点位置。最终绘制的线段将位于 location 与 endLocation 之间。
     *
     * The end location of the line segment. The final line will
     * spawn between location and endLocation.
     *
     */
    endLocation: Vector3;
    constructor(
        location: DimensionLocation | Vector3,
        endLocation: Vector3,
    );
}

/**
 * 表示金字塔的调试形状类。
 *
 * A debug shape class that represents a pyramid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugPyramid extends DebugShape {
    /**
     * @remarks
     * 金字塔底面的深度。
     *
     * The depth of the pyramid's base.
     *
     */
    depth?: number;
    /**
     * @remarks
     * 金字塔的高度。
     *
     * The height of the pyramid.
     *
     */
    height: number;
    /**
     * @remarks
     * 金字塔底面的宽度。
     *
     * The width of the pyramid's base.
     *
     */
    width: number;
    constructor(location: DimensionLocation | Vector3);
}

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

/**
 * 表示一个球体的调试形状类。
 *
 * A debug shape class that represents a sphere.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugSphere extends DebugShape {
    constructor(location: DimensionLocation | Vector3);
}

/**
 * A debug shape class that represents a text label in the
 * world with a background.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugText extends DebugShape {
    /**
     * @remarks
     * If set to true, the debug text will render the back-face of
     * the background. Defaults to true but will always be false if
     * 'useRotation' is set to false.
     *
     */
    backfaceVisible: boolean;
    /**
     * @remarks
     * The color of the background plate of the text. If set to
     * undefined, it will use the default color.
     *
     */
    backgroundColorOverride?: RGBA;
    /**
     * @remarks
     * If set to true, the text will be hidden behind blocks or
     * entities. By default this is set to false (will always
     * render).
     *
     */
    depthTest: boolean;
    /**
     * @remarks
     * This value determines the gap between lines for the debug
     * text. By default the line gap height is 0.
     *
     */
    lineGapHeight: number;
    /**
     * @remarks
     * Get the text of the debug text shape. Returns the RawText of
     * the debug text if `setText` was called with a RawMessage or
     * a RawText object, otherwise returns a string.
     *
     */
    readonly text: RawMessage | string;
    /**
     * @remarks
     * If set to true, the debug text will render the back-face of
     * the text. Defaults to true but will always be false if
     * 'useRotation' is set to false.
     *
     */
    textBackfaceVisible: boolean;
    /**
     * @remarks
     * If set to true, the text will not face the camera and
     * instead will use the rotation from the shape.
     *
     */
    useRotation: boolean;
    constructor(
        location: DimensionLocation | Vector3,
        text: RawMessage | string,
    );
    /**
     * @remarks
     * Sets the text to display.
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link RawMessageError}
     */
    setText(text: RawMessage | string): void;
}

export interface HandleCounts {
    handleCounts: Record<string, number>;
    name: string;
    packId: string;
    scriptModuleUUID: string;
}

export interface PluginStats {
    plugins: HandleCounts[];
}

export interface RuntimeStats {
    arrayCount: number;
    atomCount: number;
    atomSize: number;
    fastArrayCount: number;
    fastArrayElementCount: number;
    functionCodeSize: number;
    functionCount: number;
    functionLineCount: number;
    functionSize: number;
    memoryAllocatedCount: number;
    memoryAllocatedLimit: number;
    memoryAllocatedSize: number;
    memoryUsedCount: number;
    memoryUsedSize: number;
    objectCount: number;
    objectSize: number;
    propertyCount: number;
    propertySize: number;
    stringCount: number;
    stringSize: number;
}

/**
 * @remarks
 * 为每个已激活的脚本插件/附加包收集类型使用统计信息。
 *
 * Collect type usage stats for each active script
 * plugin/add-on.
 *
 * @returns
 * PluginStats 对象。
 *
 * PluginStats object.
 */
export function collectPluginStats(): PluginStats;
/**
 * @remarks
 * 收集脚本运行时的内存统计信息。
 *
 * Collect memory stats for script runtimes.
 *
 * @returns
 * RuntimeStats 对象。
 *
 * RuntimeStats object.
 */
export function collectRuntimeStats(): RuntimeStats;
/**
 * @remarks
 * 按插件禁用看门狗的“运行缓慢”与“耗时突增”警告。
 *
 * Disable watchdog slow and spike warnings per plugin.
 *
 * @param disable
 * 用于禁用或重新启用警告的开关。
 * Flag to disable or re-enable warnings.
 * @throws This function can throw errors.
 */
export function disableWatchdogTimingWarnings(disable: boolean): void;
/**
 * @remarks
 * 用于在世界空间中新增与移除线框形状的调试绘制类。
 *
 * Debug Drawing class used to allow adding and removing
 * wireframe shapes in world space.
 *
 */
export const debugDrawer: DebugDrawer;
