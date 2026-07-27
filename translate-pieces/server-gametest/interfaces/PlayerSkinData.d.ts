/* IMPORT */ import { RGB } from '../../server';
/* IMPORT */ import { PersonaArmSize, PlayerPersonaPiece } from '..';

/**
 * 与玩家已配置皮肤相关的数据。
 *
 * Data pertaining to a player's configured skin.
 */
export interface PlayerSkinData {
    armSize?: PersonaArmSize;
    personaPieces?: PlayerPersonaPiece[];
    skinColor?: RGB;
}
