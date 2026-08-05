/* IMPORT */ import { BookError, BookPageContentError, InvalidEntityError, InvalidItemStackError, ItemComponent, RawMessage } from '..';

/**
 * 当此组件存在于物品上时，表示该物品为书本物品。可以访问和
 * 修改书本的内容并对其进行签名。
 *
 * When present on an item, this item is a book item. Can
 * access and modify the contents of the book and sign it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 若书本已签名，则为书本作者的名字；否则为 undefined。
     *
     * The name of the author of the book if it is signed,
     * otherwise undefined.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly author?: string;
    /**
     * @remarks
     * 书本中以字符串格式存储的各页内容。非字符串格式的条目将为
     * undefined。
     *
     * The contents of pages in the book that are in string format.
     * Entries not in string format will be undefined.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly contents: (string | undefined)[];
    /**
     * @remarks
     * 判断书本是否已被签名。
     *
     * Determines whether the book has been signed or not.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly isSigned: boolean;
    /**
     * @remarks
     * 书本拥有的页数。
     *
     * The amount of pages the book has.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly pageCount: number;
    /**
     * @remarks
     * 书本中以 {@link RawMessage} 格式存储的各页内容。非 {@link
     * RawMessage} 格式的条目将为 undefined。
     *
     * The contents of pages in the book that are in {@link
     * RawMessage} format. Entries not in {@link RawMessage} format
     * will be undefined.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly rawContents: (RawMessage | undefined)[];
    /**
     * @remarks
     * 若书本已签名，则为书本的标题；否则为 undefined。
     *
     * The title of the book if it is signed, otherwise undefined.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly title?: string;
    static readonly componentId = 'minecraft:book';
    /**
     * @remarks
     * 获取指定索引处页面的字符串格式内容。
     *
     * Gets the string format content of a page for a given index.
     *
     * @param pageIndex
     * 页面的索引。
     *
     * The index of the page.
     * @returns
     * 若提供的索引有效且该页为字符串格式，则返回该页内容；否则
     * 返回 undefined。
     *
     * The content of the page if a valid index is provided and it
     * is in string format, otherwise returns undefined.
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    getPageContent(pageIndex: number): string | undefined;
    /**
     * @remarks
     * 获取指定索引处页面的 {@link RawMessage} 格式内容。
     *
     * Gets the {@link RawMessage} format content of a page for a
     * given index.
     *
     * @param pageIndex
     * 页面的索引。
     *
     * The index of the page.
     * @returns
     * 若提供的索引有效且该页为 {@link RawMessage} 格式，则返回该
     * 页内容；否则返回 undefined。
     *
     * The content of the page if a valid index is provided and it
     * is in {@link RawMessage} format, otherwise returns
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks
     * 在指定索引处插入一页。若索引大于当前书本大小，则会创建空
     * 白页面。
     * 页面对于字符串以及 {@link RawMessage} 的 JSON 表示均有最多
     * 256 个字符的限制。书本最多有 50 页的限制。
     *
     * Inserts a page at a given index. Empty pages will be created
     * if the index is greater than the current book size.
     * Pages have a maximum limit of 256 characters for strings as
     * well as the JSON representation of a {@link RawMessage}.
     * Books have a maximum limit of 50 pages.
     *
     * @worldMutation
     *
     * @param pageIndex
     * 页面的索引。
     *
     * The index of the page.
     * @param content
     * 要为该页设置的内容。可以是单个字符串或 {@link RawMessage}，
     * 或字符串和/或 {@link RawMessage} 组成的数组。
     *
     * The content to set for the page. Can be a single string or
     * {@link RawMessage} or an array of strings and/or {@link
     * RawMessage}s
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    insertPage(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 移除指定索引处的一页。该页之后的现有页面将向前移动以填补
     * 空缺。
     *
     * Removes a page at a given index. Existing pages following
     * this page will be moved backward to fill the empty space.
     *
     * @worldMutation
     *
     * @param pageIndex
     * 页面的索引。
     *
     * The index of the page.
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    removePage(pageIndex: number): void;
    /**
     * @remarks
     * 设置书本各页的内容。原有页面将被清除。
     * 页面对于字符串以及 {@link RawMessage} 的 JSON 表示均有最多
     * 256 个字符的限制。书本最多有 50 页的限制。
     *
     * Sets the contents of the book's pages. Pre-existing pages
     * will be cleared.
     * Pages have a maximum limit of 256 characters for strings as
     * well as the JSON representation of a {@link RawMessage}.
     * Books have a maximum limit of 50 pages.
     *
     * @worldMutation
     *
     * @param contents
     * 由各页内容组成的数组。每一页可以是单个字符串或 {@link
     * RawMessage}，或字符串和/或 {@link RawMessage} 组成的数组。
     *
     * An array of each page's contents. Each page can be a single
     * string or {@link RawMessage} or an array of strings and/or
     * {@link RawMessage}s.
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setContents(contents: ((RawMessage | string)[] | RawMessage | string)[]): void;
    /**
     * @remarks
     * 设置或创建指定页面的内容。若索引大于当前书本大小，则会创
     * 建空白页面。
     * 页面对于字符串以及 {@link RawMessage} 的 JSON 表示均有最多
     * 256 个字符的限制。书本最多有 50 页的限制。
     *
     * Sets or creates the content of a specific page. Empty pages
     * will be created if the index is greater than the current
     * book size.
     * Pages have a maximum limit of 256 characters for strings as
     * well as the JSON representation of a {@link RawMessage}.
     * Books have a maximum limit of 50 pages.
     *
     * @worldMutation
     *
     * @param pageIndex
     * 页面的索引。
     *
     * The index of the page.
     * @param content
     * 要为该页设置的内容。可以是单个字符串或 {@link RawMessage}，
     * 或字符串和/或 {@link RawMessage} 组成的数组。
     *
     * The content to set for the page. Can be a single string or
     * {@link RawMessage} or an array of strings and/or {@link
     * RawMessage}s
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setPageContent(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 为书本签名，赋予其标题和作者名。一旦签名，玩家便无法再直
     * 接编辑该书本。
     * 标题最多有 16 个字符的限制。
     *
     * Signs a book giving it a title and author name. Once signed
     * players can no longer directly edit the book.
     * Titles have a maximum character limit of 16.
     *
     * @worldMutation
     *
     * @param title
     * 要赋予书本的标题。
     *
     * The title to give the book.
     * @param author
     * 书本作者的名字。
     *
     * The name of the book's author.
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link InvalidEntityError}
     *
     * {@link InvalidItemStackError}
     */
    signBook(title: string, author: string): void;
}
