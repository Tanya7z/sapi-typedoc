import { build, type BuildFormat } from './build.js';
import { update } from './update.js';

const action = (process.argv[2] ?? '').toLowerCase();
if (action === 'build') {
    await build(true, ['html']);
} else if (action === 'build-original') {
    await build(false, ['html']);
} else if (action === 'build-md' || action === 'build-markdown') {
    await build(true, ['markdown']);
} else if (action === 'build-both') {
    await build(true, ['html', 'markdown'] satisfies BuildFormat[]);
} else if (action === 'update') {
    await update(false);
} else if (action === 'update-cached') {
    await update(true);
} else if (action === 'update-ci') {
    await update(false, { skipCheckout: true });
} else if (action === 'update-ci-cached') {
    await update(true, { skipCheckout: true });
} else {
    console.error(
        'Usage: cli.ts <build|build-md|build-both|build-original|update|update-cached|update-ci|update-ci-cached>'
    );
    process.exit(1);
}
