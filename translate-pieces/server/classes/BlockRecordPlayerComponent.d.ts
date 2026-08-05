/* IMPORT */ import { BlockComponent, ItemStack, ItemType } from '..';

/**
 * 表示可以播放唱片的方块。
 * 
 * Represents a block that can play a record.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:record_player';
    /**
     * @remarks
     * 弹出此唱片播放方块当前设置的唱片。
     * 
     * Ejects the currently set record of this record-playing
     * block.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    ejectRecord(): void;
    /**
     * @remarks
     * 获取此唱片播放方块当前设置的唱片。
     * 
     * Gets the currently set record of this record-playing block.
     *
     * @throws This function can throw errors.
     */
    getRecord(): ItemStack | undefined;
    /**
     * @remarks
     * 返回唱片播放方块当前是否正在播放唱片。
     * 
     * Returns true if the record-playing block is currently
     * playing a record.
     *
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * 暂停此唱片播放方块当前正在播放的唱片。
     * 
     * Pauses the currently playing record of this record-playing
     * block.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    pauseRecord(): void;
    /**
     * @remarks
     * 播放此唱片播放方块当前设置的唱片。
     * 
     * Plays the currently set record of this record-playing block.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    playRecord(): void;
    /**
     * @remarks
     * 设置并基于物品类型播放唱片。
     * 
     * Sets and plays a record based on an item type.
     *
     * @worldMutation
     *
     * @param startPlaying
     * 默认为：`true`。
     * 
     * Defaults to: true
     * @throws This function can throw errors.
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}
