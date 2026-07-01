/* IMPORT */ import { Entity, EntityAttachPoint } from '..';

/**
 * 用于将相机附加到非玩家实体上。
 *
 * Used to attach the camera to a non player entity.
 */
export interface CameraAttachOptions {
    /**
     * @remarks
     * 设置一个相机要追踪的非玩家实体。
     *
     * Set a non player entity for the camera to target.
     *
     */
    entity: Entity;
    /**
     * @remarks
     * 您要追踪的实体的位置（例如头部、脚部、眼睛）。
     *
     * The location of the entity that you want to target (eg.
     * head, feet, eyes).
     *
     */
    locator: EntityAttachPoint;
}
