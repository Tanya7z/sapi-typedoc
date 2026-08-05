import { build } from './build.js';
import { update } from './update.js';

const action = (process.argv[2] ?? '').toLowerCase();
if (action === 'build' || action === 'build-translate') {
    await build(true);
} else if (action === 'build-original') {
    await build(false);
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
        'Usage: cli.ts <build|build-original|update|update-cached|update-ci|update-ci-cached>'
    );
    process.exit(1);
}
