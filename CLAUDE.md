# TemplUI MCP Server - Developer Guide

## Overview
TemplUI MCP Server is a Model Context Protocol (MCP) server that provides AI assistants with comprehensive access to TemplUI components. It combines GitHub API integration with local documentation parsing to deliver component source code, examples, documentation, and metadata for building Go applications with the templ templating language.

## Key Technologies
- **Node.js 18+** - Runtime environment
- **TypeScript 5.7+** - Type-safe development
- **Model Context Protocol SDK** - MCP client/server communication
- **Axios** - HTTP client for GitHub API
- **Winston** - Structured logging
- **Zod** - Runtime type validation

## Development Commands

### Primary Development Workflow
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test the build
./test-build.sh

# Start the server
npm start

# Development with rebuild
npm run dev
```

### Build & Distribution
```bash
# Clean build directory
npm run clean

# Build TypeScript
npm run build

# Prepare for publishing (runs clean, build, and makes executable)
npm run prepublishOnly

# Publish to npm
npm publish --access public
```

## Architecture Overview

### Directory Structure
```
templui-mcp-server/
├── src/
│   ├── index.ts              # CLI entry point
│   ├── cli/                  # Command-line interface
│   │   └── args.ts          # Argument parsing and help
│   ├── server/              # MCP server implementation
│   │   ├── index.ts         # Server startup and initialization
│   │   ├── handler.ts       # Request handlers for MCP protocol
│   │   ├── createServer.ts  # Server factory
│   │   ├── capabilities.ts  # Server capabilities definition
│   │   └── version.ts       # Version management
│   ├── tools/               # MCP tool implementations
│   │   ├── index.ts         # Tool registry and initialization
│   │   ├── get-component.ts # Get component source code
│   │   ├── get-component-demo.ts # Get component examples
│   │   ├── get-component-docs.ts # Get component documentation
│   │   ├── get-component-javascript.ts # Get component JS
│   │   ├── get-component-metadata.ts # Get component metadata
│   │   └── list-components.ts # List all components
│   ├── utils/               # Shared utilities
│   │   ├── github-client.ts # GitHub API client
│   │   ├── documentation.ts # Documentation parser
│   │   ├── cache.ts        # Caching system
│   │   ├── validation.ts   # Parameter validation
│   │   └── logger.ts       # Logging utilities
│   └── data/               # Static data
│       └── components-list.ts # TemplUI components metadata
├── build/                   # Compiled JavaScript (generated)
├── samples/                 # Sample data (excluded from git)
├── package.json
├── tsconfig.json
├── test-build.sh           # Build validation script
└── README.md
```

### MCP Server Architecture

**Server Components:**
1. **CLI Interface** - Command-line argument parsing and help
2. **MCP Protocol Handler** - Request/response handling for MCP clients
3. **Tool Registry** - Registration and execution of MCP tools
4. **GitHub Client** - API integration with TemplUI repository
5. **Documentation Parser** - Markdown documentation processing
6. **Caching Layer** - Performance optimization with disk/memory cache

**Tool Pattern:**
Each MCP tool follows a consistent pattern:
```typescript
// Tool handler function
export async function handleToolName({ param }: { param: string }) {
  try {
    // 1. Check cache first
    const cacheKey = `tool-name:${param}`;
    const cached = await cache.get(cacheKey);
    if (cached) return { content: [{ type: "text", text: cached }] };

    // 2. Fetch/process data
    const result = await processData(param);
    
    // 3. Cache and return
    await cache.set(cacheKey, result);
    return { content: [{ type: "text", text: result }] };
  } catch (error) {
    logError(`Tool failed: ${param}`, error as Error);
    throw new Error(`Tool failed: ${error.message}`);
  }
}

// Tool schema for validation
export const schema = {
  param: {
    type: 'string',
    description: 'Parameter description'
  }
};
```

### GitHub Integration

**Repository Structure:**
- **Owner**: `templui`
- **Repository**: `templui`
- **Branch**: `main`
- **Components Path**: `internal/components/`
- **Showcase Path**: `internal/ui/showcase/`

**API Strategy:**
```typescript
class GitHubClient {
  // Component source (.templ files)
  async getComponentSource(name: string): Promise<string>
  
  // Component JavaScript (.js files)  
  async getComponentJavaScript(name: string): Promise<string | null>
  
  // Demo files from showcase directory
  async getComponentDemo(name: string): Promise<string[]>
  
  // Repository structure browsing
  async getComponentsList(): Promise<string[]>
  async getDirectoryStructure(path: string): Promise<any>
}
```

**Rate Limiting:**
- **No Token**: 60 requests/hour
- **With Token**: 5,000 requests/hour
- **Caching**: Reduces API calls significantly

### Documentation System

**Source Formats:**
- **Markdown files** from templui.io documentation
- **Component metadata** from static definitions
- **Live code** from GitHub repository

**Processing Pipeline:**
```typescript
class DocumentationParser {
  // Parse component documentation from markdown
  async getComponentDocs(name: string): Promise<ComponentDocumentation>
  
  // Extract component metadata
  async getComponentMetadata(name: string): Promise<any>
  
  // List documented components
  async getAvailableComponentDocs(): Promise<string[]>
}
```

### Caching Architecture

**Two-Level Cache:**
1. **Memory Cache** - Fast access for current session
2. **Disk Cache** - Persistent storage between sessions

**Cache Strategy:**
```typescript
class Cache {
  async get<T>(key: string): Promise<T | null>
  async set<T>(key: string, data: T, ttl?: number): Promise<void>
  async has(key: string): Promise<boolean>
  async delete(key: string): Promise<void>
  async clear(): Promise<void>
  async cleanup(): Promise<void>  // Remove expired entries
}
```

**Cache Keys:**
- `component-source:${name}` - Component .templ files
- `component-demo:${name}` - Component showcase examples
- `component-docs:${name}` - Component documentation
- `component-javascript:${name}` - Component JS files
- `component-metadata:${name}` - Component metadata
- `list-components:${category || 'all'}` - Component lists

## Available MCP Tools

### 1. get_component
**Purpose**: Get component source code (.templ file) with helpful comments
**Parameters**: `{ componentName: string }`
**Returns**: Commented Go templ source code
**Cache**: 30 minutes

### 2. get_component_demo
**Purpose**: Get example usage from showcase directory
**Parameters**: `{ componentName: string }`
**Returns**: Multiple demo examples with explanatory comments
**Cache**: 30 minutes

### 3. get_component_docs
**Purpose**: Get formatted component documentation
**Parameters**: `{ componentName: string }`
**Returns**: Markdown documentation with installation and API details
**Cache**: 30 minutes

### 4. get_component_javascript
**Purpose**: Get client-side JavaScript for interactive components
**Parameters**: `{ componentName: string }`
**Returns**: Commented JavaScript code or explanation if none exists
**Cache**: 30 minutes

### 5. get_component_metadata
**Purpose**: Get detailed component information
**Parameters**: `{ componentName: string }`
**Returns**: JSON metadata including props, category, features
**Cache**: 30 minutes

### 6. list_components
**Purpose**: List all available components, optionally by category
**Parameters**: `{ category?: string }`
**Returns**: Formatted list of components with descriptions
**Cache**: 1 hour

## Development Patterns & Conventions

### Error Handling
```typescript
// Consistent error handling pattern
try {
  const result = await operation();
  return { content: [{ type: "text", text: result }] };
} catch (error) {
  logError(`Operation failed: ${context}`, error as Error);
  throw new Error(`Operation failed: ${error instanceof Error ? error.message : String(error)}`);
}
```

### Validation
```typescript
// Parameter validation with Zod
const schema = z.object({
  componentName: z.string().min(1, "Component name is required")
});

const validated = schema.parse(params);
const sanitized = sanitizeComponentName(validated.componentName);
```

### Logging
```typescript
// Structured logging with context
logInfo(`Processing component: ${name}`);
logDebug(`Cache hit for: ${key}`, { metadata });
logError(`Failed to fetch: ${name}`, error as Error);
```

## Configuration

### CLI Arguments
```bash
--github-api-key <token>     # GitHub API token for higher limits
--use-cached-docs           # Use cached documentation only
--log-level <level>         # error, warn, info, debug
--help                      # Show help message
```

### Environment Variables
```bash
GITHUB_PERSONAL_ACCESS_TOKEN  # Alternative to --github-api-key
TEMPLUI_DOCS_PATH            # Path to documentation files
TEMPLUI_CACHE_DIR            # Cache directory [~/.templui-mcp]
LOG_LEVEL                    # Logging level [info]
```

### MCP Client Configuration

**Claude Desktop** (`claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "templui": {
      "command": "node",
      "args": ["/path/to/templui-mcp-server/build/index.js"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    }
  }
}
```

**VS Code Continue** (`.continue/config.json`):
```json
{
  "mcpServers": [
    {
      "name": "templui",
      "command": "templui-mcp-server",
      "args": ["--github-api-key", "ghp_your_token_here"]
    }
  ]
}
```

## Component Data

### Supported Components (42)
**Categories:**
- **Form**: button, input, textarea, checkbox, radio, selectbox, datepicker, timepicker, inputotp, tagsinput, form, label, switch, rating, slider
- **Layout**: card, separator, aspectratio, accordion, table, collapsible, sheet, sidebar
- **Navigation**: breadcrumb, pagination, tabs
- **Overlay**: dialog, dropdown, popover, tooltip
- **Feedback**: alert, toast, progress, skeleton, copybutton
- **Display**: avatar, badge, icon, code, chart, carousel

**JavaScript-enabled Components:**
Components with client-side functionality include: avatar, calendar, carousel, chart, code, collapsible, copybutton, datepicker, dialog, dropdown, input, inputotp, label, popover, progress, rating, selectbox, sheet, sidebar, slider, switch, tabs, tagsinput, textarea, timepicker, toast

## Build & Deployment

### Build Process
1. **TypeScript Compilation** - `tsc` compiles src/ to build/
2. **Executable Setup** - `chmod +x build/index.js` for CLI usage
3. **Validation** - `test-build.sh` verifies build integrity

### Publishing to npm
```bash
# 1. Login to npm
npm login

# 2. Publish (runs prepublishOnly script automatically)
npm publish --access public

# 3. Verify publication
npm info templui-mcp-server
```

### Local Development
```bash
# Link for global access during development
npm link
templui-mcp-server --help

# Or run directly
node build/index.js --github-api-key ghp_token
```

## Performance Considerations

### Caching Strategy
- **Memory cache** for active session data
- **Disk cache** for persistence across sessions
- **30-minute TTL** for component data
- **Automatic cleanup** of expired entries

### API Optimization  
- **Rate limit awareness** with GitHub token support
- **Circuit breaker pattern** for external calls
- **Batch operations** where possible
- **Error recovery** with graceful degradation

### Resource Usage
- **Minimal memory footprint** with lazy loading
- **Efficient JSON parsing** with streaming
- **Disk cache size management** with cleanup

## Troubleshooting

### Common Issues

1. **TypeScript Build Errors**
   ```bash
   # Clear and rebuild
   npm run clean
   npm install
   npm run build
   ```

2. **GitHub Rate Limiting**
   ```bash
   # Add GitHub token
   export GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token
   templui-mcp-server
   ```

3. **Cache Issues**
   ```bash
   # Clear cache
   rm -rf ~/.templui-mcp/cache
   ```

4. **Permission Errors**
   ```bash
   # Make executable
   chmod +x build/index.js
   ```

### Debug Mode
```bash
# Enable detailed logging
templui-mcp-server --log-level debug --github-api-key ghp_token
```

This architecture provides a robust, scalable, and maintainable MCP server for TemplUI component integration with comprehensive caching, error handling, and type safety.