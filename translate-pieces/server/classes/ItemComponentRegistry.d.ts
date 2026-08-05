/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { CustomComponentInvalidRegistryError, ItemCustomComponent, ItemCustomComponentAlreadyRegisteredError, ItemCustomComponentReloadNewComponentError, ItemCustomComponentReloadNewEventError, ItemCustomComponentReloadVersionError, NamespaceNameError } from '..';

/**
 * 提供为物品注册自定义组件的功能。
 *
 * Provides the functionality for registering custom components
 * for items.
 */
export class ItemComponentRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个可在物品 JSON 配置中使用的物品自定义组件。
     *
     * Registers an item custom component that can be used in item
     * JSON configuration.
     *
     * @earlyExecution
     *
     * @param name
     * 表示该自定义组件的 ID，必须包含命名空间。该 ID 可在物品 JSON 配置的
     * 'minecraft:custom_components' 物品组件下指定。
     * @param itemCustomComponent
     * 当使用此自定义组件 ID 的物品上发生对应事件时，将被调用的事件函数集合。
     * @throws This function can throw errors.
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link EngineError}
     *
     * {@link ItemCustomComponentAlreadyRegisteredError}
     *
     * {@link ItemCustomComponentReloadNewComponentError}
     *
     * {@link ItemCustomComponentReloadNewEventError}
     *
     * {@link ItemCustomComponentReloadVersionError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}
