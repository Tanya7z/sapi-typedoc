/* IMPORT */ import { BlockComponent, CustomComponentParameters } from '..';

/**
 * 方块上自定义组件的一个实例。
 * 
 * An instance of a custom component on a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentInstance extends BlockComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}
