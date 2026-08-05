/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { CustomDimensionAlreadyRegisteredError, CustomDimensionInvalidRegistryError, CustomDimensionNameError, CustomDimensionReloadNewDimensionError, NamespaceNameError } from '..';

/**
 * 提供注册自定义维度的功能。自定义维度只能在系统启动事件期间注册。
 *
 * Provides the functionality for registering custom
 * dimensions. Custom dimensions can only be registered during
 * the system startup event.
 */
export class DimensionRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个新的自定义维度类型。必须在系统启动事件期间调用。维度将使用虚空生成器创建。
     *
     * Registers a new custom dimension type. Must be called during
     * the system startup event. The dimension will be created
     * using the void generator.
     *
     * @earlyExecution
     *
     * @param typeId
     * 自定义维度的命名空间标识符（例如，`mypack:my_dimension`）。必须包含命名空间，并仅使用有效的标识符字符。
     *
     * The namespaced identifier for the custom dimension (e.g.,
     * 'mypack:my_dimension'). Must include a namespace and use
     * only valid identifier characters.
     * @throws This function can throw errors.
     *
     * {@link CustomDimensionAlreadyRegisteredError}
     *
     * {@link CustomDimensionInvalidRegistryError}
     *
     * {@link CustomDimensionNameError}
     *
     * {@link CustomDimensionReloadNewDimensionError}
     *
     * {@link EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomDimension(typeId: string): void;
}
