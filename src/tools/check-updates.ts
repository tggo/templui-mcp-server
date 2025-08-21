import { logError, logInfo } from '../utils/logger.js';

// Dynamic import for updater
let updater: any = null;

// Initialize updater integration
export function initializeUpdater(updateService: any) {
  updater = updateService;
}

export async function handleCheckUpdates() {
  try {
    logInfo('Checking for TemplUI repository updates...');

    if (!updater) {
      throw new Error('Update service not initialized');
    }

    // Get update status from updater service
    const updateStatus = await updater.getUpdateStatus();
    
    logInfo('Update check completed successfully');
    return {
      content: [{ type: "text", text: updateStatus }]
    };
  } catch (error) {
    logError('Failed to check updates', error as Error);
    throw new Error(`Failed to check updates: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export const schema = {};