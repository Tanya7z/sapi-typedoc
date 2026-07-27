/* IMPORT */ import { BlockPermutation } from '..';

/**
 * 包含注册方块事件的可选参数。
 *
 * Contains optional parameters for registering a block event.
 */
export interface BlockEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的方块类型与此参数匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if the
     * impacted block's type matches this parameter.
     *
     */
    blockTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的方块置换与此参数匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if the
     * impacted block's permutation matches this parameter.
     *
     */
    permutations?: BlockPermutation[];
}
