/* IMPORT */ import { WaypointTextureBounds } from '..';

/**
 * 定义路径点纹理如何根据距离变化。包含一个纹理边界列表，决定在不同距离范围内显示哪个纹理。
 *
 * Defines how waypoint textures change based on distance.
 * Contains a list of texture bounds that determine which
 * texture is displayed at different distance ranges.
 */
export interface WaypointTextureSelector {
    /**
     * @remarks
     * 一个 {@link WaypointTextureBounds} 数组，定义在不同距离范围内显示哪些纹理。系统会评估这些边界，根据到路径点的当前距离确定合适的纹理。列表的最大大小限制为 16。
     *
     * An array of {@link WaypointTextureBounds} that define which
     * textures are displayed at different distance ranges. The
     * system evaluates these bounds to determine the appropriate
     * texture based on the current distance to the waypoint. The
     * list has a maximum size limit of 16.
     *
     */
    textureBoundsList: WaypointTextureBounds[];
}
