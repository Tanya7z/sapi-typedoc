/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { RGB } from '../../server';

/**
 * 用于在「生动视觉」(Vibrant Visuals) 中影响光照。
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
     * 为「生动视觉」中的光照设置环境光颜色。
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
     * 为「生动视觉」中的光照设置环境光照度。
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
     * 为「生动视觉」中的光照设置自发光去饱和度。
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
     * 为「生动视觉」中的光照设置闪光颜色。
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
     * 为「生动视觉」中的光照设置闪光照度。
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
     * 为「生动视觉」中的光照设置月亮颜色。
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
     * 为「生动视觉」中的光照设置月亮照度。
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
     * 为「生动视觉」中的光照设置轨道偏移。
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
     * 为「生动视觉」中的光照设置天空强度。
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
     * 为「生动视觉」中的光照设置太阳颜色。
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
     * 为「生动视觉」中的光照设置太阳照度。
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
