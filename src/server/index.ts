import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { setupHandlers } from "./handler.js";
import { createServer } from "./createServer.js";
import { readVersion } from "./version.js";
import { parseArgs } from "../cli/args.js";
import { setLogLevel, logError, logInfo, logWarning, logDebug } from "../utils/logger.js";
import { GitHubClient } from "../utils/github-client.js";
import { DocumentationParser } from "../utils/documentation.js";
import { initializeTools } from "../tools/index.js";
import { cache } from "../utils/cache.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function start() {
  try {
    logInfo("Starting TemplUI MCP Server...");

    // Parse command line arguments
    const args = parseArgs();

    // Set log level if specified
    if (args.logLevel) {
      setLogLevel(args.logLevel);
      logInfo(`Log level set to: ${args.logLevel}`);
    }

    // Initialize GitHub client
    const githubClient = new GitHubClient(args.githubApiKey);
    if (args.githubApiKey) {
      logInfo("GitHub API configured with provided token");
    } else {
      logWarning("No GitHub API key provided. Rate limited to 60 requests/hour.");
      logInfo("For higher rate limits, set GITHUB_PERSONAL_ACCESS_TOKEN or use --github-api-key");
    }

    // Initialize documentation parser
    // Try multiple possible paths for documentation
    let docsPath = process.env.TEMPLUI_DOCS_PATH;
    
    if (!docsPath) {
      // Try different paths based on where we're running from
      const possiblePaths = [
        path.join(__dirname, '../../samples/templui-site-doc'), // In build/server, go up to project root
        path.join(__dirname, '../samples/templui-site-doc'),    // In build, go to samples
        './samples/templui-site-doc',                           // Relative path
        path.join(process.cwd(), 'samples/templui-site-doc')    // From current working directory
      ];
      
      for (const testPath of possiblePaths) {
        if (fs.existsSync(testPath)) {
          docsPath = testPath;
          break;
        }
        logDebug(`Documentation path not found: ${testPath}`);
      }
    }
    
    if (!docsPath) {
      docsPath = './samples/templui-site-doc'; // Fallback
      logWarning(`No documentation directory found, using fallback: ${docsPath}`);
    }
    
    const documentationParser = new DocumentationParser(docsPath);
    logInfo(`Documentation parser initialized with path: ${docsPath}`);

    // Initialize tools with dependencies
    initializeTools(githubClient, documentationParser);
    logInfo("Tools initialized with GitHub client and documentation parser");

    // Perform cache cleanup
    await cache.cleanup();
    const cacheStats = await cache.getStats();
    logInfo(`Cache initialized - Memory: ${cacheStats.memoryEntries}, Disk: ${cacheStats.diskEntries}, Size: ${(cacheStats.totalSize / 1024).toFixed(1)}KB`);

    // Create and configure server
    const version = await readVersion("1.0.5");
    const server = createServer(version);
    
    setupHandlers(server);

    // Start server with stdio transport
    const transport = new StdioServerTransport();
    logInfo("Transport initialized: stdio");

    await server.connect(transport);
    logInfo(`TemplUI MCP Server v${version} started successfully`);
    logInfo("Server is ready to handle requests from MCP clients");
    
    // Log usage instructions
    logInfo("Available tools:");
    logInfo("  - get_component: Get component source code");
    logInfo("  - get_component_demo: Get component examples");
    logInfo("  - get_component_docs: Get component documentation");
    logInfo("  - get_component_javascript: Get component JavaScript");
    logInfo("  - get_component_metadata: Get component metadata");
    logInfo("  - list_components: List all components");

  } catch (error) {
    logError("Failed to start TemplUI MCP server", error as Error);
    
    // Provide helpful error messages for common issues
    if (error instanceof Error) {
      if (error.message.includes('ENOENT') && error.message.includes('templui-site-doc')) {
        logError("Documentation directory not found. Please ensure samples/templui-site-doc exists.");
        logInfo("You can clone documentation from: https://github.com/tggo/templui-mcp-server");
      }
      
      if (error.message.includes('rate limit')) {
        logError("GitHub API rate limit exceeded. Please provide a GitHub token with --github-api-key");
      }
    }
    
    process.exit(1);
  }
}