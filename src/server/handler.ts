import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError
} from "@modelcontextprotocol/sdk/types.js";
import { type Server } from "@modelcontextprotocol/sdk/server/index.js";
import { toolHandlers, tools } from "../tools/index.js";
import { validateAndSanitizeParams } from '../utils/validation.js';
import { logError, logInfo, logDebug } from '../utils/logger.js';

/**
 * Wrapper function to handle requests with error handling and validation
 */
async function handleRequest<T>(
  method: string,
  params: any,
  handler: (validatedParams: any) => Promise<T>
): Promise<T> {
  try {
    logDebug(`Handling request: ${method}`, { params });
    
    // Validate and sanitize input parameters
    const validatedParams = validateAndSanitizeParams(method, params);
    
    // Execute the handler
    const result = await handler(validatedParams);
    
    logDebug(`Request completed successfully: ${method}`);
    return result;
  } catch (error) {
    logError(`Error in ${method}`, error as Error);
    
    // Convert to MCP error if needed
    if (error instanceof McpError) {
      throw error;
    }
    
    // Create appropriate MCP error
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    if (errorMessage.includes('not found') || errorMessage.includes('does not exist')) {
      throw new McpError(ErrorCode.InvalidRequest, `Resource not found: ${errorMessage}`);
    }
    
    if (errorMessage.includes('validation') || errorMessage.includes('Invalid parameters')) {
      throw new McpError(ErrorCode.InvalidParams, errorMessage);
    }
    
    // Generic internal error
    throw new McpError(ErrorCode.InternalError, `Internal server error: ${errorMessage}`);
  }
}

/**
 * Sets up all request handlers for the MCP server
 * @param server - The MCP server instance
 */
export const setupHandlers = (server: Server): void => {
  logInfo('Setting up TemplUI MCP server request handlers...');

  // List available tools
  server.setRequestHandler(ListToolsRequestSchema, async (request) => {
    return await handleRequest(
      'list_tools',
      request.params,
      async () => {
        const availableTools = Object.values(tools);
        logInfo(`Returning ${availableTools.length} available tools`);
        return { tools: availableTools };
      }
    );
  });

  // Handle tool execution
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    return await handleRequest(
      'call_tool',
      request.params,
      async (validatedParams: any) => {
        const { name, arguments: params } = validatedParams;
        
        if (!name || typeof name !== 'string') {
          throw new McpError(ErrorCode.InvalidParams, "Tool name is required and must be a string");
        }
        
        const handler = toolHandlers[name as keyof typeof toolHandlers];

        if (!handler) {
          throw new McpError(ErrorCode.MethodNotFound, `Tool not found: ${name}`);
        }

        logInfo(`Executing tool: ${name}`);
        
        // Execute handler
        const result = await handler(params || {});
        
        logInfo(`Tool execution completed: ${name}`);
        return result;
      }
    );
  });
  
  // Global error handler
  server.onerror = (error) => {
    logError('MCP server error', error);
  };

  // Remove onnotification as it doesn't exist in the SDK

  logInfo('TemplUI MCP server handlers setup complete');
};