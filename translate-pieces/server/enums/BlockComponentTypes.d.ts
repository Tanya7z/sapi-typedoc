/**
 * 可通过 Block.getComponent 函数访问的方块组件类型。
 *
 * The types of block components that are accessible via
 * function Block.getComponent.
 */
export enum BlockComponentTypes {
    /**
     * @beta
     */
    DynamicProperties = 'minecraft:dynamic_properties',
    FluidContainer = 'minecraft:fluid_container',
    /**
     * @beta
     */
    Instrument = 'minecraft:instrument_sound',
    /**
     * @remarks
     * 表示世界中方块的库存。用于像箱子这样的方块。
     *
     * Represents the inventory of a block in the world. Used with
     * blocks like chests.
     *
     */
    Inventory = 'minecraft:inventory',
    /**
     * @remarks
     * 表示方块在地图上显示时的颜色。
     *
     * Represents the color of a block when displayed on a map.
     *
     */
    MapColor = 'minecraft:map_color',
    /**
     * @remarks
     * 表示可以移动的方块（例如活塞）。
     *
     * Represents a block that can move (such as a piston).
     *
     */
    Movable = 'minecraft:movable',
    /**
     * @remarks
     * 当存在时，此方块具有类似活塞的行为。包含用于发现方块活塞状态的附加属性。
     *
     * When present, this block has piston-like behavior. Contains
     * additional properties for discovering block piston state.
     *
     */
    Piston = 'minecraft:piston',
    /**
     * @remarks
     * 表示方块与降水（如雨或雪）的交互方式。
     *
     * Represents a how a block interacts with precipitation (such
     * as rain or snow).
     *
     */
    PrecipitationInteractions = 'minecraft:precipitation_interactions',
    /**
     * @remarks
     * 表示可以播放唱片的方块。
     *
     * Represents a block that can play a record.
     *
     */
    RecordPlayer = 'minecraft:record_player',
    /**
     * @remarks
     * 表示可以输出红石信号的方块。
     *
     * Represents a block that can output a redstone signal.
     *
     */
    RedstoneProducer = 'minecraft:redstone_producer',
    /**
     * @remarks
     * 表示可以显示文本的方块。
     *
     * Represents a block that can display text on it.
     *
     */
    Sign = 'minecraft:sign',
}
