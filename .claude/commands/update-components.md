# Update TemplUI Components

Automatically update the MCP server to support the latest TemplUI components from the repository.

## What this command does:

1. **Discovery**: Fetches the current component list from TemplUI GitHub repository
2. **Analysis**: Compares repository components with the current static list
3. **Metadata Collection**: Retrieves component information from templui.io documentation
4. **Update**: Updates all necessary files with new/removed components
5. **Validation**: Builds and tests to ensure nothing breaks
6. **Version Bump**: Increments version number appropriately
7. **Documentation**: Updates README, CHANGELOG, and creates update summary
8. **Deployment**: Commits, tags, pushes to GitHub, and publishes to npm

## Steps to execute:

### Phase 1: Discovery & Analysis
- Build the project to ensure clean state
- Run dynamic component discovery from GitHub API
- Compare with current static component list (src/data/components-list.ts)
- Identify new components that need to be added
- Identify deprecated components that need to be removed
- For each new component, check if it has JavaScript file
- Fetch documentation from templui.io to determine:
  - Component category (form/layout/navigation/overlay/feedback/display)
  - Component description
  - Features and capabilities

### Phase 2: Update Files
Update the following files:

**1. src/data/components-list.ts**
- Add new component entries with proper metadata
- Remove deprecated component entries
- Maintain alphabetical order within the array

**2. src/utils/updater.ts**
- Update the `componentNames` array in `invalidateComponentCache()` method
- Add new component names to cache invalidation list
- Remove deprecated component names

**3. README.md**
- Update "Supported Components" section with new count
- Update component lists by category
- Update any examples that reference deprecated components

**4. CLAUDE.md**
- Update "Supported Components" section with new count
- Update category lists
- Update JavaScript-enabled components list

**5. CHANGELOG.md**
- Add new version section at the top
- Document new components with categories
- Document removed components with reasons
- Include migration notes if needed

**6. package.json**
- Bump version number following semantic versioning:
  - MAJOR for breaking changes
  - MINOR for new components/features (typical case)
  - PATCH for bug fixes only

### Phase 3: Validation
- Run `npm run build` to compile TypeScript
- Run component discovery test to verify counts match
- Check that no TypeScript errors exist
- Verify all tools still work correctly

### Phase 4: Version Control
- Stage all modified files with `git add`
- Create detailed commit message including:
  - Version number in title
  - List of new components with categories
  - List of removed components with reasons
  - Summary of changes made
  - Co-authored-by Claude attribution
- Create git tag with version number (e.g., v1.2.0)

### Phase 5: Deployment
- Push commits to GitHub: `git push origin main`
- Push tags to GitHub: `git push origin <tag>`
- Publish to npm: `npm publish --access public`
  - Note: Requires npm login via `npm login`
  - If not logged in, provide instructions to user

### Phase 6: Documentation
- Create UPDATE_SUMMARY.md with:
  - Summary of changes
  - Statistics (old count vs new count)
  - Deployment instructions
  - Migration notes for users
  - Rollback plan if needed

## Important Notes:

- **GitHub Token**: Use environment variable `GITHUB_PERSONAL_ACCESS_TOKEN` if available to avoid rate limits
- **Semantic Versioning**: Follow semver (MAJOR.MINOR.PATCH)
- **Breaking Changes**: If components are removed, document migration path
- **Testing**: Always build and validate before committing
- **Cache**: New components automatically added to cache invalidation
- **Documentation**: Keep README, CLAUDE.md, and CHANGELOG in sync

## Example Output:

```
✨ NEW components (in repo, not in static list):
   - collapsible
   - dialog
   - sheet

❌ REMOVED components (in static list, not in repo):
   - modal
   - drawer

📊 Component Analysis:
   Static list: 41 components
   Repository:  42 components
   Net change: +1
```

## Post-Deployment:

After successful deployment:
1. Verify package on npm: `npm info templui-mcp-server`
2. Test installation: `npx templui-mcp-server@latest --help`
3. Create GitHub release from tag with changelog
4. Announce update to users if significant changes
5. Monitor for any issues with new components

## Rollback Procedure:

If issues are found after deployment:
1. Publish previous version: `npm publish --access public --tag rollback`
2. Or fix issues and publish patch version
3. Update documentation accordingly

## Automation Script Reference:

The manual process can be automated using the test scripts:
- `test-discover-components.js` - Discovers and compares components
- `test-new-components.js` - Analyzes new component metadata

These scripts demonstrate the discovery logic that can be expanded into full automation.
