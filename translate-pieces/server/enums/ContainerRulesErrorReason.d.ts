/* IMPORT */ import { ContainerRules } from '..';

/**
 * 抛出 {@link @minecraft/server.ContainerRulesError} 的原因。
 *
 * Reasons that the {@link
 * @minecraft/server.ContainerRulesError} was thrown.
 */
export enum ContainerRulesErrorReason {
    /**
     * @remarks
     * 当尝试添加已在 {@link ContainerRules.bannedItems} 中定义的物品时抛出。
     *
     * Thrown when trying to add item that was defined in {@link
     * ContainerRules.bannedItems}.
     *
     */
    BannedItem = 'BannedItem',
    /**
     * @remarks
     * 当尝试将带有 `Storage Item` 组件的物品添加到 {@link ContainerRules.allowNestedStorageItems} 设置为 `false` 的容器时抛出。
     *
     * Thrown when trying to add item with `Storage Item` component
     * to container with {@link
     * ContainerRules.allowNestedStorageItems} set to false.
     *
     */
    NestedStorageItem = 'NestedStorageItem',
    /**
     * @remarks
     * 当尝试添加未在非空 {@link ContainerRules.allowedItems} 中定义的物品时抛出。
     *
     * Thrown when trying to add item not defined in non-empty
     * {@link ContainerRules.allowedItems}.
     *
     */
    NotAllowedItem = 'NotAllowedItem',
    /**
     * @remarks
     * 当尝试添加物品导致容器重量超过 {@link ContainerRules.weightLimit} 时抛出。
     *
     * Thrown when trying to add item that pushed the containers
     * weight over the {@link ContainerRules.weightLimit}.
     *
     */
    OverWeightLimit = 'OverWeightLimit',
    /**
     * @remarks
     * 当尝试添加由 `Storage Weight Modifier` 组件定义为零重量的物品到具有定义的 {@link ContainerRules.weightLimit} 的容器时抛出。
     *
     * Thrown when trying to add item with zero weight defined by
     * the `Storage Weight Modifier` component to container with a
     * defined {@link ContainerRules.weightLimit}
     *
     */
    ZeroWeightItem = 'ZeroWeightItem',
}
