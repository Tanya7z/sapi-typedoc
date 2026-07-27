/* IMPORT */ import { BlockComponentBlockBreakEvent, BlockComponentBlockStateChangeEvent, BlockComponentEntityEvent, BlockComponentEntityFallOnEvent, BlockComponentOnPlaceEvent, BlockComponentPlayerBreakEvent, BlockComponentPlayerInteractEvent, BlockComponentPlayerPlaceBeforeEvent, BlockComponentRandomTickEvent, BlockComponentRedstoneUpdateEvent, BlockComponentStepOffEvent, BlockComponentStepOnEvent, BlockComponentTickEvent, CustomComponentParameters } from '..';

/**
 * 包含将为方块触发的一组事件。
 * 此对象必须使用 `BlockRegistry` 进行绑定。
 *
 * Contains a set of events that will be raised for a block.
 * This object must be bound using the BlockRegistry.
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * 该函数将在玩家放置方块之前被调用。
     *
     * This function will be called before a player places the
     * block.
     *
     */
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters) => void;
    onBlockStateChange?: (arg0: BlockComponentBlockStateChangeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在特定方块被破坏时被调用。
     * 方块置换的变化不会触发此事件。
     * 仅当使用破坏模式更改方块置换时，`Fill` 命令和 `SetBlock` 命令才会触发此事件。
     * 具有 `minecraft:replaceable` 组件的自定义方块在被替换时不会触发此事件。
     *
     * This function will be called when a specific block is
     * destroyed.
     * Changes in block permutations will not trigger this event.
     * Fill Command and SetBlock Command can trigger this event
     * when changing a block permutation only when using destroy
     * mode.
     * Custom blocks with the "minecraft:replaceable" component
     * will not trigger the event when replaced.
     *
     */
    onBreak?: (arg0: BlockComponentBlockBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在世界中的实体向此方块触发事件时被调用。
     *
     * This function will be called when an entity fires an event
     * to this block in the world.
     *
     */
    onEntity?: (arg0: BlockComponentEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在实体落到此自定义组件所绑定的方块上时被调用。
     *
     * This function will be called when an entity falls onto the
     * block that this custom component is bound to.
     *
     */
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在此自定义组件所绑定的方块被放置时被调用。
     *
     * This function will be called when the block that this custom
     * component is bound to is placed.
     *
     */
    onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;
    onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在玩家成功与此自定义组件所绑定的方块交互时被调用。
     *
     * This function will be called when a player sucessfully
     * interacts with the block that this custom component is bound
     * to.
     *
     */
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在方块随机 tick 时被调用。
     *
     * This function will be called when a block randomly ticks.
     *
     */
    onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当发生 `onRedstoneUpdate` 引擎事件时，如果方块具有 `minecraft:redstone_consumer` 组件且红石信号强度 >= 该组件的 `min_power` 字段，则将调用此函数。
     *
     * This function will be called when an 'onRedstoneUpdate'
     * engine event occurs if the block has a
     * `minecraft:redstone_consumer` component and the redstone
     * signal strength is >= to the components `min_power` field.
     *
     */
    onRedstoneUpdate?: (arg0: BlockComponentRedstoneUpdateEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在实体离开此自定义组件所绑定的方块时被调用。
     *
     * This function will be called when an entity steps off the
     * block that this custom component is bound to.
     *
     */
    onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在实体踏上此自定义组件所绑定的方块时被调用。
     *
     * This function will be called when an entity steps onto the
     * block that this custom component is bound to.
     *
     */
    onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在方块 tick 时被调用。
     *
     * This function will be called when a block ticks.
     *
     */
    onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;
}
