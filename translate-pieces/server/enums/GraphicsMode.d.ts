/**
 * 描述客户端的图形模式。由 {@link Player.graphicsMode} 使用。
 *
 * Describes the graphics mode of a client. Used by {@link
 * Player.graphicsMode}
 */
export enum GraphicsMode {
    /**
     * @remarks
     * 指代延迟技术预览图形模式设置的图形模式。
     *
     * A graphics mode that refers to the Deferred Technical
     * Preview graphics mode setting.
     *
     */
    Deferred = 'Deferred',
    /**
     * @remarks
     * 指代精美图形模式设置的图形模式。在此设置下，大多数特殊图形效果都已打开。
     *
     * A graphics mode that refers to the Fancy graphics mode
     * setting. Most special graphics effects are turned on in this
     * setting.
     *
     */
    Fancy = 'Fancy',
    /**
     * @remarks
     * 指代光线追踪图形模式设置的图形模式。此设置启用光线追踪。
     *
     * A graphics mode that refers to the Ray Traced graphics mode
     * setting. This setting enables ray tracing.
     *
     */
    RayTraced = 'RayTraced',
    /**
     * @remarks
     * 指代简单图形模式设置的图形模式。在此设置下，大多数图形效果都已关闭。
     *
     * A graphics mode that refers to the Simple graphics mode
     * setting. Most graphics effects are turned off in this
     * setting.
     *
     */
    Simple = 'Simple',
}
