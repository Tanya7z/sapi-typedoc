/* IMPORT */ import { DimensionLocation, InvalidWaypointError, InvalidWaypointTextureSelectorError, RGB, WaypointTextureSelector } from '..';

/**
 * Base class for waypoints displayed on the player's locator
 * bar. Waypoints can track locations or entities and are
 * rendered with customizable textures and colors.
 *
 * 显示在玩家定位栏上的路径点的基类。路径点可以跟踪位置或实体，并使用可自定义的纹理和颜色进行渲染。
 *
 * Waypoints act as shared handles that can be added to
 * multiple players' locator bars. When you modify a waypoint's
 * properties (such as color, texture, or enabled state), the
 * changes are reflected for all players who have that waypoint
 * in their locator bar. This allows you to efficiently manage
 * waypoints across multiple players without creating separate
 * instances for each player.
 *
 * 路径点作为共享句柄，可以添加到多个玩家的定位栏中。当你修改路径点的属性（如颜色、纹理或启用状态）时，所有在其定位栏中拥有该路径点的玩家都会看到这些更改。这使得你可以高效地跨多个玩家管理路径点，而无需为每个玩家创建单独的实例。
 */
export class Waypoint {
    private constructor();
    /**
     * @remarks
     * Optional {@link RGB} color tint applied to the waypoint
     * icon. If not specified, the waypoint uses its default color.
     *
     * 应用于路径点图标的可选 {@link RGB} 颜色色调。如果未指定，路径点将使用其默认颜色。
     *
     * @worldMutation
     *
     */
    color?: RGB;
    /**
     * @remarks
     * Controls whether the waypoint is currently displayed on the
     * player's screen. When disabled, the waypoint is hidden but
     * remains valid.
     *
     * 控制路径点当前是否显示在玩家的屏幕上。禁用时，路径点会被隐藏但仍保持有效。
     *
     * @worldMutation
     *
     */
    isEnabled: boolean;
    /**
     * @remarks
     * Returns whether the waypoint is currently valid. A waypoint
     * becomes invalid when its tracked entity is no longer valid.
     *
     * 返回路径点当前是否有效。当路径点跟踪的实体不再有效时，路径点将变为无效。
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * The {@link WaypointTextureSelector} that determines which
     * icon texture is displayed for the waypoint based on distance
     * or other criteria.
     *
     * 根据距离或其他条件确定路径点显示哪种图标纹理的 {@link WaypointTextureSelector}。
     *
     * @worldMutation
     *
     */
    textureSelector: WaypointTextureSelector;
    /**
     * @remarks
     * Gets the current {@link DimensionLocation} of the waypoint.
     * For entity waypoints, this returns the entity's current
     * position. For location waypoints, this returns the stored
     * location.
     *
     * 获取路径点的当前 {@link DimensionLocation}。对于实体路径点，返回实体的当前位置。对于位置路径点，返回存储的位置。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    getDimensionLocation(): DimensionLocation;
    /**
     * @remarks
     * Removes the waypoint from all locator bars it has been added
     * to. This affects all players who have this waypoint in their
     * locator bar.
     *
     * 从所有已添加的定位栏中移除该路径点。这会影响所有在其定位栏中拥有此路径点的玩家。
     *
     * @worldMutation
     *
     */
    remove(): void;
}
