import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { serverCapabilities } from "./capabilities.js";

export function createServer(version: string): Server {
  const server = new Server(
    {
      name: "templui-mcp-server",
      version: version,
    },
    {
      capabilities: serverCapabilities,
    }
  );

  return server;
}