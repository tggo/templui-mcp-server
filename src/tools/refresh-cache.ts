import { cache } from '../utils/cache.js';
import { logError, logInfo, logWarning } from '../utils/logger.js';

// Dynamic import for updater
let updater: any = null;

// Initialize updater integration
export function initializeUpdater(updateService: any) {
  updater = updateService;
}

export async function handleRefreshCache({ clearAll }: { clearAll?: boolean } = {}) {
  try {
    logInfo(`Refreshing cache${clearAll ? ' (full clear)' : ' (component data only)'}`);

    if (!updater) {
      throw new Error('Update service not initialized');
    }

    let message = '';

    if (clearAll) {
      // Clear all cached data
      await updater.clearCache();
      message = 'All cached data has been cleared. Next requests will fetch fresh data from GitHub and documentation sources.';
      logInfo('Full cache clear completed');
    } else {
      // Clear only component-related cache
      await updater.invalidateComponentCache();
      message = 'Component cache has been invalidated. Next component requests will fetch fresh data while preserving other cached data.';
      logInfo('Component cache invalidation completed');
    }

    // Update repository information to latest
    try {
      await updater.updateRepositoryInfo();
      message += '\n\nRepository information has been updated to the latest commit.';
    } catch (error) {
      logWarning('Failed to update repository info, but cache was cleared successfully');
      message += '\n\nNote: Repository information could not be updated, but cached data was cleared.';
    }

    // Get updated cache statistics
    const cacheStats = await cache.getStats();
    message += `\n\nCache Statistics:`;
    message += `\n- Memory entries: ${cacheStats.memoryEntries}`;
    message += `\n- Disk entries: ${cacheStats.diskEntries}`;  
    message += `\n- Total size: ${(cacheStats.totalSize / 1024).toFixed(1)}KB`;

    return {
      content: [{ type: "text", text: message }]
    };
  } catch (error) {
    logError('Failed to refresh cache', error as Error);
    throw new Error(`Failed to refresh cache: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export const schema = {
  clearAll: {
    type: 'boolean',
    description: 'Clear all cached data (true) or only component data (false, default)',
    default: false
  }
};