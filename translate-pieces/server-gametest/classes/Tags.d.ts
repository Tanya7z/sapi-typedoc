/**
 * 这些众所周知的标签可用于将不同测试分类到要运行的测试套件中。
 *
 * These well-known tags can be used to classify different
 * tests into suites to run.
 */
export class Tags {
    private constructor();
    /**
     * @remarks
     * 表示带有该标签的测试应属于所有测试套件。
     *
     * Indicates that the tagged test should be a part of all
     * suites.
     *
     */
    static readonly suiteAll = 'suite:all';
    /**
     * @remarks
     * 表示带有该标签的测试应属于内部（调试）测试套件。
     *
     * Indicates that the tagged test should be a part of an
     * internal (debug) test suite.
     *
     */
    static readonly suiteDebug = 'suite:debug';
    /**
     * @remarks
     * 表示带有该标签的测试应属于默认测试套件。
     *
     * Indicates that the tagged test should be a part of the
     * default test suite.
     *
     */
    static readonly suiteDefault = 'suite:default';
    /**
     * @remarks
     * 表示带有该标签的测试应属于已禁用测试套件。
     *
     * Indicates that the tagged test should be a part of a suite
     * of disabled tests.
     *
     */
    static readonly suiteDisabled = 'suite:disabled';
    static readonly suiteNextUpdate = 'suite:nextupdate';
}
