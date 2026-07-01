/**
 * 指定如何处理 HUD 元素的可见性的枚举。
 *
 * Enumeration that specifies how to treat the visibility of a
 * HUD element.
 */
export enum HudVisibility {
    /**
     * @remarks
     * 指定此 HUD 元素应被隐藏。
     *
     * Specifies that this HUD element should be hidden.
     *
     */
    Hide = 0,
    /**
     * @remarks
     * 指定此 HUD 元素应重置为其默认状态（虽然大多数 HUD 元素是可见的，但某些 HUD 元素可以通过玩家设置隐藏。）
     *
     * Specifies that this HUD element should be reset to its
     * default state (while most HUD elements are visible, some HUD
     * elements can be hidden by the player via settings.)
     *
     */
    Reset = 1,
}
