/* IMPORT */ import { CustomTexture, WaypointTexture, WaypointTextureSelector } from '..';

/**
 * 定义一个纹理及其应显示的距离范围。在 {@link WaypointTextureSelector} 内部使用，以创建基于距离的纹理切换。
 *
 * Defines a texture and the distance range in which it should
 * be displayed. Used within a {@link WaypointTextureSelector}
 * to create distance-based texture switching.
 */
export interface WaypointTextureBounds {
    /**
     * @remarks
     * 此纹理的下距离边界。当到路径点的距离大于此值时显示纹理。值必须大于或等于 0。
     *
     * The lower distance bound for this texture. The texture is
     * displayed when the distance to the waypoint is greater than
     * this value. Value must be greater than or equal to 0.
     *
     * Minimum Value: 0
     */
    lowerBound: number;
    /**
     * @remarks
     * 在此距离范围内显示的 {@link WaypointTexture} 或 {@link CustomTexture}。
     *
     * The {@link WaypointTexture} or {@link CustomTexture} to
     * display within this distance range.
     *
     */
    texture: CustomTexture | WaypointTexture;
    /**
     * @remarks
     * 此纹理的上距离边界。当到路径点的距离小于或等于此值时显示纹理。如果未定义，则没有上限。值必须大于或等于 0。
     *
     * The upper distance bound for this texture. The texture is
     * displayed when the distance to the waypoint is less than or
     * equal to this value. If undefined, there is no upper limit.
     * Value must be greater than or equal to 0.
     *
     * Minimum Value: 0
     */
    upperBound?: number;
}
