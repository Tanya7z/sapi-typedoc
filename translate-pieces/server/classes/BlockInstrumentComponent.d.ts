/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { BlockComponent, Direction, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, WorldSoundOptions } from '..';

/**
 * @beta
 * 表示方块可以分配在其上表面和下表面的乐器。
 * 
 * Represents the instruments a block can have assigned to it's
 * up and down faces.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInstrumentComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:instrument_sound';
    /**
     * @remarks
     * 获取方法，用于获取给定有效面 Direction 的乐器名称。
     * 
     * A getter method to get the name of an instrument for a given
     * valid face Direction.
     *
     * @param face
     * 要获取乐器名称的面 Direction。
     * 
     * the face Direction to get the instrument name for.
     * @returns
     * 返回给定有效面 Direction 的乐器名称。
     * 
     * Returns the name of the instrument for a given valid face
     * Direction.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getInstrumentName(face: Direction): string;
    /**
     * @remarks
     * 在组件的方块位置播放给定有效面 Direction 的乐器声音，使用可选的 WorldSoundOptions。
     * 
     * plays the instrument sound for a given valid face Direction
     * at the components block location using optional
     * WorldSoundOptions.
     *
     * @worldMutation
     *
     * @param face
     * 要播放乐器声音的面 Direction。
     * 
     * the face Direction for which instrument sound to play.
     * @param soundOptions
     * 播放乐器声音时使用的可选 WorldSoundOptions；如果省略，则使用默认值。
     * 
     * optional WorldSoundOptions to use when playing the
     * insturment sound; if omitted the default values are used.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    playInstrumentSound(face: Direction, soundOptions?: WorldSoundOptions): void;
}
