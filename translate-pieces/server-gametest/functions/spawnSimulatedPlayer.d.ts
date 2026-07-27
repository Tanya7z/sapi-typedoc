/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { DimensionLocation, GameMode } from '../../server';
/* IMPORT */ import { SimulatedPlayer, Test } from '..';

/**
 * @remarks
 * 生成一个未与特定 {@link Test} 关联的模拟玩家。
 * 你可以使用 {@link SimulatedPlayer.remove} 将玩家移出世界。
 *
 * Spawns a simulated player that isn't associated to a
 * specific {@link Test}.  You can use {@link
 * SimulatedPlayer.remove} to remove the player from the world.
 *
 * @worldMutation
 *
 * @param location
 * 生成玩家的位置。
 * The location in which to spawn the player.
 * @param name
 * 玩家的名称。
 * The name for the player.
 * @param gameMode
 * 玩家的游戏模式。
 * The game mode for the player.
 * @throws This function can throw errors.
 *
 * {@link EngineError}
 */
export function spawnSimulatedPlayer(
    location: DimensionLocation,
    name: string,
    gameMode: GameMode,
): SimulatedPlayer;
