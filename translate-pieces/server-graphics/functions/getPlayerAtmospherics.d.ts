/* IMPORT */ import { BiomeType, Player } from '../../server';
/* IMPORT */ import { BiomeAtmospherics } from '..';

/**
 * @remarks
 * 获取 PlayerAtmospherics 组件，用于在「生动视觉」中控制特定玩家的大气散射效果。它提供与 BiomeAtmospherics 相同的控制选项，但 PlayerAtmospherics 的控制将始终优先于 BiomeAtmospherics。
 *
 * Retrieves the PlayerAtmospherics component to control
 * atmospheric scattering for a particular player in Vibrant
 * Visuals. This offers the same controls as BiomeAtmospherics,
 * but PlayerAtmospherics controls will always take precedence
 * over BiomeAtmospherics.
 *
 * @worldMutation
 *
 */
export function getPlayerAtmospherics(
    biome: BiomeType,
    player: Player,
): BiomeAtmospherics;
