/* IMPORT */ import { ArgumentOutOfBoundsError } from '../../common';
/* IMPORT */ import { EntityComponent, InvalidEntityError } from '..';

/**
 * 这是任何以数字为中心、可以定义最小值、最大值和默认值的实体组件的基类抽象类。
 *
 * This is a base abstract class for any entity component that
 * centers around a number and can have a minimum, maximum, and
 * default defined value.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实例当前属性的值。
     *
     * Current value of this attribute for this instance.
     *
     * @throws This property can throw when used.
     */
    readonly currentValue: number;
    /**
     * @remarks
     * 返回此属性的默认定义值。
     *
     * Returns the default defined value for this attribute.
     *
     * @throws This property can throw when used.
     */
    readonly defaultValue: number;
    /**
     * @remarks
     * 返回给定任何其他环境组件或因素后此属性的有效最大值。
     *
     * Returns the effective max of this attribute given any other
     * ambient components or factors.
     *
     * @throws This property can throw when used.
     */
    readonly effectiveMax: number;
    /**
     * @remarks
     * 返回给定任何其他环境组件或因素后此属性的有效最小值。
     *
     * Returns the effective min of this attribute given any other
     * ambient components or factors.
     *
     * @throws This property can throw when used.
     */
    readonly effectiveMin: number;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的默认值。
     *
     * Resets the current value of this attribute to the defined
     * default value.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的最大值。
     *
     * Resets the current value of this attribute to the maximum
     * defined value.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的最小值。
     *
     * Resets the current value of this attribute to the minimum
     * defined value.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * 设置此属性的当前值。
     *
     * Sets the current value of this attribute.
     *
     * @worldMutation
     *
     * @throws
     * 如果值超出范围，将抛出 ArgumentOutOfBounds Error。
     *
     * If the value is out of bounds, an ArgumentOutOfBounds Error
     * is thrown.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setCurrentValue(value: number): boolean;
}
