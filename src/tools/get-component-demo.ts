import { GitHubClient } from '../utils/github-client.js';
import { cache } from '../utils/cache.js';
import { logError, logInfo } from '../utils/logger.js';

let githubClient: GitHubClient;

export function setGitHubClient(client: GitHubClient): void {
  githubClient = client;
}

export async function handleGetComponentDemo({ componentName }: { componentName: string }) {
  try {
    logInfo(`Getting demo code for component: ${componentName}`);

    // Check cache first
    const cacheKey = `component-demo:${componentName}`;
    const cached = await cache.get<string[]>(cacheKey);
    if (cached) {
      logInfo(`Returning cached demo for component: ${componentName}`);
      const demosText = cached.join('\n\n' + '='.repeat(80) + '\n\n');
      return {
        content: [{ 
          type: "text", 
          text: `# Demo Examples for ${componentName}\n\n${demosText}`
        }]
      };
    }

    // Fetch from GitHub
    const demos = await githubClient.getComponentDemo(componentName);
    
    if (demos.length === 0) {
      throw new Error(`No demo files found for component "${componentName}"`);
    }
    
    // Cache the result
    await cache.set(cacheKey, demos);
    
    // Format demos for display
    const demosText = demos.join('\n\n' + '='.repeat(80) + '\n\n');
    
    logInfo(`Successfully fetched ${demos.length} demo(s) for component: ${componentName}`);
    return {
      content: [{ 
        type: "text", 
        text: `# Demo Examples for ${componentName}\n\nFound ${demos.length} demo file(s):\n\n${demosText}`
      }]
    };
  } catch (error) {
    logError(`Failed to get demo for component "${componentName}"`, error as Error);
    throw new Error(`Failed to get demo for component "${componentName}": ${error instanceof Error ? error.message : String(error)}`);
  }
}

export const schema = {
  componentName: {
    type: 'string',
    description: 'Name of the TemplUI component to get demo examples for'
  }
};