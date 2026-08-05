/* IMPORT */ import { CustomComponentParameters, ItemComponentBeforeDurabilityDamageEvent, ItemComponentCompleteUseEvent, ItemComponentConsumeEvent, ItemComponentHitEntityEvent, ItemComponentMineBlockEvent, ItemComponentUseEvent, ItemComponentUseOnEvent } from '..';

/**
 * 包含将为物品触发的一组事件。
 * 此对象必须使用 `ItemComponentRegistry` 进行绑定。
 *
 * Contains a set of events that will be raised for an item.
 * This object must be bound using the ItemComponentRegistry.
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * 当包含此组件的物品击中实体并即将消耗耐久度时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is hitting an entity and about to take durability
     * damage.
     *
     */
    onBeforeDurabilityDamage?: (
        arg0: ItemComponentBeforeDurabilityDamageEvent,
        arg1: CustomComponentParameters,
    ) => void;
    /**
     * @remarks
     * 当包含此组件的物品的使用时长完成时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component's use duration was completed.
     *
     */
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被实体食用时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is eaten by an entity.
     *
     */
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品用于击中另一个实体时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is used to hit another entity.
     *
     */
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品用于挖掘方块时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is used to mine a block.
     *
     */
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被玩家使用时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is used by a player.
     *
     */
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品在方块上被使用时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is used on a block.
     *
     */
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}
