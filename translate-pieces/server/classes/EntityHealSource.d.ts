/* IMPORT */ import { EntityHealCause } from '..';

/**
 * 提供有关治愈如何应用于实体的信息。
 *
 * Provides information about how healing has been applied to
 * an entity.
 */
export class EntityHealSource {
    private constructor();
    /**
     * @remarks
     * 治愈来源的原因枚举值。
     *
     * Cause enumerator of the source of healing.
     *
     */
    readonly cause: EntityHealCause;
}
