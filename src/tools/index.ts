import { handleGetComponent, setGitHubClient as setGitHubClientComponent } from './get-component.js';
import { handleGetComponentDemo, setGitHubClient as setGitHubClientDemo } from './get-component-demo.js';
import { handleGetComponentDocs, setDocumentationParser as setDocumentationParserDocs } from './get-component-docs.js';
import { handleGetComponentJavaScript, setGitHubClient as setGitHubClientJS } from './get-component-javascript.js';
import { handleGetComponentMetadata, setDocumentationParser as setDocumentationParserMeta } from './get-component-metadata.js';
import { handleListComponents } from './list-components.js';

import { schema as getComponentSchema } from './get-component.js';
import { schema as getComponentDemoSchema } from './get-component-demo.js';
import { schema as getComponentDocsSchema } from './get-component-docs.js';
import { schema as getComponentJavaScriptSchema } from './get-component-javascript.js';
import { schema as getComponentMetadataSchema } from './get-component-metadata.js';
import { schema as listComponentsSchema } from './list-components.js';

import { GitHubClient } from '../utils/github-client.js';
import { DocumentationParser } from '../utils/documentation.js';

// Tool handlers
export const toolHandlers = {
  get_component: handleGetComponent,
  get_component_demo: handleGetComponentDemo,
  get_component_docs: handleGetComponentDocs,
  get_component_javascript: handleGetComponentJavaScript,
  get_component_metadata: handleGetComponentMetadata,
  list_components: handleListComponents
};

// Tool schemas
export const toolSchemas = {
  get_component: getComponentSchema,
  get_component_demo: getComponentDemoSchema,
  get_component_docs: getComponentDocsSchema,
  get_component_javascript: getComponentJavaScriptSchema,
  get_component_metadata: getComponentMetadataSchema,
  list_components: listComponentsSchema
};

// Tool definitions for MCP
export const tools = {
  'get_component': {
    name: 'get_component',
    description: 'Get the source code (.templ file) for a specific TemplUI component with helpful comments',
    inputSchema: {
      type: 'object',
      properties: getComponentSchema,
      required: ['componentName']
    }
  },
  'get_component_demo': {
    name: 'get_component_demo',
    description: 'Get demo/example code showing how to use a TemplUI component',
    inputSchema: {
      type: 'object',
      properties: getComponentDemoSchema,
      required: ['componentName']
    }
  },
  'get_component_docs': {
    name: 'get_component_docs',
    description: 'Get documentation for a TemplUI component including installation and usage',
    inputSchema: {
      type: 'object',
      properties: getComponentDocsSchema,
      required: ['componentName']
    }
  },
  'get_component_javascript': {
    name: 'get_component_javascript',
    description: 'Get JavaScript code for a TemplUI component (if it has client-side functionality)',
    inputSchema: {
      type: 'object',
      properties: getComponentJavaScriptSchema,
      required: ['componentName']
    }
  },
  'get_component_metadata': {
    name: 'get_component_metadata',
    description: 'Get detailed metadata for a TemplUI component including props, category, and features',
    inputSchema: {
      type: 'object',
      properties: getComponentMetadataSchema,
      required: ['componentName']
    }
  },
  'list_components': {
    name: 'list_components',
    description: 'Get a list of all available TemplUI components, optionally filtered by category',
    inputSchema: {
      type: 'object',
      properties: listComponentsSchema
    }
  }
};

/**
 * Initialize all tools with required dependencies
 */
export function initializeTools(githubClient: GitHubClient, documentationParser: DocumentationParser): void {
  // Set dependencies for GitHub-based tools
  setGitHubClientComponent(githubClient);
  setGitHubClientDemo(githubClient);
  setGitHubClientJS(githubClient);

  // Set dependencies for documentation-based tools
  setDocumentationParserDocs(documentationParser);
  setDocumentationParserMeta(documentationParser);
}