/* IMPORT */ import { ArgumentOutOfBoundsError } from '../../common';
/* IMPORT */ import { HudElement, HudVisibility, InvalidEntityError, RawMessage, RawMessageError, TitleDisplayOptions } from '..';

/**
 * 包含关于显示在屏幕上的用户界面元素的信息。
 *
 * Contains information about user interface elements that are showing up on the screen.
 * @seeExample setTitle.ts
 * @seeExample setTitleAndSubtitle.ts
 * @seeExample countdown.ts
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @remarks
     * 返回当前对此屏幕显示管理器对象的引用是否有效且可用。
     *
     * Returns true if the current reference to this screen display manager object is valid and functional.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    resetHudElementsVisibility(): void;
    /**
     * @remarks
     * 设置操作栏文本 —— 一段显示在标题下方和快捷栏上方的文本。
     *
     * Set the action bar text - a piece of text that displays beneath the title and above the hot-bar.
     *
     * @worldMutation
     *
     * @param text
     * 操作栏文本的新值。
     *
     * New value for the action bar text.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 设置平视显示器（HUD）特定元素的可见性。
     *
     * Sets visibility of a particular element of the heads up display (HUD).
     *
     * @worldMutation
     *
     * @param visible
     * 是否将 HUD 元素设置为不可见，或恢复为默认状态。
     *
     * Whether to set the HUD element to invisible, or to reset it back to its default.
     * @param hudElements
     * 可选的 HUD 元素列表，用于配置可见性。
     *
     * Optional list of HUD elements to configure visibility for.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks
     * 使标题显示在玩家的屏幕显示上。如果设置为空字符串将清除标题。可以选择指定额外的副标题以及淡入、停留和淡出时间。
     *
     * Will cause a title to show up on the player's on screen display. Will clear the title if set to empty string. You can optionally specify an additional subtitle as well as fade in, stay and fade out times.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @seeExample setTitle.ts
     * @seeExample setTitleAndSubtitle.ts
     * @seeExample countdown.ts
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * 如果副标题先前已通过 setTitle 方法显示，则更新副标题。
     *
     * Updates the subtitle if the subtitle was previously displayed via the setTitle method.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @seeExample countdown.ts
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}
