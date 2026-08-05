/* IMPORT */ import { LiquidSettings } from '..';

/**
 * 为 {@link StructureManager.placeJigsaw} 提供额外选项。
 *
 * Provides additional options for {@link
 * StructureManager.placeJigsaw}.
 */
export interface JigsawPlaceOptions {
    /**
     * @remarks
     * 结构中是否应包含实体。默认为 `true`。
     *
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否保留拼图方块。默认为 `false`。
     *
     * Whether the jigsaw blocks should be kept when generating the
     * structure. Defaults to false.
     *
     */
    keepJigsaws?: boolean;
    /**
     * @remarks
     * 指定如何处理可与水共存的方块与现有液体的重叠。默认为 `ApplyWaterlogging`。
     *
     * Specifies how to handle waterloggable blocks overlapping
     * with existing liquid. Defaults to `ApplyWaterlogging`.
     *
     */
    liquidSettings?: LiquidSettings;
}
