/* IMPORT */ import { StructureSaveMode } from '..';

/**
 * 为 {@link StructureManager.createFromWorld} 提供额外的选项。
 *
 * Provides additional options for {@link
 * StructureManager.createFromWorld}
 */
export interface StructureCreateOptions {
    /**
     * @remarks
     * 方块是否应包含在结构中。默认为 `true`。
     *
     * Whether blocks should be included in the structure. Defaults
     * to true.
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 实体是否应包含在结构中。默认为 `true`。
     *
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 结构的保存方式。默认为 StructureSaveMode.World。
     *
     * How the Structure should be saved. Defaults to
     * StructureSaveMode.World.
     *
     */
    saveMode?: StructureSaveMode;
}
