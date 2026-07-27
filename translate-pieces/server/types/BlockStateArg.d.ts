/* IMPORT */ import { BlockPermutation } from '..';
/* IMPORT */ import { BlockStateMapping, MinecraftBlockTypes } from '../../vanilla-data';

/**
 * 由 {@link BlockPermutation} 的 matches 与 resolve 函数使用的类型别名,
 * 用于将方块状态参数类型收窄到
 * 由 {@link @minecraft/vanilla-data.BlockStateMapping} 映射出来的类型。
 *
 * Type alias used by the {@link BlockPermutation} matches and
 * resolve functions to narrow block state argument types to
 * those mapped by {@link
 * @minecraft/vanilla-data.BlockStateMapping}.
 */
export type BlockStateArg<T> = T extends `${MinecraftBlockTypes}`
    ? T extends keyof BlockStateMapping
        ? BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;
