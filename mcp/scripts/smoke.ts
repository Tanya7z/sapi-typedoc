import {
  findExamples,
  findSymbols,
  formatSymbol,
  getApiIndex,
  getExamplesIndex,
  getVersionsIndex,
  searchByTag,
} from '../src/api-index.js';
import { fetchPageMarkdown, getIndex } from '../src/client.js';
import { buildScriptProject } from '../src/scaffold.js';
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

const api = await getApiIndex();
console.log('api symbols', api.symbolCount);
const playerHits = findSymbols(api, { name: 'Player', module: 'server' });
const player = playerHits[0];
if (!player) throw new Error('Player not found in api-index');
if (player.name !== 'Player') throw new Error(`expected Player, got ${player.name}`);
console.log('get_symbol Player members', player.members.length);
console.log(formatSymbol(player, { member: 'sendMessage' }).slice(0, 500));

const tagged = searchByTag(api, 'event', { module: 'server', limit: 5 });
console.log(
  'search_by_tag event',
  tagged.map((s) => s.name),
);

const examples = await getExamplesIndex();
const ex = findExamples(examples, { symbol: 'Player', module: 'server', limit: 2 });
console.log(
  'examples',
  ex.map((e) => e.fileName),
);

const versions = await getVersionsIndex();
console.log('versions packages', Object.keys(versions.packages).length);
const scaffold = buildScriptProject(versions, {
  language: 'ts',
  packName: 'smoke_pack',
  modules: ['server'],
});
console.log(
  'scaffold files',
  scaffold.files.map((f) => f.path),
);
console.log('smoke ok');
