import { DocumentationParser } from '../utils/documentation.js';
import { getComponentByName, TEMPLUI_COMPONENTS } from '../data/components-list.js';
import { cache } from '../utils/cache.js';
import { logError, logInfo } from '../utils/logger.js';

let documentationParser: DocumentationParser;

export function setDocumentationParser(parser: DocumentationParser): void {
  documentationParser = parser;
}

export async function handleGetComponentMetadata({ componentName }: { componentName: string }) {
  try {
    logInfo(`Getting metadata for component: ${componentName}`);

    // Check cache first
    const cacheKey = `component-metadata:${componentName}`;
    const cached = await cache.get<any>(cacheKey);
    if (cached) {
      logInfo(`Returning cached metadata for component: ${componentName}`);
      return {
        content: [{ type: "text", text: JSON.stringify(cached, null, 2) }]
      };
    }

    // Get component info from our static list
    const componentInfo = getComponentByName(componentName);
    if (!componentInfo) {
      throw new Error(`Component "${componentName}" not found in TemplUI components list`);
    }

    // Get documentation metadata
    const docMetadata = await documentationParser.getComponentMetadata(componentName);

    // Combine all metadata
    const metadata = {
      name: componentInfo.name,
      displayName: componentInfo.displayName,
      description: componentInfo.description,
      category: componentInfo.category,
      hasJavaScript: componentInfo.hasJavaScript,
      installCommand: componentInfo.installCommand,
      
      // Documentation metadata
      documentation: docMetadata ? {
        hasDocumentation: true,
        hasExamples: docMetadata.hasExamples,
        hasApiTable: docMetadata.hasApiTable,
        exampleCount: docMetadata.exampleCount,
        features: docMetadata.features
      } : {
        hasDocumentation: false,
        hasExamples: false,
        hasApiTable: false,
        exampleCount: 0,
        features: []
      },

      // Repository information
      repository: {
        owner: 'templui',
        repo: 'templui',
        path: `internal/components/${componentInfo.name}`,
        sourceFile: `${componentInfo.name}.templ`,
        javascriptFile: componentInfo.hasJavaScript ? `${componentInfo.name}.js` : null
      },

      // Usage information
      usage: {
        framework: 'Go templ',
        importPath: `github.com/templui/templui/internal/components/${componentInfo.name}`,
        templateFunction: `${componentInfo.name}.${componentInfo.displayName}`,
        installCommand: componentInfo.installCommand
      },

      // Statistics
      stats: {
        lastUpdated: new Date().toISOString(),
        cacheStatus: 'fresh'
      }
    };
    
    // Cache the result
    await cache.set(cacheKey, metadata);
    
    logInfo(`Successfully generated metadata for component: ${componentName}`);
    return {
      content: [{ 
        type: "text", 
        text: `# Metadata for ${componentInfo.displayName}\n\n\`\`\`json\n${JSON.stringify(metadata, null, 2)}\n\`\`\``
      }]
    };
  } catch (error) {
    logError(`Failed to get metadata for component "${componentName}"`, error as Error);
    throw new Error(`Failed to get metadata for component "${componentName}": ${error instanceof Error ? error.message : String(error)}`);
  }
}

export const schema = {
  componentName: {
    type: 'string',
    description: 'Name of the TemplUI component to get metadata for'
  }
};