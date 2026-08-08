import { fetchPageMarkdown, getIndex } from '../src/client.js';
import { searchEntries } from '../src/search.js';

const idx = await getIndex();
console.log('modules', idx.modules.length, 'entries', idx.entries.length);
const hits = searchEntries(idx.entries, 'Player', { limit: 3 });
console.log(
  'hits',
  hits.map((h) => h.path),
);
const page = await fetchPageMarkdown(hits[0]?.path ?? '/server/classes/Player');
console.log('page', page.path, 'len', page.markdown.length);
