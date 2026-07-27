/* IMPORT */ import { BiomeType, Player } from '../../server';
/* IMPORT */ import { BiomeColorGrading } from '..';

/**
 * @remarks
 * 获取 PlayerColorGrading 组件，用于在「生动视觉」中控制特定玩家的色彩分级。它提供与 BiomeColorGrading 相同的控制选项，但 PlayerColorGrading 的控制将始终优先于 BiomeColorGrading。
 *
 * Retrieves the PlayerColorGrading component to control color
 * grading for a particular player in Vibrant Visuals. This
 * offers the same controls as BiomeColorGrading, but
 * PlayerColorGrading controls will always take precedence over
 * BiomeColorGrading.
 *
 * @worldMutation
 *
 */
export function getPlayerColorGrading(
    biome: BiomeType,
    player: Player,
): BiomeColorGrading;
