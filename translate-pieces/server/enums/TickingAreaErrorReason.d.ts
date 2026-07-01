/* IMPORT */ import { TickingAreaManager } from '..';

/**
 * 抛出 {@link @minecraft/server.TickingAreaError} 的原因。
 *
 * The reason that the {@link
 * @minecraft/server.TickingAreaError} was thrown.
 */
export enum TickingAreaErrorReason {
    /**
     * @remarks
     * 添加了一个标识符已存在的常加载区域。
     *
     * Added a ticking area with an identifier that already exists.
     *
     */
    IdentifierAlreadyExists = 'IdentifierAlreadyExists',
    /**
     * @remarks
     * 添加此常加载区域将常加载区域推过了 {@link TickingAreaManager.maxChunkCount} 指定的限制。
     *
     *  Adding this ticking area pushed the ticking areas over the
     * limit specified by {@link TickingAreaManager.maxChunkCount}.
     *
     */
    OverChunkLimit = 'OverChunkLimit',
    /**
     * @remarks
     * 超过了常加载区域长度或宽度的 255 个区块限制。
     *
     * Exceeded the 255 chunk limit for the length or width of the
     * ticking area.
     *
     */
    SideLengthExceeded = 'SideLengthExceeded',
    /**
     * @remarks
     * 尝试移除在 {@link TickingAreaManager} 中未注册标识符的常加载区域。
     *
     * Tried to remove ticking area with identifier not registered
     * in the {@link TickingAreaManager}.
     *
     */
    UnknownIdentifier = 'UnknownIdentifier',
}
