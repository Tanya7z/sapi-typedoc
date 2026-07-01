/* IMPORT */ import { BlockComponent, InvalidBlockComponentError, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, Vector3 } from '..';

/**
 * @beta
 * 表示世界中方块的动态属性。仅适用于方块实体。每个内容包、每个方块实体在其动态属性存储中最多 1KB。
 * @seeExample rememberPlayerInteraction.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockDynamicPropertiesComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:dynamic_properties';
    /**
     * @remarks
     * 返回使用提供的键存储的动态属性。键对于每个内容包是唯一的，不能用于检索从其他内容包设置的动态属性。
     * 如果未找到键，则返回 `undefined`。
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
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 使用提供的键和值设置动态属性。键对于每个内容包是唯一的，不能用于为其他内容包设置动态属性。
     * 值可以是 Number、String 或 Vector3。使用 `undefined` 值设置属性将将其从存储中移除。
     * 存储大小使用计入每个内容包 1KB 的限制。
     * 
     * Sets a dynamic property with the provided key and value.
     * Keys are unique to each content pack and cannot be used to
     * set dynamic properties for other content packs. Values can
     * be either a Number, a String or a Vector3. Setting a
     * property with an undefined value will remove it from the
     * storage. Storage size usage is counted towards the 1KBytes
     * limit per content pack.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 返回此方块实体动态属性存储的当前大小（以字节为单位）。字节计数仅计算由您的内容包设置的属性。
     * 1KB 限制是每个内容包的。
     * 
     * Returns the current size, in bytes, of the dynamic
     * properties storage for this block entity. The byte count
     * only accounts for properties set by your content pack. The
     * 1KBytes limit is per content pack.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    totalByteCount(): number;
}
