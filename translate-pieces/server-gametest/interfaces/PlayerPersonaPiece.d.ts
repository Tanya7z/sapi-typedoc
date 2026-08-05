/* IMPORT */ import { PersonaPieceType } from '..';

/**
 * 与特定玩家角色（Persona）部件相关的数据。
 *
 * Data pertaining to a specific player Persona piece.
 */
export interface PlayerPersonaPiece {
    id: string;
    isDefaultPiece?: boolean;
    packId: string;
    productId: string;
    type: PersonaPieceType;
}
