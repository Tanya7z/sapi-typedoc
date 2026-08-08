import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createDocsServer } from './server.js';

async function main() {
  const server = createDocsServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
