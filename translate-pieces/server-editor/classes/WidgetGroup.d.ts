/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { InvalidWidgetGroupError, Widget, WidgetCreateOptions } from '..';

export class WidgetGroup {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetGroupError}
     */
    readonly selectedWidgetCount: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    visible: boolean;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    visibleBounds: boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    createWidget(location: Vector3, options?: WidgetCreateOptions): Widget;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    delete(): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    deselectAllWidgets(): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    selectAllWidgets(): void;
}
