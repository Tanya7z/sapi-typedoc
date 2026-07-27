/* IMPORT */ import { RawMessage, TicksPerSecond } from '..';

/**
 * 包含显示标题和可选副标题的额外选项。
 *
 * Contains additional options for displaying a title and
 * optional subtitle.
 */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * 标题和副标题的淡入持续时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     *
     * Fade-in duration for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     *
     */
    fadeInDuration: number;
    /**
     * @remarks
     * 标题和副标题的淡出持续时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     *
     * Fade-out time for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     *
     */
    fadeOutDuration: number;
    /**
     * @remarks
     * 标题和副标题的停留持续时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     *
     * Amount of time for the title and subtitle to stay in place,
     * in ticks. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     */
    stayDuration: number;
    /**
     * @remarks
     * 可选的副标题文本。
     *
     * Optional subtitle text.
     *
     */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}
