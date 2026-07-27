// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * `@minecraft/server-graphics` 模块包含用于更改图形和渲染设置的 API。
 *
 * The `@minecraft/server-graphics` module contains APIs to
 * change graphics and rendering settings.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-graphics",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import { EngineError, InvalidArgumentError } from '@minecraft/common';
import { BiomeType, Player, RGB, Vector3 } from '@minecraft/server';
/**
 * 用于在「灵动视效」(Vibrant Visuals) 中按生物群系影响大气散射。
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
     * 为「灵动视效」中的大气散射设置地平线混合上限。
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
     * 为「灵动视效」中的大气散射设置地平线混合 Mie 起始值。
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
     * 为「灵动视效」中的大气散射设置地平线混合下限。
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
     * 为「灵动视效」中的大气散射设置地平线混合起始值。
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
     * 为「灵动视效」中的大气散射设置月亮 Mie 强度。
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
     * 为「灵动视效」中的大气散射设置瑞利散射强度。
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
     * 为「灵动视效」中的大气散射设置天空地平线颜色。
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
     * 为「灵动视效」中的大气散射设置天空天顶颜色。
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
     * 为「灵动视效」中的大气散射设置太阳眩光形状。
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
     * 为「灵动视效」中的大气散射设置太阳 Mie 强度。
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

/**
 * 用于影响 Vibrant Visuals（灵动视效）的颜色分级。
 *
 * Used to affect color grading for Vibrant Visuals
 */
export class BiomeColorGrading {
    private constructor();
    /**
     * @remarks
     * 将高光的对比度重置为资源包设定的值。
     *
     * Resets the contrast of highlights to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHighlightsContrast(): void;
    /**
     * @remarks
     * 将高光的增益重置为资源包设定的值。
     *
     * Resets the gain of highlights to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHighlightsGain(): void;
    /**
     * @remarks
     * 将高光的伽马值重置为资源包设定的值。
     *
     * Resets the gamma of highlights to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHighlightsGamma(): void;
    /**
     * @remarks
     * 将高光下限重置为资源包设定的值。
     *
     * Resets the highlights min to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHighlightsMin(): void;
    /**
     * @remarks
     * 将高光的偏移量重置为资源包设定的值。
     *
     * Resets the offset of highlights to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHighlightsOffset(): void;
    /**
     * @remarks
     * 将高光的饱和度重置为资源包设定的值。
     *
     * Resets the saturation of highlights to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHighlightsSaturation(): void;
    /**
     * @remarks
     * 将中间调的对比度重置为资源包设定的值。
     *
     * Resets the contrast of midtones to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMidtonesContrast(): void;
    /**
     * @remarks
     * 将中间调的增益重置为资源包设定的值。
     *
     * Resets the gain of midtones to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMidtonesGain(): void;
    /**
     * @remarks
     * 将中间调的伽马值重置为资源包设定的值。
     *
     * Resets the gamma of midtones to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMidtonesGamma(): void;
    /**
     * @remarks
     * 将中间调的偏移量重置为资源包设定的值。
     *
     * Resets the offset of midtones to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMidtonesOffset(): void;
    /**
     * @remarks
     * 将中间调的饱和度重置为资源包设定的值。
     *
     * Resets the saturation of midtones to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMidtonesSaturation(): void;
    /**
     * @remarks
     * 将阴影的对比度重置为资源包设定的值。
     *
     * Resets the contrast of shadows to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetShadowsContrast(): void;
    /**
     * @remarks
     * 将阴影的增益重置为资源包设定的值。
     *
     * Resets the gain of shadows to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetShadowsGain(): void;
    /**
     * @remarks
     * 将阴影的伽马值重置为资源包设定的值。
     *
     * Resets the gamma of shadows to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetShadowsGamma(): void;
    /**
     * @remarks
     * 将阴影上限重置为资源包设定的值。
     *
     * Resets the shadows max to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetShadowsMax(): void;
    /**
     * @remarks
     * 将阴影的偏移量重置为资源包设定的值。
     *
     * Resets the offset of shadows to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetShadowsOffset(): void;
    /**
     * @remarks
     * 将阴影的饱和度重置为资源包设定的值。
     *
     * Resets the saturation of shadows to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetShadowsSaturation(): void;
    /**
     * @remarks
     * 将色温重置为资源包设定的值。
     *
     * Resets the temperature to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetTemperature(): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的高光对比度。
     *
     * Sets the contrast of highlights for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param highlightsContrast
     * 一个 Vector3（取值范围 [0.0f, 4.0f]）。用于设置高光的对比度。
     * 对比度描述色调范围，即图像中亮像素与暗像素之间的亮度差异。
     * 高对比度的图像其像素亮度值分布范围很广，而低对比度的图像
     * 其像素亮度值分布范围相对较窄。值为 1.0 时不改变原图像的对比度。
     * 值为 0.0 时会得到一张完全褪色的灰色图像。大于 1.0 的值会在
     * 最终图像中提高高光亮度并加深阴影。
     *
     * A Vector3 (range [0.0f, 4.0f]). Used to set the contrast of
     * highlights. Describes the tonal range, the difference in
     * luminance between the bright and dark pixels in an image. An
     * image with high contrast will have pixels with a wide range
     * of luminance values, whereas an image with low contrast will
     * have pixels of a relatively small luminance range. A value
     * of 1.0 results in no change in contrast to the original
     * image. A value of 0.0 results in a completely washed-out,
     * gray image. Values > 1.0 increase the brightness of
     * highlights while darkening the shadows in the final image.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHighlightsContrast(highlightsContrast: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的高光增益。
     *
     * Sets the gain of highlights for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param highlightsGain
     * 一个 Vector3（取值范围 [0.0f, 10.0f]）。用于设置高光的增益。
     * 增益是应用于各颜色通道的乘法因子，用于调整高光范围的整体亮度强度。
     * 值为 1.0 时不改变原图像。值 < 1.0 会使图像变暗，值 > 1.0 会使其变亮。
     * 值为 0.0 时会完全抵消该颜色通道。增益是乘法性的，因此对较亮像素的
     * 影响比对较暗像素更强。
     *
     * A Vector3 (range [0.0f, 10.0f]). Used to set the gain of
     * highlights. A multiplication factor applied to each color
     * channel to adjust the overall luminance intensity of the
     * highlight range. A value of 1.0 results in no change to the
     * original image. Values < 1.0 darken the image while values >
     * 1.0 brighten it. A value of 0.0 cancels out the color
     * channel completely. Gain is multiplicative and therefore has
     * a stronger effect on brighter pixels than darker pixels.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHighlightsGain(highlightsGain: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的高光伽马值。
     *
     * Sets the gamma of highlights for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param highlightsGamma
     * 一个 Vector3（取值范围 [0.0f, 4.0f]）。用于设置高光的伽马值。
     * 伽马值是在颜色分级和色调映射之后应用于最终颜色的指数因子，
     * 用于调整图像的整体亮度强度。伽马值的标准值为 2.2。较低的值会
     * 加深最终图像，较高的值则会使其变亮。伽马值过高会使最终图像
     * 显得褪色。
     *
     * A Vector3 (range [0.0f, 4.0f]). Used to set the gamma of
     * highlights. An exponential factor applied to the final color
     * after both color grading and tone mapping to adjust the
     * overall luminance intensity of the image. The standard value
     * for gamma is 2.2. Lower values darken the final image,
     * whereas higher values brighten it. Too high a gamma will
     * cause the final image to appear washed-out.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHighlightsGamma(highlightsGamma: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的高光下限。
     *
     * Sets the highlights min for color grading in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param highlightsMin
     * 一个数字（取值范围 [1.0f, 20.0f]）。用于设置高光下限。
     * 该因子与场景的平均亮度相乘，用于确定哪些像素被视为高光。
     * 亮度大于 HighlightsMin * AverageLuminance 的像素将应用高光组的
     * 颜色分级值。值为 1.0 表示高光占据平均亮度及以上的整个取值范围。
     * 更高的值会提高像素被视为高光所需的最低亮度值。此值不应等于
     * ShadowsMax。
     *
     * A number (range [1.0f, 20.0f]). Used to set the highlights
     * min. A factor multiplied by the average luminance of the
     * scene to determine which pixels are considered highlights.
     * Pixels with luminance greater than HighlightsMin *
     * AverageLuminance will have the highlights set of color
     * grading values applied. A value of 1.0 indicates highlights
     * occupy the entire range of values including and above the
     * average luminance. Higher values will cause the minimum
     * required luminance value for a pixel to be considered a
     * highlight to rise. This value should not be equal to
     * ShadowsMax.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHighlightsMin(highlightsMin: number): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的高光偏移量。
     *
     * Sets the offset of highlights for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param highlightsOffset
     * 一个 Vector3（取值范围 [-1.0f, 1.0f]）。用于设置高光的偏移量。
     * 偏移量是一个加法因子，它先与场景的平均亮度相乘，再加到指定的
     * 颜色通道上，用于调整图像的整体亮度强度。值为 0.0 时不产生变化。
     * 值 > 0.0 会使图像变亮，值 < 0.0 会使其变暗。偏移量是加法性的，
     * 因此对较暗像素的影响比对较亮像素更强。
     *
     * A Vector3 (range [-1.0f, 1.0f]). Used to set the offset of
     * highlights. An additive factor that is multiplied by the
     * average luminance of the scene and then added to a given
     * color channel to adjust the overall luminance intensity of
     * the image. A value of 0.0 results in no change. Values > 0.0
     * brighten the image, values < 0.0 darken it. Offset is
     * additive and therefore has a stronger effect on darker
     * pixels than brighter pixels.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHighlightsOffset(highlightsOffset: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的高光饱和度。
     *
     * Sets the saturation of highlights for color grading in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param highlightsSaturation
     * 一个 Vector3（取值范围 [0.0f, 10.0f]）。用于设置高光的饱和度。
     * 饱和度决定颜色的色相强度。值为 1.0 时不改变原图像的饱和度。
     * 值为 0.0 时会得到一张灰度图像。值 > 1.0 会增强颜色的强度。
     *
     * A Vector3 (range [0.0f, 10.0f]). Used to set the saturation
     * of highlights. Determines the hue intensity of colors. A
     * value of 1.0 results in no change in saturation to the
     * original image. A value of 0.0 results in a grayscale image.
     * Values > 1.0 increase the intensity of colors.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHighlightsSaturation(highlightsSaturation: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的中间调对比度。
     *
     * Sets the contrast of midtones for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param midtonesContrast
     * 一个 Vector3（取值范围 [0.0f, 4.0f]）。用于设置中间调的对比度。
     * 对比度描述色调范围，即图像中亮像素与暗像素之间的亮度差异。
     * 高对比度的图像其像素亮度值分布范围很广，而低对比度的图像
     * 其像素亮度值分布范围相对较窄。值为 1.0 时不改变原图像的对比度。
     * 值为 0.0 时会得到一张完全褪色的灰色图像。大于 1.0 的值会在
     * 最终图像中提高高光亮度并加深阴影。
     *
     * A Vector3 (range [0.0f, 4.0f]). Used to set the contrast of
     * midtones. Describes the tonal range, the difference in
     * luminance between the bright and dark pixels in an image. An
     * image with high contrast will have pixels with a wide range
     * of luminance values, whereas an image with low contrast will
     * have pixels of a relatively small luminance range. A value
     * of 1.0 results in no change in contrast to the original
     * image. A value of 0.0 results in a completely washed-out,
     * gray image. Values > 1.0 increase the brightness of
     * highlights while darkening the shadows in the final image.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMidtonesContrast(midtonesContrast: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的中间调增益。
     *
     * Sets the gain of midtones for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param midtonesGain
     * 一个 Vector3（取值范围 [0.0f, 10.0f]）。用于设置中间调的增益。
     * 增益是应用于各颜色通道的乘法因子，用于调整中间调范围的整体亮度强度。
     * 值为 1.0 时不改变原图像。值 < 1.0 会使图像变暗，值 > 1.0 会使其变亮。
     * 值为 0.0 时会完全抵消该颜色通道。增益是乘法性的，因此对较亮像素的
     * 影响比对较暗像素更强。
     *
     * A Vector3 (range [0.0f, 10.0f]). Used to set the gain of
     * midtones. A multiplication factor applied to each color
     * channel to adjust the overall luminance intensity of the
     * midtone range. A value of 1.0 results in no change to the
     * original image. Values < 1.0 darken the image while values >
     * 1.0 brighten it. A value of 0.0 cancels out the color
     * channel completely. Gain is multiplicative and therefore has
     * a stronger effect on brighter pixels than darker pixels.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMidtonesGain(midtonesGain: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的中间调伽马值。
     *
     * Sets the gamma of midtones for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param midtonesGamma
     * 一个 Vector3（取值范围 [0.0f, 4.0f]）。用于设置中间调的伽马值。
     * 伽马值是在颜色分级和色调映射之后应用于最终颜色的指数因子，
     * 用于调整图像的整体亮度强度。伽马值的标准值为 2.2。较低的值会
     * 加深最终图像，较高的值则会使其变亮。伽马值过高会使最终图像
     * 显得褪色。
     *
     * A Vector3 (range [0.0f, 4.0f]). Used to set the gamma of
     * midtones. An exponential factor applied to the final color
     * after both color grading and tone mapping to adjust the
     * overall luminance intensity of the image. The standard value
     * for gamma is 2.2. Lower values darken the final image,
     * whereas higher values brighten it. Too high a gamma will
     * cause the final image to appear washed-out.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMidtonesGamma(midtonesGamma: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的中间调偏移量。
     *
     * Sets the offset of midtones for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param midtonesOffset
     * 一个 Vector3（取值范围 [-1.0f, 1.0f]）。用于设置中间调的偏移量。
     * 偏移量是一个加法因子，它先与场景的平均亮度相乘，再加到指定的
     * 颜色通道上，用于调整图像的整体亮度强度。值为 0.0 时不产生变化。
     * 值 > 0.0 会使图像变亮，值 < 0.0 会使其变暗。偏移量是加法性的，
     * 因此对较暗像素的影响比对较亮像素更强。
     *
     * A Vector3 (range [-1.0f, 1.0f]). Used to set the offset of
     * midtones. An additive factor that is multiplied by the
     * average luminance of the scene and then added to a given
     * color channel to adjust the overall luminance intensity of
     * the image. A value of 0.0 results in no change. Values > 0.0
     * brighten the image, values < 0.0 darken it. Offset is
     * additive and therefore has a stronger effect on darker
     * pixels than brighter pixels.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMidtonesOffset(midtonesOffset: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的中间调饱和度。
     *
     * Sets the saturation of midtones for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param midtonesSaturation
     * 一个 Vector3（取值范围 [0.0f, 10.0f]）。用于设置中间调的饱和度。
     * 饱和度决定颜色的色相强度。值为 1.0 时不改变原图像的饱和度。
     * 值为 0.0 时会得到一张灰度图像。值 > 1.0 会增强颜色的强度。
     *
     * A Vector3 (range [0.0f, 10.0f]). Used to set the saturation
     * of midtones. Determines the hue intensity of colors. A value
     * of 1.0 results in no change in saturation to the original
     * image. A value of 0.0 results in a grayscale image. Values >
     * 1.0 increase the intensity of colors.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMidtonesSaturation(midtonesSaturation: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的阴影对比度。
     *
     * Sets the contrast of shadows for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param shadowsContrast
     * 一个 Vector3（取值范围 [0.0f, 4.0f]）。用于设置阴影的对比度。
     * 对比度描述色调范围，即图像中亮像素与暗像素之间的亮度差异。
     * 高对比度的图像其像素亮度值分布范围很广，而低对比度的图像
     * 其像素亮度值分布范围相对较窄。值为 1.0 时不改变原图像的对比度。
     * 值为 0.0 时会得到一张完全褪色的灰色图像。大于 1.0 的值会在
     * 最终图像中提高高光亮度并加深阴影。
     *
     * A Vector3 (range [0.0f, 4.0f]). Used to set the contrast of
     * shadows. Describes the tonal range, the difference in
     * luminance between the bright and dark pixels in an image. An
     * image with high contrast will have pixels with a wide range
     * of luminance values, whereas an image with low contrast will
     * have pixels of a relatively small luminance range. A value
     * of 1.0 results in no change in contrast to the original
     * image. A value of 0.0 results in a completely washed-out,
     * gray image. Values > 1.0 increase the brightness of
     * highlights while darkening the shadows in the final image.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setShadowsContrast(shadowsContrast: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的阴影增益。
     *
     * Sets the gain of shadows for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param shadowsGain
     * 一个 Vector3（取值范围 [0.0f, 10.0f]）。用于设置阴影的增益。
     * 增益是应用于各颜色通道的乘法因子，用于调整阴影范围的整体亮度强度。
     * 值为 1.0 时不改变原图像。值 < 1.0 会使图像变暗，值 > 1.0 会使其变亮。
     * 值为 0.0 时会完全抵消该颜色通道。增益是乘法性的，因此对较亮像素的
     * 影响比对较暗像素更强。
     *
     * A Vector3 (range [0.0f, 10.0f]). Used to set the gain of
     * shadows. A multiplication factor applied to each color
     * channel to adjust the overall luminance intensity of the
     * shadow range. A value of 1.0 results in no change to the
     * original image. Values < 1.0 darken the image while values >
     * 1.0 brighten it. A value of 0.0 cancels out the color
     * channel completely. Gain is multiplicative and therefore has
     * a stronger effect on brighter pixels than darker pixels.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setShadowsGain(shadowsGain: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的阴影伽马值。
     *
     * Sets the gamma of shadows for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param shadowsGamma
     * 一个 Vector3（取值范围 [0.0f, 4.0f]）。用于设置阴影的伽马值。
     * 伽马值是在颜色分级和色调映射之后应用于最终颜色的指数因子，
     * 用于调整图像的整体亮度强度。伽马值的标准值为 2.2。较低的值会
     * 加深最终图像，较高的值则会使其变亮。伽马值过高会使最终图像
     * 显得褪色。
     *
     * A Vector3 (range [0.0f, 4.0f]). Used to set the gamma of
     * shadows. An exponential factor applied to the final color
     * after both color grading and tone mapping to adjust the
     * overall luminance intensity of the image. The standard value
     * for gamma is 2.2. Lower values darken the final image,
     * whereas higher values brighten it. Too high a gamma will
     * cause the final image to appear washed-out.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setShadowsGamma(shadowsGamma: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的阴影上限。
     *
     * Sets the shadows max for color grading in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param shadowsMax
     * 一个数字（取值范围 [0.0f, 1.0f]）。用于设置阴影上限。
     * 该因子与场景的平均亮度相乘，用于确定哪些像素被视为阴影。
     * 亮度小于 ShadowsMax * AverageLuminance 的像素将应用阴影组的
     * 颜色分级值。值为 1.0 表示阴影占据平均亮度及以下的整个取值范围。
     * 更低的值会降低像素被视为阴影所需的最高亮度值。此值不应等于
     * HighlightsMin。
     *
     * A number (range [0.0f, 1.0f]). Used to set the shadows max.
     * A factor multiplied by the average luminance of the scene to
     * determine which pixels are considered shadows. Pixels with
     * luminance less than ShadowsMax * AverageLuminance will have
     * the shadows set of color grading values applied. A value of
     * 1.0 indicates shadows occupy the entire range of values
     * including and up to the average luminance. Lower values will
     * cause the maximum required luminance value for a pixel to be
     * considered a shadow to drop. This value should not be equal
     * to HighlightsMin.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setShadowsMax(shadowsMax: number): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的阴影偏移量。
     *
     * Sets the offset of shadows for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param shadowsOffset
     * 一个 Vector3（取值范围 [-1.0f, 1.0f]）。用于设置阴影的偏移量。
     * 偏移量是一个加法因子，它先与场景的平均亮度相乘，再加到指定的
     * 颜色通道上，用于调整图像的整体亮度强度。值为 0.0 时不产生变化。
     * 值 > 0.0 会使图像变亮，值 < 0.0 会使其变暗。偏移量是加法性的，
     * 因此对较暗像素的影响比对较亮像素更强。
     *
     * A Vector3 (range [-1.0f, 1.0f]). Used to set the offset of
     * shadows. An additive factor that is multiplied by the
     * average luminance of the scene and then added to a given
     * color channel to adjust the overall luminance intensity of
     * the image. A value of 0.0 results in no change. Values > 0.0
     * brighten the image, values < 0.0 darken it. Offset is
     * additive and therefore has a stronger effect on darker
     * pixels than brighter pixels.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setShadowsOffset(shadowsOffset: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的阴影饱和度。
     *
     * Sets the saturation of shadows for color grading in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param shadowsSaturation
     * 一个 Vector3（取值范围 [0.0f, 10.0f]）。用于设置阴影的饱和度。
     * 饱和度决定颜色的色相强度。值为 1.0 时不改变原图像的饱和度。
     * 值为 0.0 时会得到一张灰度图像。值 > 1.0 会增强颜色的强度。
     *
     * A Vector3 (range [0.0f, 10.0f]). Used to set the saturation
     * of shadows. Determines the hue intensity of colors. A value
     * of 1.0 results in no change in saturation to the original
     * image. A value of 0.0 results in a grayscale image. Values >
     * 1.0 increase the intensity of colors.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setShadowsSaturation(shadowsSaturation: Vector3): void;
    /**
     * @remarks
     * 设置 Vibrant Visuals 中颜色分级的色温。
     *
     * Sets the temperature for color grading in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param temperature
     * 一个数字（取值范围 [1000.0f, 15000.0f]）。用于设置色温。
     * 即以开尔文（Kelvin）为单位测量的整体图像色温。默认值为 6500.0，
     * 即标准的「日光」照明。
     *
     * A number (range [1000.0f, 15000.0f]). Used to set the
     * temperature. The overall image temperature measured in
     * Kelvin. The default value is 6500.0, the standard "daylight"
     * illumination.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setTemperature(temperature: number): void;
}

/**
 * 用于在「灵动视效」(Vibrant Visuals) 中影响光照。
 *
 * Used to affect lighting for Vibrant Visuals
 */
export class BiomeLighting {
    private constructor();
    /**
     * @remarks
     * 将环境光颜色重置为资源包所设置的值。
     *
     * Resets the ambient color to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetAmbientColor(): void;
    /**
     * @remarks
     * 将环境光照度重置为资源包所设置的值。
     *
     * Resets the ambient illuminance to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetAmbientIlluminance(): void;
    /**
     * @remarks
     * 将自发光去饱和度重置为资源包所设置的值。
     *
     * Resets the emissive desaturation to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetEmissiveDesaturation(): void;
    /**
     * @remarks
     * 将闪光颜色重置为资源包所设置的值。
     *
     * Resets the flash color to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetFlashColor(): void;
    /**
     * @remarks
     * 将闪光照度重置为资源包所设置的值。
     *
     * Resets the flash illuminance to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetFlashIlluminance(): void;
    /**
     * @remarks
     * 将月亮颜色重置为资源包所设置的值。
     *
     * Resets the moon color to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMoonColor(): void;
    /**
     * @remarks
     * 将月亮照度重置为资源包所设置的值。
     *
     * Resets the moon illuminance to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMoonIlluminance(): void;
    /**
     * @remarks
     * 将轨道偏移角度重置为资源包所设置的值。
     *
     * Resets the orbital offset to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetOrbitalOffsetDegrees(): void;
    /**
     * @remarks
     * 将天空强度重置为资源包所设置的值。
     *
     * Resets the sky intensity to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSkyIntensity(): void;
    /**
     * @remarks
     * 将太阳颜色重置为资源包所设置的值。
     *
     * Resets the sun color to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSunColor(): void;
    /**
     * @remarks
     * 将太阳照度重置为资源包所设置的值。
     *
     * Resets the sun illuminance to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSunIlluminance(): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置环境光颜色。
     *
     * Sets the ambient color for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setAmbientColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置环境光照度。
     *
     * Sets the ambient illuminance for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setAmbientIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置自发光去饱和度。
     *
     * Sets the emissive desaturation for lighting in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setEmissiveDesaturation(value: number): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置闪光颜色。
     *
     * Sets the flash color for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setFlashColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置闪光照度。
     *
     * Sets the flash illuminance for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setFlashIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置月亮颜色。
     *
     * Sets the moon color for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMoonColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置月亮照度。
     *
     * Sets the moon illuminance for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMoonIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置轨道偏移。
     *
     * Sets the orbital offset for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setOrbitalOffsetDegrees(degrees: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置天空强度。
     *
     * Sets the sky intensity for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSkyIntensity(intensity: number | Record<number, number>): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置太阳颜色。
     *
     * Sets the sun color for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSunColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * 为「灵动视效」中的光照设置太阳照度。
     *
     * Sets the sun illuminance for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSunIlluminance(illuminance: number | Record<number, number>): void;
}

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

/**
 * @remarks
 * 获取 BiomeAtmospherics 组件，用于在「灵动视效」(Vibrant Visuals) 中控制大气散射效果。
 *
 * Retrieves the BiomeAtmospherics component to control
 * atmoshperic scattering for Vibrant Visuals.
 *
 * @worldMutation
 *
 */
export function getBiomeAtmospherics(biome: BiomeType): BiomeAtmospherics;
/**
 * @remarks
 * 获取 BiomeColorGrading 组件，用于在「灵动视效」中控制色彩分级。
 *
 * Retrieves the BiomeColorGrading component to control color
 * grading for Vibrant Visuals.
 *
 * @worldMutation
 *
 */
export function getBiomeColorGrading(biome: BiomeType): BiomeColorGrading;
/**
 * @remarks
 * 获取 BiomeLighting 组件，用于在「灵动视效」中控制光照。
 *
 * Retrieves the BiomeLighting component to control lighting
 * for Vibrant Visuals.
 *
 * @worldMutation
 *
 */
export function getBiomeLighting(biome: BiomeType): BiomeLighting;
/**
 * @remarks
 * 获取 BiomeWater 组件，用于在「灵动视效」中控制水的效果。
 *
 * Retrieves the BiomeWater component to control water for
 * Vibrant Visuals
 *
 * @worldMutation
 *
 */
export function getBiomeWater(biome: BiomeType): BiomeWater;
/**
 * @remarks
 * 获取 PlayerAtmospherics 组件，用于在「灵动视效」中控制特定玩家的大气散射效果。它提供与 BiomeAtmospherics 相同的控制选项，但 PlayerAtmospherics 的控制将始终优先于 BiomeAtmospherics。
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
/**
 * @remarks
 * 获取 PlayerColorGrading 组件，用于在「灵动视效」中控制特定玩家的色彩分级。它提供与 BiomeColorGrading 相同的控制选项，但 PlayerColorGrading 的控制将始终优先于 BiomeColorGrading。
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
/**
 * @remarks
 * 获取 PlayerLighting 组件，用于在「灵动视效」中控制特定玩家的光照。它提供与 BiomeLighting 相同的控制选项，但 PlayerLighting 的控制将始终优先于 BiomeLighting。
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
