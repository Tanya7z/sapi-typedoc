/**
 * 下游 Component 实现的基类。
 *
 * Base class for downstream Component implementations.
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * 返回该组件是否有效。如果组件的拥有者有效，并且满足组件所需的任何额外验证，则该组件被视为有效。
     *
     * Returns whether the component is valid. A component is
     * considered valid if its owner is valid, in addition to any
     * addition to any additional validation required by the
     * component.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 组件的标识符。
     *
     * Identifier of the component.
     *
     */
    readonly typeId: string;
}
