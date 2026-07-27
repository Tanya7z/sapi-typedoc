/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { ItemComponent, PotionDeliveryType, PotionEffectType } from '..';

/**
 * 表示物品为药水物品。当出现在物品上时，表示该物品为药水物品。
 *
 * When present on an item, this item is a potion item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 与该药水物品关联的 PotionDeliveryType。
     *
     * The PotionDeliveryType associated with the potion item.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     *
     * {@link Error}
     */
    readonly potionDeliveryType: PotionDeliveryType;
    /**
     * @remarks
     * 与该药水物品关联的 PotionEffectType。
     *
     * The PotionEffectType associated with the potion item.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     *
     * {@link Error}
     */
    readonly potionEffectType: PotionEffectType;
    static readonly componentId = 'minecraft:potion';
}
