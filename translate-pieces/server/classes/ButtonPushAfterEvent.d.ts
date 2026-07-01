/* IMPORT */ import { BlockEvent, Entity } from '..';

/**
 * 包含与按钮按压变化相关的信息。
 * @seeExample buttonPushEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 触发按钮按压的可选来源。
     * 
     * Optional source that triggered the button push.
     *
     */
    readonly source: Entity;
}
