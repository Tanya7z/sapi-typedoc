/* IMPORT */ import { ItemComponent } from '..';

/**
 * 当存在此组件时，若堆肥概率处于 [1, 100] 区间内，该物品可以在堆肥桶中进行堆肥。
 *
 * When present, the item can be composted in the composter
 * block if the composting chance is in the range [1 - 100].
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 该物品在堆肥桶中进行堆肥并产生堆肥层的百分比概率。注意，对于原版中可堆肥但并未使用该堆肥组件的物品，此 API 同样会返回其堆肥概率。
     *
     * This is the percent chance of the item composting in the
     * composter block and generating a compost layer. Note this
     * api will also return the composting chance for vanilla items
     * that are compostable but do not use the compostable item
     * component.
     *
     * @throws
     * Throws if value outside the range [1 - 100]
     */
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}
