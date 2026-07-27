/* IMPORT */ import { EngineError } from '../../common';

/**
 * 表示一种药水效果类型，例如治疗或跳跃提升。
 *
 * Represents a type of potion effect - like healing or leaping.
 */
export class PotionEffectType {
    private constructor();
    /**
     * @remarks
     * 效果应用于实体时的持续时间（以刻为单位）。`undefined` 表示效果不会过期。
     *
     * Duration of the effect when applied to an entity in ticks. Undefined means the effect does not expire.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     */
    readonly durationTicks?: number;
    readonly id: string;
}
