/* IMPORT */ import { Block, Component } from '..';

/**
 * 与方块相关联的组件的基础类型。
 * 
 * Base type for components associated with blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 此组件所属的方块实例。
     * 
     * Block instance that this component pertains to.
     *
     */
    readonly block: Block;
}
