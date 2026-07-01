/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidPotionDeliveryTypeError, InvalidPotionEffectTypeError, ItemStack, PotionDeliveryType, PotionEffectType } from '..';
/* IMPORT */ import { MinecraftPotionDeliveryTypes, MinecraftPotionEffectTypes } from '../../vanilla-data';

/**
 * 用于访问所有药水效果类型、传递类型以及创建药水。
 *
 * Used for accessing all potion effect types, delivery types, and creating potions.
 */
export class Potions {
    private constructor();
    /**
     * @remarks
     * 获取所有已注册的药水传递类型的句柄。
     *
     * Retrieves handles for all registered potion delivery types.
     *
     * @returns
     * 所有已注册传递类型句柄的数组。
     *
     * Array of all registered delivery type handles.
     */
    static getAllDeliveryTypes(): PotionDeliveryType[];
    /**
     * @remarks
     * 获取所有已注册的药水效果的类型句柄。
     *
     * Retrieves all type handle for all registered potion effects.
     *
     * @returns
     * 所有已注册效果类型句柄的数组。
     *
     * Array of all registered effect type handles.
     */
    static getAllEffectTypes(): PotionEffectType[];
    /**
     * @remarks
     * 获取指定药水传递 ID 的类型句柄。
     *
     * Retrieves a type handle for a specified potion delivery id.
     *
     * @returns
     * 包装有效传递 ID 的类型句柄，如果传递 ID 无效则返回 `undefined`。
     *
     * A type handle wrapping the valid delivery id, or undefined for an invalid delivery id.
     */
    static getDeliveryType(potionDeliveryId: string): PotionDeliveryType | undefined;
    /**
     * @remarks
     * 获取指定药水效果 ID 的类型句柄。
     *
     * Retrieves a type handle for a specified potion effect id.
     *
     * @param potionEffectId
     * 有效的药水效果 ID。请参见 @minecraft/vanilla-data.MinecraftPotionEffectTypes。
     *
     * A valid potion effect id. See @minecraft/vanilla-data.MinecraftPotionEffectTypes
     * @returns
     * 包装有效效果 ID 的类型句柄，如果效果 ID 无效则返回 `undefined`。
     *
     * A type handle wrapping the valid effect id, or undefined for an invalid effect id.
     */
    static getEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * 根据效果和传递类型创建药水。
     *
     * Creates a potion given an effect and delivery type.
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidPotionDeliveryTypeError}
     *
     * {@link InvalidPotionEffectTypeError}
     */
    static resolve<
        T extends string = MinecraftPotionEffectTypes,
        U extends string = MinecraftPotionDeliveryTypes,
    >(potionEffectType: PotionEffectType | T, potionDeliveryType: PotionDeliveryType | U): ItemStack;
}
