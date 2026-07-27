/* IMPORT */ import { FogSettingsError, InvalidEntityError } from '..';

/**
 * @beta
 * 提供对玩家实体雾设置堆栈的访问，使脚本能够推入、弹出、移除和查询生效中的雾设置。
 *
 * Provides access to the fog definitions stack of a player
 * entity, allowing scripts to push, pop, remove, and query
 * active fog definitions.
 */
export class FogSettings {
    private constructor();
    /**
     * @remarks
     * 返回玩家雾设置堆栈中当前的雾标识符列表，按从底部到顶部的顺序排列。
     *
     * Returns the list of fog identifiers currently on the
     * player's fog stack, ordered from bottom to top.
     *
     * @worldMutation
     *
     * @returns
     * 当前堆栈中的雾设置标识符数组。
     *
     * An array of fog definition identifiers currently on the
     * stack.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    getStack(): string[];
    /**
     * @remarks
     * 返回玩家雾设置堆栈中当前存在的标签列表。
     *
     * Returns the list of tags currently present on the player's
     * fog stack.
     *
     * @worldMutation
     *
     * @returns
     * 与堆栈中雾设置关联的标签字符串数组。
     *
     * An array of tag strings associated with fog settings on the
     * stack.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 从玩家的雾设置堆栈中移除最近推入的雾设置。
     *
     * Removes the most recently pushed fog definition from the
     * player's fog stack.
     *
     * @worldMutation
     *
     * @param tag
     * 用于标识要弹出条目的可选标签。如果提供，则从顶部到底部搜索堆栈，并移除最近推入且带有此标签的条目。如果省略，则移除最近推入的条目，无论其标签为何。
     *
     * An optional tag identifying which entry to pop. If provided,
     * searches the stack from top to bottom and removes the most
     * recently pushed entry with this tag. If omitted, removes the
     * most recently pushed entry regardless of tag.
     * @returns
     * 返回被弹出的雾设置标识符；如果堆栈未发生变化，则返回 undefined。
     *
     * Returns the identifier of the popped fog definition, or
     * undefined if the stack was unchanged.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    pop(tag?: string): string | undefined;
    /**
     * @remarks
     * 将新的雾设置推入玩家的雾设置堆栈。
     *
     * Pushes a new fog definition onto the player's fog stack.
     *
     * @worldMutation
     *
     * @param fogId
     * 要推入堆栈的雾设置标识符（例如 'minecraft:fog_bamboo_jungle'）。
     *
     * The identifier of the fog definition to push onto the stack
     * (e.g. 'minecraft:fog_bamboo_jungle').
     * @param tag
     * 用于标记此雾设置在堆栈中条目的可选标签，以便通过 pop 或 remove 定位该条目。如果省略，则以 'untagged' 标签存储该条目。
     *
     * An optional tag used to label this fog definition on the
     * stack, allowing it to be targeted by pop or remove. If
     * omitted, the entry is stored with the tag 'untagged'.
     * @returns
     * 返回雾设置插入堆栈位置的从零开始索引。
     *
     * Returns the zero-based index at which the fog definition was
     * inserted into the stack.
     * @throws
     * Throws if the entity is invalid, the fog identifier is
     * invalid, or if the stack limit of 16 has been exceeded.
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    push(fogId: string, tag?: string): number;
    /**
     * @remarks
     * 从玩家的雾设置堆栈中移除带有指定标签的所有雾设置。如果未提供标签，则清除所有雾设置。
     *
     * Removes all fog definitions with the given tag from the
     * player's fog stack. If no tag is provided, clears all fog
     * definitions.
     *
     * @worldMutation
     *
     * @param tag
     * 用于标识要移除条目的可选标签。如果省略，则清除所有雾设置，无论其标签为何。
     *
     * An optional tag identifying which the entries to remove. If
     * omitted, clears all fog definitions regardless of tag.
     * @returns
     * 如果至少移除了一个条目，则返回 true；如果堆栈未发生变化，则返回 false。
     *
     * Returns true if at least one entry was removed, or false if
     * the stack was unchanged.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    remove(tag?: string): boolean;
    /**
     * @remarks
     * 将玩家的雾设置堆栈设为给定的雾标识符列表，并替换所有现有条目。
     *
     * Sets the player's fog stack to the given list of fog
     * identifiers, replacing any existing entries.
     *
     * @worldMutation
     *
     * @param fogIds
     * 要设为玩家雾设置堆栈的雾设置标识符堆栈（例如 ['minecraft:fog_bamboo_jungle']）。最多 16 个条目。
     *
     * A stack of fog definition identifiers to set on the player's
     * fog stack (e.g. ['minecraft:fog_bamboo_jungle']). Maximum of
     * 16 entries.
     * @param tag
     * 与新条目关联的可选标签，用于通过 pop 或 remove 定位这些条目。
     *
     * An optional tag to associate with the new entries, used to
     * target them with pop or remove.
     * @throws
     * Throws if the entity is invalid, if more than 16 fog
     * identifiers are provided, or if any fog identifier is
     * invalid.
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    setStack(fogIds: string[], tag?: string): void;
}
