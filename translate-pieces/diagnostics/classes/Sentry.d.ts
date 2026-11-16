/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { SentryAlreadyInitializedError, SentryCaptureContext, SentryEventLevel, SentryOptions, SentryUninitializedError } from '..';

/**
 * A class that allows hooking up reporting to Sentry.  See
 * https://sentry.io/ for more information.
 */
export class Sentry {
    private constructor();
    /**
     * @remarks
     * Adds a breadcrumb to the next Sentry error reported.  This
     * can be useful for understanding a "trail" of events leading
     * up to an error.  See Sentry documentation for more details:
     * https://docs.sentry.io/product/issues/issue-details/breadcrumbs/
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @param message
     * The message to add to the breadcrumb.
     * @param category
     * The category of the breadcrumb.
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    addBreadcrumb(level: SentryEventLevel, message: string, category?: string): void;
    /**
     * @remarks
     * Adds a tag to the Sentry session.  See Sentry documentation
     * for more details:
     * https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    addTag(name: string, value: string): void;
    /**
     * @remarks
     * Captures an exception event and send it to Sentry. Note that
     * you can pass not only `Error` objects, but also other types
     * of thrown objects - in that case, an attempt will be made to
     * serialize the object for you, and stack traces are likely to
     * be missing.  See Sentry documentation for more details:
     * https://docs.sentry.io/platforms/javascript/apis/#capturing-events
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    captureException(exception: unknown, captureContext?: SentryCaptureContext): void;
    /**
     * @remarks
     * Gets all contexts that have been added to the Sentry
     * session.  See Sentry documentation for more details:
     * https://develop.sentry.dev/sdk/foundations/envelopes/event-payloads/contexts/
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @returns
     * All contexts that have been added to the session, keyed by
     * context name.
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    getContexts(): Record<string, Record<string, boolean | number | string>>;
    /**
     * @remarks
     * Gets the list of all session tags.  See Sentry documentation
     * for more details:
     * https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    getTags(): Record<string, string>;
    /**
     * @remarks
     * Initializes Sentry for use.  This must be successfully
     * called before any other Sentry functions are called.
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link SentryAlreadyInitializedError}
     */
    init(options: SentryOptions): void;
    /**
     * @remarks
     * Removes a tag to the Sentry session.  See Sentry
     * documentation for more details:
     * https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    removeTag(name: string): void;
    /**
     * @remarks
     * Sets a named context on the Sentry session.  Contexts are
     * sent with every subsequent Sentry event and are useful for
     * attaching structured data about the current state of the
     * game or script.  If a context with the same name already
     * exists, it is replaced.  If no context value is provided,
     * the named context is removed.  See Sentry documentation for
     * more details:
     * https://develop.sentry.dev/sdk/foundations/envelopes/event-payloads/contexts/
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     * @param name
     * The name of the context.
     * @param context
     * The key/value data of the context, or undefined to remove
     * the context.  Include a `type` key to specify the Sentry
     * context type when it differs from the context name.
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    setContext(name: string, context?: Record<string, boolean | number | string>): void;
}
