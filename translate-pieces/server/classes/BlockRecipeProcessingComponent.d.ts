/* IMPORT */ import { ArgumentOutOfBoundsError, UnsupportedFunctionalityError } from '../../common';
/* IMPORT */ import { BlockComponent, InvalidBlockComponentError, ItemStack } from '..';

/**
 * @beta
 * Represents a block component that provides access to recipe
 * processing inputs and output.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecipeProcessingComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * The number of addressable input slots for getInputItem,
     * setInputItem, setInputSlotEnabled, and getInputSlotEnabled.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidBlockComponentError}
     */
    readonly inputSlotCount: number;
    static readonly componentId = 'minecraft:recipe_processing';
    /**
     * @remarks
     * Gets the item in the provided input slot.
     *
     * @param slot
     * The zero-based input slot index.
     * @returns
     * The item stack in the input slot, or undefined if the slot
     * is empty.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidBlockComponentError}
     */
    getInputItem(slot: number): ItemStack | undefined;
    /**
     * @remarks
     * Gets whether an input slot is enabled for recipe processing.
     *
     * @param slot
     * The zero-based input slot index.
     * @returns
     * Whether the input slot is enabled.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    getInputSlotEnabled(slot: number): boolean;
    /**
     * @remarks
     * Gets the item produced by the current recipe processing
     * inputs.
     *
     * @returns
     * The output item stack, or undefined if the current inputs do
     * not produce an item.
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getOutputItem(): ItemStack | undefined;
    /**
     * @remarks
     * Sets or clears an item in an input slot.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     * @param slot
     * The zero-based input slot index.
     * @param item
     * The item stack to place in the slot, or undefined to clear
     * the slot.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidBlockComponentError}
     */
    setInputItem(slot: number, item?: ItemStack): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    setInputSlotEnabled(slot: number, enabled: boolean): void;
}
