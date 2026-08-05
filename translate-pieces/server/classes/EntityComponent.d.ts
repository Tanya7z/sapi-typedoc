/* IMPORT */ import { Component, Entity, InvalidEntityError } from '..';

/**
 * 下游实体组件的基类。
 *
 * Base class for downstream entity components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 拥有此组件的实体。如果实体已被移除，则实体将为 `undefined`。
     *
     * The entity that owns this component. The entity will be
     * undefined if it has been removed.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly entity: Entity;
}
