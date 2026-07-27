/**
 * 包含生成实体的额外选项。
 *
 * Contains additional options for spawning an Entity.
 */
export interface SpawnEntityOptions {
    /**
     * @remarks
     * 可选布尔值，决定此实体是否应在游戏世界中持久存在。持久化可防止实体自动消失。
     *
     * Optional boolean which determines if this entity should
     * persist in the game world. Persistence prevents the entity
     * from automatically despawning.
     *
     */
    initialPersistence?: boolean;
    /**
     * @remarks
     * 可选参数，实体生成时设置的初始旋转角度（以度为单位）。
     *
     * Optional initial rotation, in degrees, to set on the entity
     * when it spawns.
     *
     */
    initialRotation?: number;
    /**
     * @remarks
     * 可选参数，实体生成后要发送给实体的事件。
     *
     * Optional spawn event to send to the entity after it is
     * spawned.
     *
     */
    spawnEvent?: string;
}
