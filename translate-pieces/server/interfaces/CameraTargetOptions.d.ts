/* IMPORT */ import { Entity, Vector3 } from '..';

/**
 * 用于使用自由相机瞄准一个实体。
 *
 * Used to target an entity with a free camera.
 */
export interface CameraTargetOptions {
    /**
     * @remarks
     * 设置一个从目标实体中心的 <x, y, z> 偏移。
     *
     * Set an <x, y, z> offset from the target entity's center.
     *
     */
    offsetFromTargetCenter?: Vector3;
    /**
     * @remarks
     * 您要瞄准的单个实体。
     *
     * The singular entity you want to target.
     *
     */
    targetEntity: Entity;
}
