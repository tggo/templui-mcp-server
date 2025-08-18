import { z } from 'zod';
import { logError, logDebug } from './logger.js';

// Define schemas for tool parameters
export const componentNameSchema = z.object({
  componentName: z.string().min(1, "Component name is required")
});

export const listComponentsSchema = z.object({
  category: z.string().optional()
});

export const getDirectoryStructureSchema = z.object({
  path: z.string().optional(),
  owner: z.string().optional(),
  repo: z.string().optional(),
  branch: z.string().optional()
});

// Schema mapping for different tools
const toolSchemas: Record<string, z.ZodType> = {
  get_component: componentNameSchema,
  get_component_demo: componentNameSchema,
  get_component_docs: componentNameSchema,
  get_component_javascript: componentNameSchema,
  get_component_metadata: componentNameSchema,
  list_components: listComponentsSchema,
  get_directory_structure: getDirectoryStructureSchema
};

/**
 * Validate and sanitize input parameters for tools
 */
export function validateAndSanitizeParams(toolName: string, params: any): any {
  try {
    logDebug(`Validating parameters for tool: ${toolName}`, { params });

    const schema = toolSchemas[toolName];
    if (!schema) {
      logDebug(`No validation schema found for tool: ${toolName}`);
      return params || {};
    }

    // Validate against schema
    const result = schema.parse(params || {});
    
    // Additional sanitization for component names
    if ('componentName' in result) {
      result.componentName = sanitizeComponentName(result.componentName);
    }

    logDebug(`Validation successful for tool: ${toolName}`, { result });
    return result;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map(err => 
        `${err.path.join('.')}: ${err.message}`
      ).join(', ');
      
      logError(`Parameter validation failed for ${toolName}: ${errorMessage}`, error);
      throw new Error(`Invalid parameters for ${toolName}: ${errorMessage}`);
    }
    
    logError(`Unexpected validation error for ${toolName}`, error as Error);
    throw error;
  }
}

/**
 * Sanitize component name to ensure it's safe and consistent
 */
export function sanitizeComponentName(name: string): string {
  if (!name || typeof name !== 'string') {
    throw new Error('Component name must be a non-empty string');
  }

  // Remove any potentially dangerous characters and normalize
  const sanitized = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, '') // Only allow letters, numbers, and hyphens
    .replace(/^-+|-+$/g, '')    // Remove leading/trailing hyphens
    .replace(/-+/g, '')         // Remove all hyphens for consistency with TemplUI naming
    .substring(0, 50);          // Limit length

  if (!sanitized) {
    throw new Error('Component name contains no valid characters');
  }

  logDebug(`Sanitized component name: ${name} -> ${sanitized}`);
  return sanitized;
}

/**
 * Validate that a component exists in our known components list
 */
export function validateComponentExists(componentName: string, knownComponents: string[]): boolean {
  const sanitizedName = sanitizeComponentName(componentName);
  const exists = knownComponents.some(comp => 
    comp.toLowerCase() === sanitizedName
  );
  
  if (!exists) {
    logDebug(`Component not found: ${sanitizedName}. Available components: ${knownComponents.join(', ')}`);
  }
  
  return exists;
}

/**
 * Sanitize and validate category parameter
 */
export function sanitizeCategory(category?: string): string | undefined {
  if (!category || typeof category !== 'string') {
    return undefined;
  }

  const sanitized = category
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, '')
    .substring(0, 20);

  return sanitized || undefined;
}

/**
 * Validate GitHub repository parameters
 */
export function validateGitHubParams(params: any): {
  owner: string;
  repo: string;
  branch: string;
  path: string;
} {
  const defaults = {
    owner: 'templui',
    repo: 'templui',
    branch: 'main',
    path: 'internal/components'
  };

  return {
    owner: (params.owner && typeof params.owner === 'string') 
      ? params.owner.replace(/[^a-zA-Z0-9-]/g, '').substring(0, 50) 
      : defaults.owner,
    repo: (params.repo && typeof params.repo === 'string') 
      ? params.repo.replace(/[^a-zA-Z0-9-]/g, '').substring(0, 50) 
      : defaults.repo,
    branch: (params.branch && typeof params.branch === 'string') 
      ? params.branch.replace(/[^a-zA-Z0-9-_.]/g, '').substring(0, 50) 
      : defaults.branch,
    path: (params.path && typeof params.path === 'string') 
      ? params.path.replace(/[^a-zA-Z0-9-_./]/g, '').substring(0, 200) 
      : defaults.path
  };
}