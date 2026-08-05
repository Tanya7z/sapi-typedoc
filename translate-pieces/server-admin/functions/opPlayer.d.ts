/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { PlayerAlreadyOpError } from '..';

/**
 * @remarks
 * 给予玩家 OP 权限。
 *
 * Gives the player op permissions.
 *
 * @worldMutation
 *
 * @param player
 * 要给予权限的玩家。
 *
 * Player to add permissions to.
 * @throws This function can throw errors.
 *
 * {@link EngineError}
 *
 * {@link InvalidArgumentError}
 *
 * {@link PlayerAlreadyOpError}
 */
export function opPlayer(player: Player): void;
