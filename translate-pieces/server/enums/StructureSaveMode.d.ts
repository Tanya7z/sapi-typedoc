/**
 * 指定结构的保存方式。
 *
 * Specifies how a structure should be saved.
 */
export enum StructureSaveMode {
    /**
     * @remarks
     * 结构将临时保存到内存中。结构将持续到世界关闭为止。
     *
     * The structure will be temporarily saved to memory. The
     * structure will persist until the world is shut down.
     *
     */
    Memory = 'Memory',
    /**
     * @remarks
     * 结构将保存到世界文件中，并在世界加载之间持续存在。可以通过 @minecraft/server.StructureManager.delete 从世界中移除已保存的结构。
     *
     * The structure will be saved to the world file and persist
     * between world loads. A saved structure can be removed from
     * the world via @minecraft/server.StructureManager.delete.
     *
     */
    World = 'World',
}
