import {
  findExamples,
  findSymbols,
  formatSymbol,
  getApiIndex,
  getExamplesIndex,
  getVersionMap,
  getVersionsIndex,
  searchByTag,
} from '../src/api-index.js';
import { fetchPageMarkdown, getIndex } from '../src/client.js';
import { resolveVersions } from '../src/resolve-versions.js';
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

const versionMap = await getVersionMap();
const resolved = resolveVersions(versionMap, {
  gameVersion: '1.26.42',
  track: 'stable',
});
console.log('resolve_versions', resolved.aliases, 'minEngine', resolved.minEngineVersion);
if (resolved.aliases.server !== '2.9.0' && resolved.aliases.server !== '2.10.0') {
  // 表数据随 npm 更新；仅保证能解析出 server
  if (!resolved.aliases.server) throw new Error('resolve_versions missing server');
}

const scaffold = buildScriptProject(
  versions,
  {
    language: 'ts',
    packName: 'smoke_pack',
    modules: ['server', 'server-ui'],
    gameVersion: '1.26.42',
    track: 'stable',
  },
  versionMap,
);
const manifestFile = scaffold.files.find((f) => f.path.endsWith('manifest.json'));
console.log(
  'scaffold files',
  scaffold.files.map((f) => f.path),
);
console.log('scaffold manifest snippet', manifestFile?.content.slice(0, 400));
console.log('smoke ok');
