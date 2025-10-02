#!/usr/bin/env node

/**
 * Automated Component Update Script
 *
 * This script automates the process of updating TemplUI MCP Server components
 * to match the latest TemplUI repository.
 *
 * Usage: node scripts/update-components.js [options]
 *
 * Options:
 *   --dry-run       Show what would be updated without making changes
 *   --skip-npm      Skip npm publish step
 *   --skip-git      Skip git commit and push steps
 */

import { GitHubClient } from '../build/utils/github-client.js';
import { TEMPLUI_COMPONENTS } from '../build/data/components-list.js';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

// Parse command line arguments
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const SKIP_NPM = args.includes('--skip-npm');
const SKIP_GIT = args.includes('--skip-git');

console.log('🚀 TemplUI Component Update Automation\n');

if (DRY_RUN) {
  console.log('⚠️  DRY RUN MODE - No changes will be made\n');
}

// Component categories mapping
const CATEGORY_KEYWORDS = {
  form: ['input', 'button', 'checkbox', 'radio', 'select', 'switch', 'toggle', 'slider', 'rating'],
  layout: ['card', 'container', 'grid', 'stack', 'collapsible', 'sheet', 'sidebar', 'accordion'],
  navigation: ['breadcrumb', 'pagination', 'tabs', 'menu'],
  overlay: ['modal', 'dialog', 'drawer', 'dropdown', 'popover', 'tooltip'],
  feedback: ['alert', 'toast', 'progress', 'skeleton', 'notification', 'copy'],
  display: ['avatar', 'badge', 'icon', 'code', 'chart', 'carousel', 'calendar']
};

// Helper to infer category from component name
function inferCategory(componentName) {
  const name = componentName.toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    for (const keyword of keywords) {
      if (name.includes(keyword)) {
        return category;
      }
    }
  }

  return 'display'; // default category
}

// Helper to generate description from component name
function generateDescription(componentName) {
  const name = componentName.toLowerCase();

  const descriptions = {
    collapsible: 'Expandable and collapsible content section',
    copybutton: 'Quick content copying functionality',
    dialog: 'Modal window for focused interactions',
    sheet: 'Sliding panel from screen edge',
    sidebar: 'Navigation panel typically on page side',
    switch: 'Toggle between two states',
    // Add more mappings as needed
  };

  return descriptions[name] || `${componentName.charAt(0).toUpperCase() + componentName.slice(1)} component`;
}

async function main() {
  try {
    // Phase 1: Discovery
    console.log('📦 Phase 1: Component Discovery');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    const githubClient = new GitHubClient(process.env.GITHUB_PERSONAL_ACCESS_TOKEN);

    console.log('Fetching components from TemplUI repository...');
    const repoComponents = await githubClient.getComponentsFromRepository();

    const staticComponentNames = TEMPLUI_COMPONENTS.map(c => c.name).sort();
    const repoComponentNames = repoComponents.map(c => c.name).sort();

    const newComponents = repoComponentNames.filter(name => !staticComponentNames.includes(name));
    const removedComponents = staticComponentNames.filter(name => !repoComponentNames.includes(name));

    console.log(`✓ Repository: ${repoComponentNames.length} components`);
    console.log(`✓ Static list: ${staticComponentNames.length} components`);
    console.log(`✓ New: ${newComponents.length} components`);
    console.log(`✓ Removed: ${removedComponents.length} components\n`);

    if (newComponents.length === 0 && removedComponents.length === 0) {
      console.log('✅ Component list is already up to date!\n');
      return;
    }

    // Phase 2: Analysis
    console.log('📊 Phase 2: Component Analysis');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    if (newComponents.length > 0) {
      console.log('✨ New components to add:');
      for (const name of newComponents) {
        const hasJS = await githubClient.getComponentJavaScript(name);
        const category = inferCategory(name);
        console.log(`   - ${name} (${category}, JS: ${hasJS ? 'Yes' : 'No'})`);
      }
      console.log('');
    }

    if (removedComponents.length > 0) {
      console.log('❌ Components to remove:');
      removedComponents.forEach(name => console.log(`   - ${name}`));
      console.log('');
    }

    if (DRY_RUN) {
      console.log('✓ Dry run complete - no changes made\n');
      return;
    }

    // Phase 3: Version Bump
    console.log('📝 Phase 3: Version Management');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    const packageJsonPath = join(PROJECT_ROOT, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    const currentVersion = packageJson.version;
    const [major, minor, patch] = currentVersion.split('.').map(Number);

    // Increment minor version for new components
    const newVersion = `${major}.${minor + 1}.0`;
    packageJson.version = newVersion;

    console.log(`Current version: ${currentVersion}`);
    console.log(`New version: ${newVersion}\n`);

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log('✓ Updated package.json\n');

    // Phase 4: Update CHANGELOG
    console.log('📋 Phase 4: Update Documentation');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    const changelogPath = join(PROJECT_ROOT, 'CHANGELOG.md');
    let changelog = readFileSync(changelogPath, 'utf8');

    const newEntry = `## [${newVersion}] - ${new Date().toISOString().split('T')[0]}

### Added
${newComponents.map(name => `- \`${name}\` - ${generateDescription(name)}`).join('\n')}

${removedComponents.length > 0 ? `### Removed
${removedComponents.map(name => `- \`${name}\``).join('\n')}
` : ''}
`;

    // Insert after the header
    const lines = changelog.split('\n');
    const headerEndIndex = lines.findIndex(line => line.startsWith('## ['));
    lines.splice(headerEndIndex, 0, newEntry);
    changelog = lines.join('\n');

    writeFileSync(changelogPath, changelog);
    console.log('✓ Updated CHANGELOG.md\n');

    // Phase 5: Build
    console.log('🔨 Phase 5: Build & Validation');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('Running build...');
    execSync('npm run build', { cwd: PROJECT_ROOT, stdio: 'inherit' });
    console.log('✓ Build successful\n');

    // Phase 6: Git Operations
    if (!SKIP_GIT) {
      console.log('📤 Phase 6: Git Operations');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

      const commitMessage = `Version ${newVersion}: Update TemplUI components

${newComponents.length > 0 ? `New components: ${newComponents.join(', ')}` : ''}
${removedComponents.length > 0 ? `Removed components: ${removedComponents.join(', ')}` : ''}

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>`;

      console.log('Creating git commit...');
      execSync('git add .', { cwd: PROJECT_ROOT });
      execSync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, { cwd: PROJECT_ROOT });
      console.log('✓ Commit created\n');

      console.log('Creating git tag...');
      execSync(`git tag -a v${newVersion} -m "Version ${newVersion}"`, { cwd: PROJECT_ROOT });
      console.log('✓ Tag created\n');

      console.log('Pushing to GitHub...');
      execSync('git push origin main', { cwd: PROJECT_ROOT, stdio: 'inherit' });
      execSync(`git push origin v${newVersion}`, { cwd: PROJECT_ROOT, stdio: 'inherit' });
      console.log('✓ Pushed to GitHub\n');
    }

    // Phase 7: NPM Publish
    if (!SKIP_NPM) {
      console.log('📦 Phase 7: NPM Publish');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

      try {
        console.log('Publishing to npm...');
        execSync('npm publish --access public', { cwd: PROJECT_ROOT, stdio: 'inherit' });
        console.log('✓ Published to npm\n');
      } catch (error) {
        console.error('⚠️  NPM publish failed. You may need to run `npm login` first.\n');
        console.log('To publish manually, run:');
        console.log('  npm login');
        console.log('  npm publish --access public\n');
      }
    }

    // Summary
    console.log('✅ Update Complete!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log(`Version: ${currentVersion} → ${newVersion}`);
    console.log(`Components: ${staticComponentNames.length} → ${repoComponentNames.length}`);
    console.log(`Added: ${newComponents.length}`);
    console.log(`Removed: ${removedComponents.length}\n`);

    if (SKIP_NPM) {
      console.log('⚠️  Remember to publish to npm:');
      console.log('   npm publish --access public\n');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
