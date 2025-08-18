import { TEMPLUI_COMPONENTS, getComponentsByCategory } from '../data/components-list.js';
import { cache } from '../utils/cache.js';
import { logError, logInfo } from '../utils/logger.js';

export async function handleListComponents({ category }: { category?: string } = {}) {
  try {
    logInfo(`Listing components${category ? ` in category: ${category}` : ''}`);

    // Create cache key
    const cacheKey = `list-components:${category || 'all'}`;
    const cached = await cache.get<string>(cacheKey);
    if (cached) {
      logInfo(`Returning cached component list`);
      return {
        content: [{ type: "text", text: cached }]
      };
    }

    // Filter components by category if specified
    const components = category 
      ? getComponentsByCategory(category)
      : TEMPLUI_COMPONENTS;

    if (components.length === 0) {
      const message = category 
        ? `No components found in category "${category}"`
        : 'No components found';
      
      return {
        content: [{ type: "text", text: message }]
      };
    }

    // Format the components list
    const formattedList = formatComponentsList(components, category);
    
    // Cache the result
    await cache.set(cacheKey, formattedList);
    
    logInfo(`Successfully listed ${components.length} components`);
    return {
      content: [{ type: "text", text: formattedList }]
    };
  } catch (error) {
    logError(`Failed to list components`, error as Error);
    throw new Error(`Failed to list components: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function formatComponentsList(components: any[], category?: string): string {
  const sections: string[] = [];

  // Header
  if (category) {
    sections.push(`# TemplUI Components - ${category.charAt(0).toUpperCase() + category.slice(1)} Category`);
  } else {
    sections.push('# TemplUI Components');
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
    description: 'Optional category to filter components (form, layout, navigation, overlay, feedback, display)',
    enum: ['form', 'layout', 'navigation', 'overlay', 'feedback', 'display']
  }
};