/* IMPORT */ import { Dimension, Vector2, Vector3 } from '..';

/**
 * 包含传送实体的额外选项。
 *
 * Contains additional options for teleporting an entity.
 * @seeExample teleport.ts
 * @seeExample teleportMovement.ts
 */
export interface TeleportOptions {
    /**
     * @remarks
     * 是否检查传送后方块是否会阻挡实体。
     *
     * Whether to check whether blocks will block the entity after
     * teleport.
     *
     */
    checkForBlocks?: boolean;
    /**
     * @remarks
     * 可能将实体移动到的维度。如果未指定，实体将在其所在的维度内传送。
     *
     * Dimension to potentially move the entity to.  If not
     * specified, the entity is teleported within the dimension
     * that they reside.
     *
     */
    dimension?: Dimension;
    /**
     * @remarks
     * 传送后实体应面向的位置。
     *
     * Location that the entity should be facing after teleport.
     *
     */
    facingLocation?: Vector3;
    /**
     * @remarks
     * 传送后是否保留实体的速度。
     *
     * Whether to retain the entities velocity after teleport.
     *
     */
    keepVelocity?: boolean;
    /**
     * @remarks
     * 传送后实体的旋转角度。
     *
     * Rotation of the entity after teleport.
     *
     */
    rotation?: Vector2;
}
