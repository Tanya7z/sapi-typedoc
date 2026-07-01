/* IMPORT */ import { LootItemCondition } from '..';

/**
 * 所有战利品物品函数派生的抽象基类。战利品物品函数可以在战利品掉落时以多种方式修改掉落物，可选地依赖于一组必须满足的条件。
 *
 * An abstract base class from which all loot item functions
 * are derived. Loot item functions can modify loot drops in a
 * variety of ways as they happen, optionally dependent on a
 * set of conditions which must be met.
 */
export class LootItemFunction {
    private constructor();
    readonly conditions: LootItemCondition[];
}
