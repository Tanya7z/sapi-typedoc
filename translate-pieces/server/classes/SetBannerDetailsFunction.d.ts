/* IMPORT */ import { BannerPattern, LootItemFunction } from '..';

/**
 * 修改掉落旗帜类型的战利品物品函数。
 *
 * Loot item function that modifies the type of a banner that
 * drops.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBannerDetailsFunction extends LootItemFunction {
    private constructor();
    /**
     * @beta
     * @remarks
     * 掉落旗帜的基础颜色。
     *
     * The base color for the dropped banner.
     *
     */
    readonly baseColor: string;
    /**
     * @beta
     * @remarks
     * 用于装饰旗帜的 {@link BannerPattern} 对象数组，包括颜色和图案类型。
     *
     * An array of {@link BannerPattern} objects used to decorate
     * the banner, including color and pattern type.
     *
     */
    readonly patterns: BannerPattern[];
    /**
     * @remarks
     * 掉落的旗帜类型。
     *
     * The type of banner to drop.
     *
     */
    readonly 'type': number;
}
