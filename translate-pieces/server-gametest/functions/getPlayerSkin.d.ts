/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player } from '../../server';
/* IMPORT */ import { PlayerSkinData } from '..';

/**
 * @remarks
 * 返回玩家皮肤的相关数据。
 *
 * Returns data about a player's skin.
 *
 * @worldMutation
 *
 * @param player
 * 要获取皮肤数据的玩家。
 * The player who's skin is returned.
 * @throws This function can throw errors.
 *
 * {@link InvalidArgumentError}
 *
 * {@link InvalidEntityError}
 */
export function getPlayerSkin(player: Player): PlayerSkinData;
