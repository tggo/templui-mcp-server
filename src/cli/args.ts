import { logError, logInfo } from '../utils/logger.js';

interface ParsedArgs {
  githubApiKey?: string;
  useCachedDocs?: boolean;
  logLevel?: string;
  help?: boolean;
}

function showHelp(): void {
  console.log(`
TemplUI MCP Server - Model Context Protocol server for TemplUI components

Usage:
  templui-mcp-server [options]

Options:
  --github-api-key <token>    GitHub personal access token for higher rate limits
  --use-cached-docs          Use cached documentation instead of fetching from GitHub
  --log-level <level>        Set log level (error, warn, info, debug) [default: info]
  --help                     Show this help message

Environment Variables:
  GITHUB_PERSONAL_ACCESS_TOKEN  GitHub token (alternative to --github-api-key)
  TEMPLUI_CACHE_DIR            Directory for caching data [default: ~/.templui-mcp]
  LOG_LEVEL                    Log level [default: info]

Examples:
  templui-mcp-server
  templui-mcp-server --github-api-key ghp_xxxxxxxxxxxx
  templui-mcp-server --use-cached-docs --log-level debug

For more information, visit: https://github.com/tggo/templui-mcp-server
`);
}

export function parseArgs(): ParsedArgs {
  const args = process.argv.slice(2);
  const result: ParsedArgs = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '--github-api-key':
        if (i + 1 < args.length) {
          result.githubApiKey = args[++i];
          logInfo('GitHub API key provided via CLI argument');
        } else {
          logError('--github-api-key requires a token value', new Error('Missing token'));
          process.exit(1);
        }
        break;
        
      case '--use-cached-docs':
        result.useCachedDocs = true;
        logInfo('Using cached documentation');
        break;
        
      case '--log-level':
        if (i + 1 < args.length) {
          const level = args[++i];
          if (['error', 'warn', 'info', 'debug'].includes(level)) {
            result.logLevel = level;
            logInfo(`Log level set to: ${level}`);
          } else {
            logError(`Invalid log level: ${level}`, new Error('Invalid log level'));
            process.exit(1);
          }
        } else {
          logError('--log-level requires a value', new Error('Missing log level'));
          process.exit(1);
        }
        break;
        
      case '--help':
      case '-h':
        result.help = true;
        break;
        
      default:
        if (arg.startsWith('-')) {
          logError(`Unknown option: ${arg}`, new Error('Unknown option'));
          console.log('Use --help for available options');
          process.exit(1);
        }
        break;
    }
  }

  if (result.help) {
    showHelp();
    process.exit(0);
  }

  // Check environment variables as fallbacks
  if (!result.githubApiKey && process.env.GITHUB_PERSONAL_ACCESS_TOKEN) {
    result.githubApiKey = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
    logInfo('GitHub API key loaded from environment variable');
  }

  if (!result.logLevel && process.env.LOG_LEVEL) {
    result.logLevel = process.env.LOG_LEVEL;
  }

  return result;
}