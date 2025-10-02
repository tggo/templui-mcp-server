# Automation Scripts

This directory contains automation scripts for maintaining the TemplUI MCP Server.

## update-components.js

Automatically updates the MCP server to support the latest TemplUI components.

### Usage

```bash
# Full automated update (discovery, update, commit, publish)
npm run update:components

# Dry run - see what would change without making changes
npm run update:components:dry-run

# Update and commit but skip npm publish
npm run update:components:no-publish

# Direct script usage with options
node scripts/update-components.js [--dry-run] [--skip-npm] [--skip-git]
```

### Options

- `--dry-run` - Show what would be updated without making any changes
- `--skip-npm` - Skip npm publish step (useful if not logged in)
- `--skip-git` - Skip git commit and push steps

### What it does

1. **Discovery**: Fetches current components from TemplUI GitHub repository
2. **Analysis**: Compares with static component list to find new/removed components
3. **Metadata Collection**: Determines categories and JavaScript requirements for new components
4. **Version Bump**: Automatically increments version in package.json
5. **Documentation**: Updates CHANGELOG.md with new version entry
6. **Build**: Compiles TypeScript to ensure everything works
7. **Git Operations**: Commits changes, creates tag, pushes to GitHub
8. **NPM Publish**: Publishes new version to npm registry

### Prerequisites

- **GitHub Token** (optional but recommended): Set `GITHUB_PERSONAL_ACCESS_TOKEN` environment variable
- **NPM Login**: Run `npm login` before using the script if you want to publish

### Example Output

```
🚀 TemplUI Component Update Automation

📦 Phase 1: Component Discovery
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Fetching components from TemplUI repository...
✓ Repository: 42 components
✓ Static list: 41 components
✓ New: 6 components
✓ Removed: 5 components

📊 Phase 2: Component Analysis
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ New components to add:
   - collapsible (layout, JS: Yes)
   - dialog (overlay, JS: Yes)
   - switch (form, JS: Yes)

❌ Components to remove:
   - modal
   - drawer
   - toggle

✅ Update Complete!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Version: 1.2.0 → 1.3.0
Components: 41 → 42
Added: 6
Removed: 5
```

### Manual Steps (if script fails)

If the automated script encounters issues, you can update manually:

1. Run discovery test:
   ```bash
   node test-discover-components.js
   ```

2. Update files manually:
   - `src/data/components-list.ts` - Add/remove components
   - `src/utils/updater.ts` - Update cache invalidation list
   - `README.md` - Update component counts
   - `CLAUDE.md` - Update documentation
   - `CHANGELOG.md` - Add new version entry
   - `package.json` - Bump version

3. Build and test:
   ```bash
   npm run build
   ```

4. Commit and publish:
   ```bash
   git add .
   git commit -m "Version X.Y.Z: Update components"
   git tag -a vX.Y.Z -m "Version X.Y.Z"
   git push origin main --tags
   npm publish --access public
   ```

### Troubleshooting

**NPM Publish Fails:**
```bash
npm login
npm run update:components
```

**GitHub API Rate Limit:**
```bash
export GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token
npm run update:components
```

**Build Errors:**
```bash
npm run clean
npm install
npm run build
```

### Safety Features

- **Dry Run Mode**: Test without making changes
- **Automatic Validation**: Builds project before committing
- **Version Checking**: Follows semantic versioning
- **Rollback Support**: Git tags allow easy rollback

### Integration with Claude Code

You can also trigger updates via Claude Code command:

```
@update-components
```

This will use the `.claude/commands/update-components.md` command definition.
