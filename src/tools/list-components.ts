import { TEMPLUI_COMPONENTS, getComponentsByCategory } from '../data/components-list.js';
import { cache } from '../utils/cache.js';
import { logError, logInfo, logDebug } from '../utils/logger.js';

// Dynamic imports for GitHub integration
let githubClient: any = null;
let updater: any = null;

// Initialize GitHub integration
export function initializeGitHubIntegration(client: any, updateService: any) {
  githubClient = client;
  updater = updateService;
}

export async function handleListComponents({ category, useDynamic }: { category?: string, useDynamic?: boolean } = {}) {
  try {
    logInfo(`Listing components${category ? ` in category: ${category}` : ''}${useDynamic ? ' (dynamic mode)' : ''}`);

    // Create cache key
    const cacheKey = `list-components:${category || 'all'}${useDynamic ? ':dynamic' : ''}`;
    const cached = await cache.get<string>(cacheKey);
    if (cached) {
      logInfo(`Returning cached component list`);
      return {
        content: [{ type: "text", text: cached }]
      };
    }

    let components: any[];
    let isDynamicData = false;

    // Try to use dynamic GitHub data if available and requested
    if (useDynamic && githubClient) {
      try {
        logDebug('Attempting to fetch components dynamically from GitHub');
        const dynamicComponents = await githubClient.getComponentsFromRepository();
        
        // Convert GitHub data to component format
        components = dynamicComponents.map((comp: any) => ({
          name: comp.name,
          displayName: comp.name.charAt(0).toUpperCase() + comp.name.slice(1),
          description: `Component dynamically discovered from TemplUI repository`,
          category: 'dynamic',
          hasJavaScript: false, // Will be determined when component is accessed
          installCommand: `Add ${comp.name} component to your project`
        }));

        // Filter by category if specified (though dynamic components don't have categories yet)
        if (category && category !== 'dynamic') {
          components = [];
        }
        
        isDynamicData = true;
        logInfo(`Successfully fetched ${components.length} components dynamically from GitHub`);
      } catch (error) {
        logDebug(`Dynamic fetch failed, falling back to static data: ${error instanceof Error ? error.message : String(error)}`);
        // Fall back to static data
        components = category ? getComponentsByCategory(category) : TEMPLUI_COMPONENTS;
      }
    } else {
      // Use static component data
      components = category ? getComponentsByCategory(category) : TEMPLUI_COMPONENTS;
    }

    if (components.length === 0) {
      const message = category 
        ? `No components found in category "${category}"`
        : 'No components found';
      
      return {
        content: [{ type: "text", text: message }]
      };
    }

    // Format the components list
    const formattedList = formatComponentsList(components, category, isDynamicData);
    
    // Cache the result with shorter TTL for dynamic data
    const cacheTTL = isDynamicData ? 1800 : undefined; // 30 minutes for dynamic data
    await cache.set(cacheKey, formattedList, cacheTTL);
    
    logInfo(`Successfully listed ${components.length} components`);
    return {
      content: [{ type: "text", text: formattedList }]
    };
  } catch (error) {
    logError(`Failed to list components`, error as Error);
    throw new Error(`Failed to list components: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function formatComponentsList(components: any[], category?: string, isDynamic?: boolean): string {
  const sections: string[] = [];

  // Header
  if (category) {
    sections.push(`# TemplUI Components - ${category.charAt(0).toUpperCase() + category.slice(1)} Category`);
  } else {
    sections.push('# TemplUI Components');
  }
  
  if (isDynamic) {
    sections.push('*Dynamically discovered from GitHub repository*');
  }
  
  sections.push('');
  sections.push(`Found ${components.length} component${components.length === 1 ? '' : 's'}`);
  sections.push('');

  // Group by category if showing all components
  if (!category) {
    const grouped = components.reduce((acc, component) => {
      if (!acc[component.category]) {
        acc[component.category] = [];
      }
      acc[component.category].push(component);
      return acc;
    }, {} as Record<string, any[]>);

    Object.entries(grouped).forEach(([cat, comps]) => {
      sections.push(`## ${cat.charAt(0).toUpperCase() + cat.slice(1)} (${(comps as any[]).length})`);
      sections.push('');
      
      (comps as any[]).forEach((component: any) => {
        sections.push(`### ${component.displayName}`);
        sections.push(`- **Name**: \`${component.name}\``);
        sections.push(`- **Description**: ${component.description}`);
        sections.push(`- **JavaScript**: ${component.hasJavaScript ? 'Yes' : 'No'}`);
        sections.push(`- **Install**: \`${component.installCommand}\``);
        sections.push('');
      });
    });
  } else {
    // List components in the specified category
    components.forEach(component => {
      sections.push(`## ${component.displayName}`);
      sections.push(`- **Name**: \`${component.name}\``);
      sections.push(`- **Description**: ${component.description}`);
      sections.push(`- **JavaScript**: ${component.hasJavaScript ? 'Yes' : 'No'}`);
      sections.push(`- **Install**: \`${component.installCommand}\``);
      sections.push('');
    });
  }

  // Usage instructions
  sections.push('---');
  sections.push('');
  sections.push('## Usage');
  sections.push('');
  sections.push('To get more information about a specific component, use:');
  sections.push('- `get_component` - Get the source code');
  sections.push('- `get_component_docs` - Get documentation');
  sections.push('- `get_component_demo` - Get example usage');
  sections.push('- `get_component_metadata` - Get detailed metadata');
  sections.push('- `get_component_javascript` - Get JavaScript code (if available)');
  sections.push('');

  // Categories summary
  if (!category) {
    const categories = [...new Set(components.map(c => c.category))].sort();
    sections.push('## Available Categories');
    sections.push('');
    categories.forEach(cat => {
      const count = components.filter(c => c.category === cat).length;
      sections.push(`- **${cat}**: ${count} component${count === 1 ? '' : 's'}`);
    });
    sections.push('');
  }

  sections.push('*Visit [templui.io](https://templui.io) for complete documentation and live examples.*');

  return sections.join('\n');
}

export const schema = {
  category: {
    type: 'string',
    description: 'Optional category to filter components (form, layout, navigation, overlay, feedback, display, dynamic)',
    enum: ['form', 'layout', 'navigation', 'overlay', 'feedback', 'display', 'dynamic']
  },
  useDynamic: {
    type: 'boolean',
    description: 'Use dynamic component discovery from GitHub repository (may be slower but always up-to-date)',
    default: false
  }
};