/* IMPORT */ import { BlockComponent, DyeColor, RawMessage, RawText, SignSide } from '..';

/**
 * 表示可以在上面显示文字的方块。
 * @seeExample addSign.ts
 * @seeExample addTwoSidedSign.ts
 * @seeExample updateSignText.ts
 * @seeExample addTranslatedSign.ts 9e2fd749
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 玩家是否可以编辑告示牌。如果告示牌被使用过蜂巢或调用了 `setWaxed`，则会发生这种情况。
     * 
     * Whether or not players can edit the sign. This happens if a
     * sign has had a honeycomb used on it or `setWaxed` was called
     * on the sign.
     *
     * @throws This property can throw when used.
     */
    readonly isWaxed: boolean;
    static readonly componentId = 'minecraft:sign';
    /**
     * @remarks
     * 如果使用 RawMessage 或 RawText 对象调用了 `setText`，则返回告示牌的 RawText，否则返回 `undefined`。
     * 
     * Returns the RawText of the sign if `setText` was called with
     * a RawMessage or a RawText object, otherwise returns
     * undefined.
     *
     * @param side
     * 要读取消息的告示牌面。如果未提供，则将返回告示牌正面的消息。
     * 默认为：0
     * 
     * The side of the sign to read the message from. If not
     * provided, this will return the message from the front side
     * of the sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * @remarks
     * 如果使用字符串调用了 `setText`，则返回告示牌的文本，否则返回 `undefined`。
     * 
     * Returns the text of the sign if `setText` was called with a
     * string, otherwise returns undefined.
     *
     * @param side
     * 要读取消息的告示牌面。如果未提供，则将返回告示牌正面的消息。
     * 默认为：0
     * 
     * The side of the sign to read the message from. If not
     * provided, this will return the message from the front side
     * of the sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getText(side?: SignSide): string | undefined;
    /**
     * @remarks
     * 获取文字上的染料，如果告示牌未被染色，则返回 `undefined`。
     * 
     * Gets the dye that is on the text or undefined if the sign
     * has not been dyed.
     *
     * @param side
     * 要读取染料的告示牌面。如果未提供，则将返回告示牌正面的染料。
     * 默认为：0
     * 
     * The side of the sign to read the dye from. If not provided,
     * this will return the dye on the front side of the sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @remarks
     * 设置告示牌组件的文本。
     * 
     * Sets the text of the sign component.
     *
     * @worldMutation
     *
     * @param message
     * 要在告示牌上设置的消息。如果设置为字符串，则调用 `getText` 来读取该字符串。如果设置为 RawMessage，则调用 `getRawText` 将返回 RawText。
     * 
     * The message to set on the sign. If set to a string, then
     * call `getText` to read that string. If set to a RawMessage,
     * then calling `getRawText` will return a RawText.
     * @param side
     * 消息将被设置到的告示牌面。如果未提供，消息将设置在告示牌的正面。
     * 默认为：0
     * 
     * The side of the sign the message will be set on. If not
     * provided, the message will be set on the front side of the
     * sign.
     * Defaults to: 0
     * @throws
     * 如果提供的消息长度超过 512 个字符，则抛出错误。
     * 
     * Throws if the provided message is greater than 512
     * characters in length.
     */
    setText(message: RawMessage | string, side?: SignSide): void;
    /**
     * @remarks
     * 设置文字的染料颜色。
     * 
     * Sets the dye color of the text.
     *
     * @worldMutation
     *
     * @param color
     * 要应用于告示牌的染料颜色，或 `undefined` 以清除告示牌上的染料。
     * 默认为：null
     * 
     * The dye color to apply to the sign or undefined to clear the
     * dye on the sign.
     * Defaults to: null
     * @param side
     * 颜色将被设置到的告示牌面。如果未提供，颜色将设置在告示牌的正面。
     * 默认为：0
     * 
     * The side of the sign the color will be set on. If not
     * provided, the color will be set on the front side of the
     * sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @remarks
     * 使玩家无法编辑此告示牌。
     * 
     * Makes it so players cannot edit this sign.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setWaxed(waxed: boolean): void;
}
