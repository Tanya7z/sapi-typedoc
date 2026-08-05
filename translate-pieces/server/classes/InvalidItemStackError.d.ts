/* IMPORT */ import { ItemType } from '..';

/**
 * 当某个物品无效时抛出的错误。例如访问已移除物品的组件时可能会发生此错误。
 *
 * The error called when an item is invalid. This can occur
 * when accessing components on a removed item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidItemStackError extends Error {
    private constructor();
    /**
     * @remarks
     * 该物品现已无效时的物品类型。
     *
     * The type of the item that is now invalid.
     *
     * @earlyExecution
     *
     */
    readonly itemType: ItemType;
}
