/* IMPORT */ import { BlockStateArg, BlockType, ItemStack, LiquidType } from '..';
/* IMPORT */ import { BlockStateSuperset, MinecraftBlockTypes } from '../../vanilla-data';

/**
 * 包含类型 {@link BlockType} 和属性（有时也称为方块状态）的组合，用于描述一个方块（但不属于特定的 {@link Block}）。
 * @seeExample addTranslatedSign.ts 9e2fd749
 */
export class BlockPermutation {
    private constructor();
    /**
     * @remarks
     * 此 BlockPermutation 名称在 .lang 文件中使用的本地化键。
     * 
     * Key for the localization of this BlockPermutation's name
     * used in .lang files.
     *
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 置换所具有的 {@link BlockType}。
     * 
     * The {@link BlockType} that the permutation has.
     *
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * 返回此方块在接触液体时是否被移除。
     * 
     * Returns whether this block is removed when touched by
     * liquid.
     *
     * @param liquidType
     * 此函数应为之调用的液体类型。
     * 
     * The type of liquid this function should be called for.
     * @returns
     * 此方块在接触液体时是否被移除。
     * 
     * Whether this block is removed when touched by liquid.
     * @throws This function can throw errors.
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块是否可以在其上放置液体，即被水浸没。
     * 
     * Returns whether this block can have a liquid placed over it,
     * i.e. be waterlogged.
     *
     * @param liquidType
     * 此函数应为之调用的液体类型。
     * 
     * The type of liquid this function should be called for.
     * @returns
     * 此方块是否可以在其上放置液体。
     * 
     * Whether this block can have a liquid placed over it.
     * @throws This function can throw errors.
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回与此方块关联的所有可用方块状态。
     * 
     * Returns all available block states associated with this
     * block.
     *
     * @returns
     * 返回置换所具有的所有方块状态的列表。
     * 
     * Returns the list of all of the block states that the
     * permutation has.
     */
    getAllStates(): Record<string, boolean | number | string>;
    /**
     * @remarks
     * 基于此方块置换检索一个原型物品堆，可用于物品 Container/ContainerSlot API。
     * 
     * Retrieves a prototype item stack based on this block
     * permutation that can be used with item
     * Container/ContainerSlot APIs.
     *
     * @param amount
     * 要放入原型物品堆中的此方块实例数量。
     * 默认为：1
     * 范围：[1, 255]
     * 
     * Number of instances of this block to place in the prototype
     * item stack.
     * Defaults to: 1
     * Bounds: [1, 255]
     */
    getItemStack(amount?: number): ItemStack | undefined;
    /**
     * @remarks
     * 获取置换的状态。
     * 
     * Gets a state for the permutation.
     *
     * @param stateName
     * 要返回值的方块状态名称。
     * 
     * Name of the block state who's value is to be returned.
     * @returns
     * 如果置换具有该状态则返回状态值，否则返回 `undefined`。
     * 
     * Returns the state if the permutation has it, else
     * `undefined`.
     */
    getState<T extends keyof BlockStateSuperset>(
        stateName: T,
    ): BlockStateSuperset[T] | undefined;
    /**
     * @remarks
     * 创建置换的副本。
     * 
     * Creates a copy of the permutation.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查置换是否具有特定标签。
     * 
     * Checks to see if the permutation has a specific tag.
     *
     * @returns
     * 如果置换具有该标签则返回 `true`，否则返回 `false`。
     * 
     * Returns `true` if the permutation has the tag, else `false`.
     * @seeExample checkBlockTags.ts
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回此方块是否阻止液体流动。
     * 
     * Returns whether this block stops liquid from flowing.
     *
     * @param liquidType
     * 此函数应为之调用的液体类型。
     * 
     * The type of liquid this function should be called for.
     * @returns
     * 此方块是否阻止液体流动。
     * 
     * Whether this block stops liquid from flowing.
     * @throws This function can throw errors.
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块在接触液体时是否被移除并生成其物品。
     * 
     * Returns whether this block is removed and spawns its item
     * when touched by liquid.
     *
     * @param liquidType
     * 此函数应为之调用的液体类型。
     * 
     * The type of liquid this function should be called for.
     * @returns
     * 此方块在接触液体时是否被移除并生成其物品。
     * 
     * Whether this block is removed and spawns its item when
     * touched by liquid.
     * @throws This function can throw errors.
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回指定置换是否与此置换匹配。如果未指定状态，则 matches 会在更广泛的类型集合上进行检查。
     * 
     * Returns a boolean whether a specified permutation matches
     * this permutation. If states is not specified, matches checks
     * against the set of types more broadly.
     *
     * @param blockName
     * 要比较的可选状态集合。
     * 
     * An optional set of states to compare against.
     */
    matches<T extends string = MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): boolean;
    /**
     * @remarks
     * 返回一个设置了特定属性的派生 BlockPermutation。
     * 
     * Returns a derived BlockPermutation with a specific property
     * set.
     *
     * @param name
     * 方块属性的标识符。
     * 
     * Identifier of the block property.
     * @param value
     * 方块属性的值。
     * 
     * Value of the block property.
     * @throws This function can throw errors.
     */
    withState<T extends keyof BlockStateSuperset>(
        name: T,
        value: BlockStateSuperset[T],
    ): BlockPermutation;
    /**
     * @remarks
     * 给定类型标识符和可选的属性集合，将返回一个可在其他方块 API 中使用的 BlockPermutation 对象（例如 block.setPermutation）。
     * 
     * Given a type identifier and an optional set of properties,
     * will return a BlockPermutation object that is usable in
     * other block APIs (e.g., block.setPermutation)
     *
     * @param blockName
     * 要检查的方块的标识符。
     * 
     * Identifier of the block to check.
     * @throws This function can throw errors.
     * @seeExample addBlockColorCube.ts
     */
    static resolve<T extends string = MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): BlockPermutation;
}
