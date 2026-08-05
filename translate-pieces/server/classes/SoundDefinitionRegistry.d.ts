/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { SoundDefinition, SoundDefinitionFilter } from '..';

/**
 * @beta
 * 提供对当前世界加载的音效定义的只读访问。
 *
 * Provides read-only access to the sound definitions loaded for the current world.
 */
export class SoundDefinitionRegistry {
    private constructor();
    /**
     * @remarks
     * 返回注册表中的音效定义，可选择通过筛选条件缩小范围。
     *
     * Returns the sound definitions in the registry, optionally narrowed by a filter.
     *
     * @param filter
     * 应用于每个定义的可选筛选条件。省略时返回所有定义。
     *
     * Optional filter applied to each definition. When omitted, every definition is returned.
     * @returns
     * 所有符合筛选条件的音效定义，或未提供筛选条件时的所有音效定义。
     *
     * All sound definitions matching the filter, or every sound definition when no filter is supplied.
     * @throws
     * 如果 filter.minDuration 大于 filter.maxDuration 将抛出错误。
     *
     * An error will be thrown if filter.minDuration is greater than filter.maxDuration.
     *
     * {@link InvalidArgumentError}
     */
    getDefinitions(filter?: SoundDefinitionFilter): SoundDefinition[];
}
