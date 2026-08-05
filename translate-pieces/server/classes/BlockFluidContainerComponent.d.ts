/* IMPORT */ import { BlockComponent, FluidType, ItemStack, ItemType, RGBA } from '..';

/**
 * 表示世界中方块的流体容器。用于像炼药锅这样的方块。
 * 
 * Represents the fluid container of a block in the world. Used
 * with blocks like cauldrons.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 流体容器的相对填充液位。
     * 
     * Relative fill level of the fluid container.
     *
     * @worldMutation
     *
     */
    fillLevel: number;
    /**
     * @remarks
     * 容器中流体的自定义颜色。
     * 
     * Custom color of the fluid in the container.
     *
     * @worldMutation
     *
     */
    fluidColor: RGBA;
    static readonly componentId = 'minecraft:fluid_container';
    /**
     * @remarks
     * 向流体中添加染料。染料颜色将与任何现有的自定义颜色合并。
     * 
     * Adds a dye to the fluid. The dye color is combined with any
     * existing custom color.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addDye(dye: ItemType): void;
    /**
     * @remarks
     * 获取容器中当前的流体类型。
     * 
     * Gets the current fluid type in the container.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getFluidType(): FluidType;
    /**
     * @remarks
     * 设置容器中当前的流体类型。
     * 
     * Sets the current fluid type in the container.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setFluidType(fluidType: FluidType): void;
    /**
     * @remarks
     * 在容器中设置一个药水物品。将容器的流体类型更改为药水。
     * 
     * Sets a potion item in the container. Changes the container's
     * fluid type to potion.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPotion(itemStack: ItemStack): void;
}
