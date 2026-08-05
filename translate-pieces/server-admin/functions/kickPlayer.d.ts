/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { CannotKickPlayerError } from '..';

/**
 * @remarks
 * 将玩家从服务器中踢出。
 *
 * Kicks a player from the server.
 *
 * @worldMutation
 *
 * @param player
 * 要踢出的玩家。
 *
 * Player to kick.
 * @param reason
 * 踢出玩家的原因。
 *
 * Reason for kicking the player.
 * @throws This function can throw errors.
 *
 * {@link CannotKickPlayerError}
 *
 * {@link EngineError}
 *
 * {@link InvalidArgumentError}
 */
export function kickPlayer(player: Player, reason?: string): void;
