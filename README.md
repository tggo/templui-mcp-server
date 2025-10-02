# TemplUI MCP Server

[![npm version](https://badge.fury.io/js/templui-mcp-server.svg)](https://badge.fury.io/js/templui-mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **🚀 The fastest way to integrate TemplUI components into your AI workflow**

A Model Context Protocol (MCP) server that provides AI assistants with comprehensive access to [TemplUI](https://templui.io) components. Get component source code, documentation, examples, and metadata for building Go applications with the templ templating language.

## ✨ Key Features

- **🎯 Go Templ Support** - Native support for Go's templ templating language
- **📦 Component Source Code** - Latest TemplUI component implementations
- **🎨 Component Demos** - Example implementations and usage patterns  
- **📋 Documentation Access** - Complete component documentation from templui.io
- **🔧 JavaScript Integration** - Client-side functionality for interactive components
- **📊 Metadata Extraction** - Component properties, variants, and configuration details
- **⚡ Smart Caching** - Efficient GitHub API integration with rate limit handling

## 🚀 Quick Start

```bash
# Basic usage (60 requests/hour)
npx templui-mcp-server

# With GitHub token (5000 requests/hour) - Recommended
npx templui-mcp-server --github-api-key ghp_your_token_here

# Use cached documentation
npx templui-mcp-server --use-cached-docs
```

**🎯 Get your GitHub token in 2 minutes**: [GitHub Personal Access Tokens](https://github.com/settings/tokens)

## 📚 Available Tools

| Tool | Description |
|------|-------------|
| `get_component` | Get the source code (.templ file) for a specific component |
| `get_component_demo` | Get demo/example code showing component usage |
| `get_component_docs` | Get complete documentation for a component |
| `get_component_javascript` | Get JavaScript code for interactive components |
| `get_component_metadata` | Get detailed metadata including props and features |
| `list_components` | List all available components, optionally by category |

## 🎨 Supported Components

TemplUI provides 42 components across multiple categories:

### Form Components
- Button, Input, Textarea, Checkbox, Radio, Select Box
- Date Picker, Time Picker, Input OTP, Tags Input
- Form, Label, Switch, Rating, Slider

### Layout Components
- Card, Separator, Aspect Ratio, Accordion, Table
- Collapsible, Sheet, Sidebar

### Navigation Components
- Breadcrumb, Pagination, Tabs

### Overlay Components
- Dialog, Dropdown, Popover, Tooltip

### Feedback Components
- Alert, Toast, Progress, Skeleton, Copy Button

### Display Components
- Avatar, Badge, Icon, Code, Chart, Carousel

## 🛠️ Installation & Setup

### 1. Install the Package

```bash
# Global installation (optional)
npm install -g templui-mcp-server

# Or use npx (recommended)
npx templui-mcp-server --help
```

### 2. Get GitHub Token (Recommended)

```bash
# Visit: https://github.com/settings/tokens
# Generate token with no scopes needed for public repositories
export GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token_here
```

### 3. Test the Server

```bash
# Run server
templui-mcp-server --github-api-key ghp_your_token_here

# Server will start and wait for MCP client connections
```

## 🔌 Integration with AI Tools

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "templui": {
      "command": "npx",
      "args": ["templui-mcp-server"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    }
  }
}
```

### VS Code with Continue.dev

Add to your Continue configuration:

```json
{
  "mcpServers": [
    {
      "name": "templui",
      "command": "npx",
      "args": ["templui-mcp-server", "--github-api-key", "ghp_your_token_here"]
    }
  ]
}
```

### Cursor

Configure in Cursor's MCP settings:

```json
{
  "templui": {
    "command": "templui-mcp-server",
    "args": ["--github-api-key", "ghp_your_token_here"]
  }
}
```

## 📖 Usage Examples

### Get Component Source Code

```typescript
// AI Assistant can request:
use_tool("get_component", { "componentName": "button" })

// Returns Go templ source code with helpful comments
```

### Get Component Documentation

```typescript
// AI Assistant can request:
use_tool("get_component_docs", { "componentName": "dialog" })

// Returns formatted documentation with installation and examples
```

### List Components by Category

```typescript
// AI Assistant can request:
use_tool("list_components", { "category": "form" })

// Returns all form-related components
```

### Get Component Examples

```typescript
// AI Assistant can request:
use_tool("get_component_demo", { "componentName": "carousel" })

// Returns example implementations from the showcase
```

## ⚙️ Configuration

### Command Line Options

```bash
templui-mcp-server [options]

Options:
  --github-api-key <token>    GitHub personal access token
  --use-cached-docs          Use cached documentation  
  --log-level <level>        Set log level (error, warn, info, debug)
  --help                     Show help message
```

### Environment Variables

```bash
GITHUB_PERSONAL_ACCESS_TOKEN  # GitHub token for API access
TEMPLUI_DOCS_PATH            # Path to documentation files
TEMPLUI_CACHE_DIR            # Cache directory location
LOG_LEVEL                    # Logging level
```

## 🎯 Use Cases

- **🤖 AI-Powered Development** - Let AI assistants build UIs with TemplUI components
- **📚 Component Discovery** - Explore available components and their usage patterns
- **🚀 Rapid Prototyping** - Get complete component implementations quickly
- **📝 Code Generation** - Generate Go templ code with proper imports and structure
- **🎓 Learning Go Templ** - Understand component patterns and best practices

## 📁 Project Structure

```
templui-mcp-server/
├── src/
│   ├── index.ts              # CLI entry point
│   ├── server/               # MCP server implementation
│   ├── tools/                # Tool implementations
│   ├── utils/                # Utilities (GitHub, docs, cache)
│   ├── data/                 # Component metadata
│   └── cli/                  # Command line interface
├── samples/                  # Sample data (documentation)
├── package.json
└── README.md
```

## 🔧 Development

### Building from Source

```bash
# Clone repository
git clone https://github.com/tggo/templui-mcp-server.git
cd templui-mcp-server

# Install dependencies
npm install

# Build TypeScript
npm run build

# Run development version
npm run dev
```

### Adding Documentation

Place TemplUI documentation files in `samples/templui-site-doc/`:

```
samples/templui-site-doc/
├── templui.io_docs_components_button.md
├── templui.io_docs_components_dialog.md
└── ...
```

## 🐛 Troubleshooting

### Common Issues

1. **Rate Limit Exceeded**
   ```
   Error: API rate limit exceeded
   Solution: Provide GitHub token with --github-api-key
   ```

2. **Documentation Not Found**
   ```
   Error: Documentation directory not found
   Solution: Ensure samples/templui-site-doc exists with markdown files
   ```

3. **Component Not Found**
   ```
   Error: Component "xyz" not found
   Solution: Use list_components to see available components
   ```

### Debug Mode

```bash
# Enable debug logging
templui-mcp-server --log-level debug --github-api-key ghp_your_token
```

## 📄 API Reference

### Tool Schemas

All tools follow consistent parameter patterns:

```typescript
interface ComponentRequest {
  componentName: string;  // Required for most tools
}

interface ListRequest {
  category?: string;      // Optional category filter
}
```

### Response Format

Tools return content in MCP-standard format:

```typescript
{
  content: [
    {
      type: "text",
      text: "Component source code or documentation"
    }
  ]
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- **[TemplUI Team](https://templui.io)** - For the amazing Go templ component library
- **[Go Templ](https://templ.guide)** - For the excellent templating language
- **[Anthropic](https://anthropic.com)** - For the Model Context Protocol specification

---

**Made with ❤️ for the Go and TemplUI community**

**Star ⭐ this repo if you find it helpful!**

## 🔗 Links

- [TemplUI Documentation](https://templui.io)
- [Go Templ Guide](https://templ.guide)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [GitHub Repository](https://github.com/tggo/templui-mcp-server)
- [Issues & Support](https://github.com/tggo/templui-mcp-server/issues)