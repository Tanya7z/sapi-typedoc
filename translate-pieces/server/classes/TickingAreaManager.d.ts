/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { TickingArea, TickingAreaError, TickingAreaOptions } from '..';

/**
 * This manager is used to add, remove or query temporary
 * ticking areas to a dimension. These ticking areas are
 * limited by a fixed amount of ticking chunks per pack
 * independent of the command limits. Cannot modify or query
 * ticking areas added by other packs or commands.
 *
 * 该管理器用于向维度添加、移除或查询临时常加载区域。这些常加载区域受每个包固定数量的常加载区块限制，独立于命令限制。无法修改或查询由其他包或命令添加的常加载区域。
 */
export class TickingAreaManager {
    private constructor();
    /**
     * @remarks
     * The number of currently ticking chunks in this manager.
     *
     * 此管理器中当前常加载的区块数量。
     */
    readonly chunkCount: number;
    /**
     * @remarks
     * The maximum number of allowed ticking chunks. Overlapping
     * ticking area chunks do count towards total.
     *
     * 允许的最大常加载区块数量。重叠的常加载区域区块会计入总数。
     */
    readonly maxChunkCount: number;
    /**
     * @remarks
     * Creates a ticking area. Promise will return when all the
     * chunks in the area are loaded and ticking.
     *
     * 创建一个常加载区域。当区域中所有区块都已加载并开始常加载时，Promise 将返回。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link TickingAreaError}
     */
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    /**
     * @remarks
     * Gets all ticking areas added by this manager.
     *
     * 获取此管理器添加的所有常加载区域。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getAllTickingAreas(): TickingArea[];
    /**
     * @remarks
     * Tries to get specific ticking area by identifier.
     *
     * 尝试通过标识符获取特定的常加载区域。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    /**
     * @remarks
     * Returns true if the manager has enough chunk capacity for
     * the ticking area and false otherwise. Will also return false
     * if the length or width exceeds the 255 chunk limit.
     *
     * 如果管理器有足够的区块容量来容纳常加载区域，则返回 `true`，否则返回 `false`。如果长度或宽度超过 255 个区块的限制，也会返回 `false`。
     *
     * @worldMutation
     *
     */
    hasCapacity(options: TickingAreaOptions): boolean;
    /**
     * @remarks
     * Returns true if the identifier is already in the manager and
     * false otherwise.
     *
     * 如果标识符已存在于管理器中，则返回 `true`，否则返回 `false`。
     *
     * @worldMutation
     *
     */
    hasTickingArea(identifier: string): boolean;
    /**
     * @remarks
     * Removes all ticking areas added by this manager.
     *
     * 移除此管理器添加的所有常加载区域。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    removeAllTickingAreas(): void;
    /**
     * @remarks
     * Removes specific ticking area by unique identifier.
     *
     * 通过唯一标识符移除特定的常加载区域。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link TickingAreaError}
     */
    removeTickingArea(identifier: string | TickingArea): void;
}
