import { GitHubClient } from '../utils/github-client.js';
import { cache } from '../utils/cache.js';
import { logError, logInfo } from '../utils/logger.js';

let githubClient: GitHubClient;

export function setGitHubClient(client: GitHubClient): void {
  githubClient = client;
}

export async function handleGetComponent({ componentName }: { componentName: string }) {
  try {
    logInfo(`Getting source code for component: ${componentName}`);

    // Check cache first
    const cacheKey = `component-source:${componentName}`;
    const cached = await cache.get<string>(cacheKey);
    if (cached) {
      logInfo(`Returning cached source for component: ${componentName}`);
      return {
        content: [{ type: "text", text: cached }]
      };
    }

    // Fetch from GitHub
    const sourceCode = await githubClient.getComponentSource(componentName);
    
    // Cache the result
    await cache.set(cacheKey, sourceCode);
    
    logInfo(`Successfully fetched source code for component: ${componentName}`);
    return {
      content: [{ type: "text", text: sourceCode }]
    };
  } catch (error) {
    logError(`Failed to get component "${componentName}"`, error as Error);
    throw new Error(`Failed to get component "${componentName}": ${error instanceof Error ? error.message : String(error)}`);
  }
}

export const schema = {
  componentName: {
    type: 'string',
    description: 'Name of the TemplUI component (e.g., "button", "accordion", "modal")'
  }
};