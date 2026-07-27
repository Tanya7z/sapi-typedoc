/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';

/**
 * 用于在“鲜艳视觉”（Vibrant Visuals）中影响水的效果。
 *
 * Used to affect water for Vibrant Visuals
 */
export class BiomeWater {
    private constructor();
    /**
     * @remarks
     * 将 CDOM 重置为资源包所设置的值。
     *
     * Resets the CDOM  to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetCDOM(): void;
    /**
     * @remarks
     * 将叶绿素浓度重置为资源包所设置的值。
     *
     * Resets the chlorophyll concentration to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetChlorophyll(): void;
    /**
     * @remarks
     * 将悬浮沉积物重置为资源包所设置的值。
     *
     * Resets the suspended sediment  to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSuspendedSediment(): void;
    /**
     * @remarks
     * 将波浪深度重置为资源包所设置的值。
     *
     * Resets the wave depth to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesDepth(): void;
    /**
     * @remarks
     * 将波浪方向增量重置为资源包所设置的值。
     *
     * Resets the wave direction increment to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesDirectionIncrement(): void;
    /**
     * @remarks
     * 将波浪频率重置为资源包所设置的值。
     *
     * Resets the wave frequency to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesFrequency(): void;
    /**
     * @remarks
     * 将波浪频率缩放重置为资源包所设置的值。
     *
     * Resets the wave frequency scaling to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesFrequencyScaling(): void;
    /**
     * @remarks
     * 将波浪混合重置为资源包所设置的值。
     *
     * Resets the wave mix to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesMix(): void;
    /**
     * @remarks
     * 将波浪倍频层数重置为资源包所设置的值。
     *
     * Resets the wave octaves to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesOctaves(): void;
    /**
     * @remarks
     * 将波浪拉力重置为资源包所设置的值。
     *
     * Resets the wave pull to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesPull(): void;
    /**
     * @remarks
     * 将波浪形状重置为资源包所设置的值。
     *
     * Resets the wave shape to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesShape(): void;
    /**
     * @remarks
     * 将波浪速度重置为资源包所设置的值。
     *
     * Resets the wave speed to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesSpeed(): void;
    /**
     * @remarks
     * 将波浪速度缩放重置为资源包所设置的值。
     *
     * Resets the wave speed scaling to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesSpeedScaling(): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的 CDOM。
     *
     * Sets the CDOM for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param cdom
     * 范围为 `[0,15]` 的一个数字，用于设置 CDOM。CDOM 浓度越高，由于强烈吸收蓝色波长，水体会呈现黄色至黄褐色；开阔海域通常几乎没有 CDOM，因此保持蓝色；而河流等淡水来源往往具有较高的 CDOM 浓度。
     *
     * A number (range [0,15]). Used to set the CDOM. High
     * concentrations produce yellow to yellow-brown colors, due to
     * CDOM strongly absorbing blue wavelengths. Open oceans
     * typically have little to no CDOM, and thus retain a blue
     * appearance; fresh water sources, like rivers, tend to have
     * higher concentrations.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setCDOM(cdom: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的叶绿素浓度。
     *
     * Sets the chlorophyll concentration for water in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param chlorophyll
     * 范围为 `[0,10]` 的一个数字，用于设置叶绿素浓度。浓度越高，由于叶绿素强烈吸收蓝色与红色波长，水体会呈现绿色。
     *
     * A number (range [0,10]). Used to set the chlorophyll
     * concentration. High concentrations produce green colors, due
     * to chlorophyll strongly absorbing blue and red wavelengths.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setChlorophyll(chlorophyll: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的悬浮沉积物。
     *
     * Sets the suspended sediment for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param suspendedSediment
     * 范围为 `[0,300]` 的一个数字，用于设置悬浮沉积物。浓度越高，由于悬浮沉积物强烈吸收蓝色与绿色波长，水体会呈现红色至红褐色。黏土和淤泥等悬浮沉积物往往在河流中富集，可作为近期洪水或污染源的指示。
     *
     * A number (range [0,300]). Used to set the suspended
     * sediment.  High concentrations produce red to red-brown
     * colors, due to suspended sediment strongly absorbing blue
     * and green wavelengths. Suspended sediment, like clay and
     * silt, tend to be concentrated in rivers and can indicate
     * recent floods or sources of pollution.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSuspendedSediment(suspendedSediment: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的波浪深度。
     *
     * Sets the wave depth for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesDepth
     * 范围为 `[0,10]` 的一个数字，用于设置波浪深度。值越大表示波浪越深，值越小则波浪越浅。
     *
     * A number (range [0,10]). Used to set the wave depth.
     * Determines how much waves displace the water surface. Larger
     * values will result in deeper waves, whereas smaller values
     * will produce shallower waves.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesDepth(wavesDepth: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的波浪方向增量。
     *
     * Sets the wave direction increment for water in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param wavesDirectionIncrement
     * 范围为 `[0.0f, 360.0f]` 的一个数字，用于设置波浪方向增量。该角度（以度为单位）控制每个倍频层之间方向变化的幅度。
     *
     * A number (range [0.0f, 360.0f]). Used to set the wave
     * direction increment. An angle, in degrees, that controls how
     * much the heading changes between each octave.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesDirectionIncrement(wavesDirectionIncrement: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的波浪频率。
     *
     * Sets the wave frequency for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesFrequency
     * 范围为 `[0,10]` 的一个数字，用于设置波浪频率。决定每个水方块所具有的波浪数量，也可理解为波浪尺寸。值越大波浪排列越紧密，值越小则波浪越发分散。
     *
     * A number (range [0,10]). Used to set the wave frequency.
     * Determines how many waves there are per water block. Can
     * also be thought of as the size of the waves. Larger values
     * will create more tightly packed waves, whereas smaller
     * values will spread waves out over a wider area.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesFrequency(wavesFrequency: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的波浪频率缩放。
     *
     * Sets the wave frequency scaling for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesFrequencyScaling
     * 范围为 `[0,2]` 的一个数字，用于设置波浪频率缩放。指定倍频层之间波浪频率的变化幅度。值为 `1` 时倍频层之间频率不变；大于 `1` 时频率递增；小于 `1` 时频率递减。
     *
     * A number (range [0,2]). Used to set the wave frequency
     * scaling. Specifies how much wave frequency changes between
     * octaves. A value of 1 will result in no change between
     * octaves. Values higher than 1 will cause frequencies to
     * increase while values less than 1 will cause frequencies to
     * decrease.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesFrequencyScaling(wavesFrequencyScaling: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的波浪混合。
     *
     * Sets the wave mix for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesMix
     * 范围为 `[0.0, 1.0]` 的一个数字，用于设置波浪混合。控制每个倍频层与其相邻倍频层之间的混合程度。
     *
     * A number (range [0.0, 1.0]). Used to set the wave mix.
     * Controls how much each octave is blended into the
     * neighboring octave.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesMix(wavesMix: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的波浪倍频层数。
     *
     * Sets the wave octaves for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesOctaves
     * 范围为 `[1.0, 10]` 的一个数字，用于设置波浪倍频层数。决定要模拟的波浪层数；值越大，波浪越复杂。
     *
     * A number (range [1.0, 10]). Used to set the wave octaves.
     * Determines how many layers of waves to simulate; high values
     * result in more complex waves
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesOctaves(wavesOctaves: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的波浪拉力。
     *
     * Sets the wave pull for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesPull
     * 范围为 `[-1.0f, 1.0f]` 的一个数字，用于设置波浪拉力。控制较小的波浪被吸入较大波浪的程度。值为 `0` 表示不进行拉拽；大于 `0` 时以标准的凹形方式进行拉拽；小于 `0` 时以凸形方式进行拉拽，从而产生更膨胀的波浪而非浪尖翻卷的波浪。
     *
     * A number (range [-1.0f, 1.0f]). Used to set the wave pull.
     * Controls how much smaller waves are pulled into larger
     * waves. A value of 0 results in no pull. Values larger than 0
     * will pull waves in a standard concave fashion, whereas
     * values less than 0 will pull waves in a convex fashion,
     * resulting in more pillowing waves as opposed to cresting
     * waves.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesPull(wavesPull: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的波浪形状。
     *
     * Sets the wave shape for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesShape
     * 范围为 `[1.0, 10]` 的一个数字，用于设置波浪形状。调节波浪的核心形状。值为 `1` 时为纯正弦波；大于 `1` 时波浪更尖锐。
     *
     * A number (range [1.0, 10]). Used to set the wave shape.
     * Adjusts the core shape of waves. A value of 1 results in a
     * pure sine wave, whereas values larger than 1 will produce
     * sharper waves.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesShape(wavesShape: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的波浪速度。
     *
     * Sets the wave speed for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesSpeed
     * 范围为 `[0.01,10]` 的一个数字，用于设置波浪速度。决定第一层波浪的移动速度，并作为“速度缩放”参数的起始值。
     *
     * A number (range [0.01,10]). Used to set the wave speed.
     * etermines the movement speed of the first wave and the
     * starting value of the Speed Scaling parameter.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesSpeed(wavesSpeed: number): void;
    /**
     * @remarks
     * 设置“鲜艳视觉”中水的波浪速度缩放。
     *
     * Sets the wave speed scaling for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesSpeedScaling
     * 范围为 `[0.0,2]` 的一个数字，用于设置波浪速度缩放。控制后续每个倍频层的移动速度。值为 `1` 时倍频层之间速度不变；大于 `1` 时速度递增；小于 `1` 时速度递减。
     *
     * A number (range [0.0,2]). Used to set the wave speed
     * scaling. Controls how much faster each subsequent octave
     * moves. A value of 1 will result in no change between
     * octaves. Values higher than 1 will cause speeds to increase
     * while values less than 1 will cause speeds to decrease.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesSpeedScaling(wavesSpeedScaling: number): void;
}
