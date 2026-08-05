/* IMPORT */ import { BiomeType, Player } from '../../server';
/* IMPORT */ import { BiomeWater } from '..';

/**
 * @remarks
 * 获取 PlayerWater 组件，用于在「灵动视效」中控制特定玩家的水效果。它提供与 BiomeWater 相同的控制选项，但 PlayerWater 的控制将始终优先于 BiomeWater。
 *
 * Retrieves the PlayerWater component to control water for a
 * particular player in Vibrant Visuals. This offers the same
 * controls as BiomeWater, but PlayerWater controls will always
 * take precedence over BiomeWater.
 *
 * @worldMutation
 *
 */
export function getPlayerWater(biome: BiomeType, player: Player): BiomeWater;
