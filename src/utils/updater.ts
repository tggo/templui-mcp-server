import { GitHubClient } from './github-client.js';
import { cache } from './cache.js';
import { logInfo, logWarning, logError, logDebug } from './logger.js';

export interface RepositoryInfo {
  latestCommit: string;
  lastModified: string;
  componentsCount: number;
}

export interface UpdateCheckResult {
  hasUpdates: boolean;
  currentCommit?: string;
  latestCommit?: string;
  message: string;
}

export class Updater {
  private githubClient: GitHubClient;
  private readonly CACHE_KEY = 'repository-info';
  private readonly UPDATE_CHECK_TTL = 3600; // 1 hour

  constructor(githubClient: GitHubClient) {
    this.githubClient = githubClient;
  }

  async checkForUpdates(): Promise<UpdateCheckResult> {
    try {
      logInfo('Checking for TemplUI repository updates...');
      
      // Get cached repository info
      const cachedInfo = await cache.get<RepositoryInfo>(this.CACHE_KEY);
      
      // Get latest repository info from GitHub
      const latestInfo = await this.getRepositoryInfo();
      
      if (!cachedInfo) {
        // First time check - cache the current state
        await cache.set(this.CACHE_KEY, latestInfo, this.UPDATE_CHECK_TTL);
        return {
          hasUpdates: false,
          latestCommit: latestInfo.latestCommit,
          message: 'Repository info cached for future update checks'
        };
      }

      const hasUpdates = cachedInfo.latestCommit !== latestInfo.latestCommit;
      
      if (hasUpdates) {
        logInfo(`Updates detected: ${cachedInfo.latestCommit.slice(0, 7)} -> ${latestInfo.latestCommit.slice(0, 7)}`);
        return {
          hasUpdates: true,
          currentCommit: cachedInfo.latestCommit,
          latestCommit: latestInfo.latestCommit,
          message: `New updates available in TemplUI repository. Components may have changed since last cache.`
        };
      }

      return {
        hasUpdates: false,
        currentCommit: cachedInfo.latestCommit,
        latestCommit: latestInfo.latestCommit,
        message: 'Repository is up to date'
      };

    } catch (error) {
      logError('Failed to check for updates', error as Error);
      return {
        hasUpdates: false,
        message: `Update check failed: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  async updateRepositoryInfo(): Promise<void> {
    try {
      logInfo('Updating repository information...');
      const latestInfo = await this.getRepositoryInfo();
      await cache.set(this.CACHE_KEY, latestInfo, this.UPDATE_CHECK_TTL);
      logInfo(`Repository info updated - Commit: ${latestInfo.latestCommit.slice(0, 7)}, Components: ${latestInfo.componentsCount}`);
    } catch (error) {
      logError('Failed to update repository info', error as Error);
      throw error;
    }
  }

  async clearCache(): Promise<void> {
    try {
      logInfo('Clearing all cached data...');
      await cache.clear();
      logInfo('Cache cleared successfully');
    } catch (error) {
      logError('Failed to clear cache', error as Error);
      throw error;
    }
  }

  async invalidateComponentCache(): Promise<void> {
    try {
      logInfo('Invalidating component cache...');
      
      // Get all cache keys and remove component-related ones
      const keysToDelete = [
        'list-components:all',
        'list-components:form',
        'list-components:layout', 
        'list-components:navigation',
        'list-components:overlay',
        'list-components:feedback',
        'list-components:display'
      ];

      // Also remove individual component caches
      const componentNames = [
        'button', 'input', 'textarea', 'checkbox', 'radio', 'selectbox',
        'datepicker', 'timepicker', 'inputotp', 'tagsinput', 'form', 'label',
        'switch', 'rating', 'slider', 'card', 'separator', 'aspectratio',
        'accordion', 'table', 'breadcrumb', 'pagination', 'tabs', 'dialog',
        'dropdown', 'popover', 'tooltip', 'alert', 'toast',
        'progress', 'skeleton', 'avatar', 'badge', 'icon', 'code', 'chart', 'carousel',
        'collapsible', 'copybutton', 'sheet', 'sidebar'
      ];

      for (const name of componentNames) {
        keysToDelete.push(
          `component-source:${name}`,
          `component-demo:${name}`,
          `component-docs:${name}`,
          `component-javascript:${name}`,
          `component-metadata:${name}`
        );
      }

      // Delete all component-related cache entries
      for (const key of keysToDelete) {
        await cache.delete(key);
      }

      logInfo(`Invalidated cache for ${keysToDelete.length} entries`);
    } catch (error) {
      logError('Failed to invalidate component cache', error as Error);
      throw error;
    }
  }

  private async getRepositoryInfo(): Promise<RepositoryInfo> {
    try {
      // Get latest commit from main branch
      const latestCommit = await this.githubClient.getLatestCommit();
      
      // Get components list to count them
      const components = await this.githubClient.getComponentsFromRepository();
      
      return {
        latestCommit: latestCommit.sha,
        lastModified: latestCommit.date,
        componentsCount: components.length
      };
    } catch (error) {
      logError('Failed to get repository info', error as Error);
      throw error;
    }
  }

  async getUpdateStatus(): Promise<string> {
    try {
      const result = await this.checkForUpdates();
      const cachedInfo = await cache.get<RepositoryInfo>(this.CACHE_KEY);
      
      let status = `TemplUI Repository Status:\n`;
      status += `- ${result.message}\n`;
      
      if (cachedInfo) {
        status += `- Last checked: ${new Date(cachedInfo.lastModified).toLocaleString()}\n`;
        status += `- Components available: ${cachedInfo.componentsCount}\n`;
        status += `- Current commit: ${cachedInfo.latestCommit.slice(0, 7)}\n`;
      }

      if (result.hasUpdates) {
        status += `\nRecommendation: Run with --clear-cache to refresh component data`;
      }

      return status;
    } catch (error) {
      return `Failed to get update status: ${error instanceof Error ? error.message : String(error)}`;
    }
  }
}