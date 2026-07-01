/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 修改掉落书本内容的战利品物品函数。
 *
 * Loot item function that modifies the contents of a dropped
 * book.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBookContentsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 书本作者的名称。
     *
     * The name of the book's author.
     *
     */
    readonly author: string;
    /**
     * @remarks
     * 放置在书本页面中的文本数组。
     *
     * An array of text to be placed in the pages of the book.
     *
     */
    readonly pages: string[];
    /**
     * @remarks
     * 书本的标题。
     *
     * The book's title.
     *
     */
    readonly title: string;
}
