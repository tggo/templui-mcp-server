# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-10-02

### Added
- **New Components**: Added 6 new TemplUI components:
  - `collapsible` - Expandable and collapsible content section (Layout)
  - `copybutton` - Quick content copying functionality (Feedback)
  - `dialog` - Modal window for focused interactions (Overlay)
  - `sheet` - Sliding panel from screen edge (Layout)
  - `sidebar` - Navigation panel typically on page side (Layout)
  - `switch` - Toggle between two states (Form)

### Changed
- Updated component count from 41 to 42 components
- Updated documentation to reflect new components
- Updated cache invalidation to include new components

### Removed
- **Deprecated Components**: Removed 5 components that are no longer in TemplUI repository:
  - `checkboxcard` - Card-style checkbox (superseded by standard checkbox patterns)
  - `drawer` - Slide-out panel (replaced by `sheet`)
  - `modal` - Overlay dialog (replaced by `dialog`)
  - `radiocard` - Card-style radio button (superseded by standard radio patterns)
  - `toggle` - Switch control (replaced by `switch`)

### Technical
- All new components have JavaScript support
- Component categorization updated in static list
- Documentation examples updated to use current components

## [1.1.0] - 2025-10-01

### Added
- Dynamic component discovery from GitHub repository
- `check_updates` tool to check for repository updates
- `refresh_cache` tool to clear cached data
- Update checking mechanism with commit tracking
- Repository info caching with TTL

### Changed
- Enhanced caching system with update detection
- Improved GitHub integration with dynamic discovery
- Added `useDynamic` parameter to `list_components` tool

## [1.0.1] - 2025-09-30

### Fixed
- Repository references in package.json
- Documentation links and paths

## [1.0.0] - 2025-09-29

### Added
- Initial implementation of TemplUI MCP Server
- 6 core MCP tools for component access
- GitHub API integration for live component data
- Documentation parser for templui.io docs
- Smart caching system (memory + disk)
- Support for 41 TemplUI components
- CLI with configuration options
- Integration guides for Claude Desktop, VS Code, and Cursor

### Features
- `get_component` - Get component source code
- `get_component_demo` - Get component examples
- `get_component_docs` - Get component documentation
- `get_component_javascript` - Get component JavaScript
- `get_component_metadata` - Get component metadata
- `list_components` - List all components with optional category filter

[1.2.0]: https://github.com/tggo/templui-mcp-server/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/tggo/templui-mcp-server/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/tggo/templui-mcp-server/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/tggo/templui-mcp-server/releases/tag/v1.0.0
