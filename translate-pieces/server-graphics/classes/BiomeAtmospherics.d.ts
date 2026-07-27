/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { RGB } from '../../server';

/**
 * 用于在「生动视觉」(Vibrant Visuals) 中按生物群系影响大气散射。
 *
 * Used to affect atmospheric scattering per biome for Vibrant
 * Visuals
 */
export class BiomeAtmospherics {
    private constructor();
    /**
     * @remarks
     * 将地平线混合上限重置为资源包所设置的值,或通过行为包中的 'setHorizonBlendMax' API 所设置的值。
     *
     * Resets the horizon blend max to the value set by resource
     * packs or via the 'setHorizonBlendMax' API in behavior packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendMax(): void;
    /**
     * @remarks
     * 将地平线混合 Mie 起始值重置为资源包所设置的值,或通过行为包中的 'setHorizonBlendMieStart' API 所设置的值。
     *
     * Resets the horizon blend mie start to the value set by
     * resource packs or via the 'setHorizonBlendMieStart' API in
     * behavior packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendMieStart(): void;
    /**
     * @remarks
     * 将地平线混合下限重置为资源包所设置的值,或通过行为包中的 'setHorizonBlendMin' API 所设置的值。
     *
     * Resets the horizon blend min to the value set by resource
     * packs or via the 'setHorizonBlendMin' API in behavior packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendMin(): void;
    /**
     * @remarks
     * 将地平线混合起始值重置为资源包所设置的值,或通过行为包中的 'setHorizonBlendStart' API 所设置的值。
     *
     * Resets the horizon blend start to the value set by resource
     * packs or via the 'setHorizonBlendStart' API in behavior
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendStart(): void;
    /**
     * @remarks
     * 将月亮 Mie 强度重置为资源包所设置的值,或通过行为包中的 'setMoonMieStrength' API 所设置的值。
     *
     * Resets the moon mie strength to the value set by resource
     * packs or via the 'setMoonMieStrength' API in behavior packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMoonMieStrength(): void;
    /**
     * @remarks
     * 将瑞利散射强度重置为资源包所设置的值,或通过行为包中的 'setRayleighStrength' API 所设置的值。
     *
     * Resets the rayleigh strength to the value set by resource
     * packs or via the 'setRayleighStrength' API in behavior packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetRayleighStrength(): void;
    /**
     * @remarks
     * 将天空地平线颜色重置为资源包所设置的值,或通过行为包中的 'setSkyHorizonColor' API 所设置的值。
     *
     * Resets the sky horizon color to the color set by resource
     * packs or via the 'setSkyHorizonColor' API in behavior packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSkyHorizonColor(): void;
    /**
     * @remarks
     * 将天空天顶颜色重置为资源包所设置的值,或通过行为包中的 'setSkyZenithColor' API 所设置的值。
     *
     * Resets the sky zenith color to the color set by resource
     * packs or via the 'setSkyZenithColor' API in behavior packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSkyZenithColor(): void;
    /**
     * @remarks
     * 将太阳眩光形状重置为资源包所设置的值,或通过行为包中的 'setSunGlareShape' API 所设置的值。
     *
     * Resets the sun glare shape to the value set by resource
     * packs or via the 'setSunGlareShape' API in behavior packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSunGlareShape(): void;
    /**
     * @remarks
     * 将太阳 Mie 强度重置为资源包所设置的值,或通过行为包中的 'setSunMieStrength' API 所设置的值。
     *
     * Resets the sun mie strength to the value set by resource
     * packs or via the 'setSunMieStrength' API in behavior packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSunMieStrength(): void;
    /**
     * @remarks
     * 为「生动视觉」中的大气散射设置地平线混合上限。
     *
     * Sets the horizon blend max for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param blendMax
     * 一个数字(范围 [0,1])或一组关键帧。关键帧由键值对组成。键是一个数字(范围 [0,1])用于表示一天中的时间(0.0 和 1.0 表示正午,0.25 表示日落,0.5 表示午夜,0.75 表示日出)。值也是一个数字(范围 [0,1])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendMax(blendMax: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「生动视觉」中的大气散射设置地平线混合 Mie 起始值。
     *
     * Sets the horizon blend mie start for atmospheric scattering
     * in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param blendMieStart
     * 一个数字(范围 [0,1.2])或一组关键帧。关键帧由键值对组成。键是一个数字(范围 [0,1])用于表示一天中的时间(0.0 和 1.0 表示正午,0.25 表示日落,0.5 表示午夜,0.75 表示日出)。值也是一个数字(范围 [0,1.2])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendMieStart(blendMieStart: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「生动视觉」中的大气散射设置地平线混合下限。
     *
     * Sets the horizon blend min for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param blendMin
     * 一个数字(范围 [0,1])或一组关键帧。关键帧由键值对组成。键是一个数字(范围 [0,1])用于表示一天中的时间(0.0 和 1.0 表示正午,0.25 表示日落,0.5 表示午夜,0.75 表示日出)。值也是一个数字(范围 [0,1])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendMin(blendMin: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「生动视觉」中的大气散射设置地平线混合起始值。
     *
     * Sets the horizon blend start for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param blendStart
     * 一个数字(范围 [0,1])或一组关键帧。关键帧由键值对组成。键是一个数字(范围 [0,1])用于表示一天中的时间(0.0 和 1.0 表示正午,0.25 表示日落,0.5 表示午夜,0.75 表示日出)。值也是一个数字(范围 [0,1])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendStart(blendStart: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「生动视觉」中的大气散射设置月亮 Mie 强度。
     *
     * Sets the moon mie strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param moonMieStrength
     * 一个数字(范围 [0,60])或一组关键帧。关键帧由键值对组成。键是一个数字(范围 [0,1])用于表示一天中的时间(0.0 和 1.0 表示正午,0.25 表示日落,0.5 表示午夜,0.75 表示日出)。值也是一个数字(范围 [0,60])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMoonMieStrength(moonMieStrength: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「生动视觉」中的大气散射设置瑞利散射强度。
     *
     * Sets the rayleigh strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param rayleighStrength
     * 一个数字(范围 [0,11])或一组关键帧。关键帧由键值对组成。键是一个数字(范围 [0,1])用于表示一天中的时间(0.0 和 1.0 表示正午,0.25 表示日落,0.5 表示午夜,0.75 表示日出)。值也是一个数字(范围 [0,11])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setRayleighStrength(rayleighStrength: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「生动视觉」中的大气散射设置天空地平线颜色。
     *
     * Sets the sky horizon color for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param color
     * 一个 RGB 三元组或一组关键帧。关键帧由键值对组成。键是一个数字(范围 [0,1])用于表示一天中的时间(0.0 和 1.0 表示正午,0.25 表示日落,0.5 表示午夜,0.75 表示日出),值是一个 RGB 三元组
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSkyHorizonColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * 为「生动视觉」中的大气散射设置天空天顶颜色。
     *
     * Sets the sky zenith color for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param color
     * 一个 RGB 三元组或一组关键帧。关键帧由键值对组成。键是一个范围 0-1 的浮点数用于表示一天中的时间,值是一个 RGB 三元组
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSkyZenithColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * 为「生动视觉」中的大气散射设置太阳眩光形状。
     *
     * Sets the sun glare shape for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param sunGlareShape
     * 一个数字(范围 [0,50])或一组关键帧。关键帧由键值对组成。键是一个数字(范围 [0,1])用于表示一天中的时间(0.0 和 1.0 表示正午,0.25 表示日落,0.5 表示午夜,0.75 表示日出)。值也是一个数字(范围 [0,50])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSunGlareShape(sunGlareShape: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「生动视觉」中的大气散射设置太阳 Mie 强度。
     *
     * Sets the sun mie strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param sunMieStrength
     * 一个数字(范围 [0,60])或一组关键帧。关键帧由键值对组成。键是一个数字(范围 [0,1])用于表示一天中的时间(0.0 和 1.0 表示正午,0.25 表示日落,0.5 表示午夜,0.75 表示日出)。值也是一个数字(范围 [0,60])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSunMieStrength(sunMieStrength: number | Record<number, number>): void;
}
