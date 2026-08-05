/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { BlockCustomComponent, BlockCustomComponentAlreadyRegisteredError, BlockCustomComponentReloadNewComponentError, BlockCustomComponentReloadNewEventError, BlockCustomComponentReloadVersionError, CustomComponentInvalidRegistryError, NamespaceNameError } from '..';

/**
 * 用于注册方块自定义组件的注册表类。
 * 
 * Registry class for block custom components.
 */
export class BlockComponentRegistry {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link BlockCustomComponentAlreadyRegisteredError}
     *
     * {@link BlockCustomComponentReloadNewComponentError}
     *
     * {@link BlockCustomComponentReloadNewEventError}
     *
     * {@link BlockCustomComponentReloadVersionError}
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}
