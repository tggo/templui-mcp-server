import { DocumentationParser } from '../utils/documentation.js';
import { cache } from '../utils/cache.js';
import { logError, logInfo } from '../utils/logger.js';

let documentationParser: DocumentationParser;

export function setDocumentationParser(parser: DocumentationParser): void {
  documentationParser = parser;
}

export async function handleGetComponentDocs({ componentName }: { componentName: string }) {
  try {
    logInfo(`Getting documentation for component: ${componentName}`);

    // Check cache first
    const cacheKey = `component-docs:${componentName}`;
    const cached = await cache.get<string>(cacheKey);
    if (cached) {
      logInfo(`Returning cached documentation for component: ${componentName}`);
      return {
        content: [{ type: "text", text: cached }]
      };
    }

    // Fetch documentation
    const docs = await documentationParser.getComponentDocs(componentName);
    
    if (!docs) {
      throw new Error(`Documentation not found for component "${componentName}"`);
    }

    // Format documentation
    const formattedDocs = formatDocumentation(docs);
    
    // Cache the result
    await cache.set(cacheKey, formattedDocs);
    
    logInfo(`Successfully fetched documentation for component: ${componentName}`);
    return {
      content: [{ type: "text", text: formattedDocs }]
    };
  } catch (error) {
    logError(`Failed to get documentation for component "${componentName}"`, error as Error);
    throw new Error(`Failed to get documentation for component "${componentName}": ${error instanceof Error ? error.message : String(error)}`);
  }
}

function formatDocumentation(docs: any): string {
  const sections: string[] = [];

  // Header
  sections.push(`# ${docs.title}`);
  sections.push('');
  
  // Description
  if (docs.description) {
    sections.push(docs.description);
    sections.push('');
  }

  // Installation
  if (docs.installation) {
    sections.push('## Installation');
    sections.push('');
    sections.push('```bash');
    sections.push(docs.installation);
    sections.push('```');
    sections.push('');
  }

  // Examples
  if (docs.examples && docs.examples.length > 0) {
    sections.push('## Examples');
    sections.push('');
    
    docs.examples.forEach((example: string, index: number) => {
      if (docs.examples.length > 1) {
        sections.push(`### Example ${index + 1}`);
        sections.push('');
      }
      sections.push('```go');
      sections.push(example);
      sections.push('```');
      sections.push('');
    });
  }

  // API Table
  if (docs.apiTable) {
    sections.push('## API Reference');
    sections.push('');
    sections.push(docs.apiTable);
    sections.push('');
  }

  // Usage notes
  if (docs.usage) {
    sections.push('## Usage Notes');
    sections.push('');
    sections.push(docs.usage);
    sections.push('');
  }

  // Footer
  sections.push('---');
  sections.push('');
  sections.push('*This documentation is for TemplUI components. Visit [templui.io](https://templui.io) for more information.*');

  return sections.join('\n');
}

export const schema = {
  componentName: {
    type: 'string',
    description: 'Name of the TemplUI component to get documentation for'
  }
};