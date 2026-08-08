import { createMcpExpressApp } from '@modelcontextprotocol/sdk/server/express.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createDocsServer } from './server.js';

const PORT = Number(process.env.PORT ?? process.env.MCP_PORT ?? 3921);
const HOST = process.env.MCP_HOST ?? '127.0.0.1';
const AUTH_TOKEN = process.env.MCP_AUTH_TOKEN?.trim();

function unauthorized(res: import('express').Response) {
  res.status(401).json({
    jsonrpc: '2.0',
    error: { code: -32001, message: 'Unauthorized' },
    id: null,
  });
}

async function main() {
  const app = createMcpExpressApp({
    host: HOST,
    allowedHosts: ['sapi.dogelake.cn', 'localhost', '127.0.0.1'],
  });

  app.get('/health', (_req, res) => {
    res.json({ ok: true, service: 'sapi-docs-mcp' });
  });

  const handler = async (
    req: import('express').Request,
    res: import('express').Response,
  ) => {
    if (AUTH_TOKEN) {
      const header = req.header('authorization') ?? '';
      const token = header.startsWith('Bearer ') ? header.slice(7) : header;
      if (token !== AUTH_TOKEN) {
        unauthorized(res);
        return;
      }
    }

    // 无状态：每个请求独立 server + transport，避免会话冲突
    const server = createDocsServer();
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });
    res.on('close', () => {
      void transport.close();
      void server.close();
    });
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  };

  app.all('/mcp', (req, res) => {
    void handler(req, res);
  });

  app.listen(PORT, HOST, () => {
    console.error(`sapi-docs-mcp http listening on http://${HOST}:${PORT}/mcp`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
