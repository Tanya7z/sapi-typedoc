/* IMPORT */ import { ItemUseAfterEvent } from '..';

/**
 * 包含与某次物品使用相关的信息。
 *
 * Contains information related to an item being used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 若设置为 true，则会取消该物品的使用行为。
     *
     * If set to true, this will cancel the item use behavior.
     *
     */
    cancel: boolean;
}
