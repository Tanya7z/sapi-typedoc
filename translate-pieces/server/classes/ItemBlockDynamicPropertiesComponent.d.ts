/* IMPORT */ import { InvalidItemStackError, ItemComponent, Vector3 } from '..';

/**
 * @beta
 * 表示方块的动态属性。仅可从方块实体获取。
 * 每个内容包在每个方块实体的动态属性存储中
 * 最多可以存储 1KBytes 的数据。
 *
 * Represents the dynamic properties of a block. Only available
 * from block entities. Up to 1KBytes of data can be stored per
 * content pack per block entity in their dynamic properties
 * storage.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBlockDynamicPropertiesComponent extends ItemComponent {
    private constructor();
    static readonly componentId = 'minecraft:block_actor_dynamic_properties';
    /**
     * @remarks
     * 返回使用提供的键存储的 DynamicProperty。每个内容包的键是唯一的，
     * 无法用于检索其他内容包设置的动态属性。若未找到对应键，则返回 undefined。
     *
     * Returns a DynamicProperty that was stored with the provided
     * key. Keys are unique to each content pack and cannot be used
     * to retrieve dynamic properties set from other content packs.
     * Returns undefined if the key was not found.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 设置具有提供的键和值的动态属性。每个内容包的键是唯一的，
     * 无法用于设置其他内容包的动态属性。值可以是 Number、String 或 Vector3。
     * 将属性设置为 undefined 会将其从存储中移除。存储大小计入每个内容包
     * 1KBytes 的限额。
     *
     * Sets a dynamic property with the provided key and value.
     * Keys are unique to each content pack and cannot be used to
     * set dynamic properties for other content packs. Values can
     * be either a Number, a String or a Vector3. Setting a
     * property with an undefined value will remove it from the
     * storage. Storage size usage is counted towards the 1KBytes
     * limit per content pack.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 返回当前该方块动态属性存储的字节大小。字节数仅计算由你的内容包
     * 设置的属性。1KBytes 限额是按每个内容包计算的。
     *
     * Returns the current size, in bytes, of the dynamic
     * properties storage for this block. The byte count only
     * accounts for properties set by your content pack. The
     * 1KBytes limit is per content pack.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    totalByteCount(): number;
}
