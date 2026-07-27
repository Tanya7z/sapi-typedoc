/* IMPORT */ import { Vector3 } from '..';

/**
 * @rc
 * 包含用于 `dimension.findNearestBiome` API 搜索的额外选项。
 *
 * Contains additional options for searches for the
 * dimension.findNearestBiome API.
 */
export interface BiomeSearchOptions {
    /**
     * @remarks
     * 要在其中搜索的包围体积大小。
     *
     * Bounding volume size to look within.
     *
     */
    boundingSize?: Vector3;
}
