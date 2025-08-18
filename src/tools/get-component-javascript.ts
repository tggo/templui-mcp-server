import { GitHubClient } from '../utils/github-client.js';
import { cache } from '../utils/cache.js';
import { logError, logInfo, logWarning } from '../utils/logger.js';

let githubClient: GitHubClient;

export function setGitHubClient(client: GitHubClient): void {
  githubClient = client;
}

export async function handleGetComponentJavaScript({ componentName }: { componentName: string }) {
  try {
    logInfo(`Getting JavaScript code for component: ${componentName}`);

    // Check cache first
    const cacheKey = `component-javascript:${componentName}`;
    const cached = await cache.get<string>(cacheKey);
    if (cached) {
      logInfo(`Returning cached JavaScript for component: ${componentName}`);
      return {
        content: [{ type: "text", text: cached }]
      };
    }

    // Fetch JavaScript from GitHub
    const jsCode = await githubClient.getComponentJavaScript(componentName);
    
    if (!jsCode) {
      const message = `Component "${componentName}" does not have JavaScript functionality. This component uses only Go templ templating without client-side interactivity.`;
      logWarning(message);
      
      return {
        content: [{ 
          type: "text", 
          text: `# JavaScript for ${componentName}\n\n${message}\n\n## Components with JavaScript\n\nSome TemplUI components that include JavaScript functionality:\n- avatar\n- calendar\n- carousel\n- chart\n- code\n- datepicker\n- drawer\n- dropdown\n- input\n- inputotp\n- label\n- modal\n- popover\n- progress\n- rating\n- selectbox\n- slider\n- tabs\n- tagsinput\n- textarea\n- timepicker\n- toast`
        }]
      };
    }
    
    // Cache the result
    await cache.set(cacheKey, jsCode);
    
    logInfo(`Successfully fetched JavaScript for component: ${componentName}`);
    return {
      content: [{ type: "text", text: jsCode }]
    };
  } catch (error) {
    logError(`Failed to get JavaScript for component "${componentName}"`, error);
    throw new Error(`Failed to get JavaScript for component "${componentName}": ${error instanceof Error ? error.message : String(error)}`);
  }
}

export const schema = {
  componentName: {
    type: 'string',
    description: 'Name of the TemplUI component to get JavaScript code for'
  }
};