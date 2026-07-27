/* IMPORT */ import { BiomeType, Player } from '../../server';
/* IMPORT */ import { BiomeLighting } from '..';

/**
 * @remarks
 * 获取 PlayerLighting 组件，用于在「生动视觉」中控制特定玩家的光照。它提供与 BiomeLighting 相同的控制选项，但 PlayerLighting 的控制将始终优先于 BiomeLighting。
 *
 * Retrieves the PlayerLighting component to control lighting
 * for a particular player in Vibrant Visuals. This offers the
 * same controls as BiomeLighting, but PlayerLighting controls
 * will always take precedence over BiomeLighting.
 *
 * @worldMutation
 *
 */
export function getPlayerLighting(biome: BiomeType, player: Player): BiomeLighting;
