import { Axios } from "axios";
import { logError, logWarning, logInfo, logDebug } from './logger.js';

// TemplUI repository constants
const REPO_OWNER = 'templui';
const REPO_NAME = 'templui';
const REPO_BRANCH = 'main';
const COMPONENTS_PATH = 'internal/components';
const SHOWCASE_PATH = 'internal/ui/showcase';

// GitHub API client for accessing repository metadata
const githubApi = new Axios({
    baseURL: "https://api.github.com",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/vnd.github+json",
        "User-Agent": "Mozilla/5.0 (compatible; TempluiMcpServer/1.0.0)",
    },
    timeout: 30000,
    transformResponse: [(data) => {
        try {
            return JSON.parse(data);
        } catch {
            return data;
        }
    }],
});

// GitHub Raw client for fetching file contents
const githubRaw = new Axios({
    baseURL: `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${REPO_BRANCH}`,
    headers: {
        "User-Agent": "Mozilla/5.0 (compatible; TempluiMcpServer/1.0.0)",
    },
    timeout: 30000,
    transformResponse: [(data) => data], // Return raw data
});

export class GitHubClient {
    private apiKey?: string;

    constructor(apiKey?: string) {
        this.apiKey = apiKey;
        if (apiKey) {
            githubApi.defaults.headers["Authorization"] = `Bearer ${apiKey}`;
            logInfo("GitHub API configured with token");
        } else {
            logWarning("No GitHub API key provided. Rate limited to 60 requests/hour.");
        }
    }

    /**
     * Get the source code of a TemplUI component (.templ file)
     */
    async getComponentSource(componentName: string): Promise<string> {
        const componentPath = `${COMPONENTS_PATH}/${componentName.toLowerCase()}/${componentName.toLowerCase()}.templ`;
        
        try {
            logDebug(`Fetching component source: ${componentPath}`);
            const response = await githubRaw.get(`/${componentPath}`);
            return this.addCommentsToTemplCode(response.data, componentName);
        } catch (error) {
            logError(`Failed to fetch component "${componentName}"`, error as Error);
            throw new Error(`Component "${componentName}" not found in TemplUI repository`);
        }
    }

    /**
     * Get the JavaScript code for a component (if it exists)
     */
    async getComponentJavaScript(componentName: string): Promise<string | null> {
        const jsPath = `${COMPONENTS_PATH}/${componentName.toLowerCase()}/${componentName.toLowerCase()}.js`;
        
        try {
            logDebug(`Fetching component JavaScript: ${jsPath}`);
            const response = await githubRaw.get(`/${jsPath}`);
            return this.addCommentsToJavaScript(response.data, componentName);
        } catch (error) {
            logDebug(`No JavaScript file found for component "${componentName}"`);
            return null;
        }
    }

    /**
     * Get showcase/demo code for a component
     */
    async getComponentDemo(componentName: string): Promise<string[]> {
        try {
            // Get all showcase files for this component
            const showcasePath = `repos/${REPO_OWNER}/${REPO_NAME}/contents/${SHOWCASE_PATH}`;
            const response = await githubApi.get(showcasePath);
            
            if (!response.data || !Array.isArray(response.data)) {
                throw new Error('Invalid response from GitHub API');
            }

            // Filter files that match the component name pattern
            const componentFiles = response.data.filter((item: any) => 
                item.type === 'file' && 
                item.name.includes(componentName.toLowerCase()) &&
                item.name.endsWith('.templ')
            );

            if (componentFiles.length === 0) {
                throw new Error(`No demo files found for component "${componentName}"`);
            }

            // Fetch content of each demo file
            const demos: string[] = [];
            for (const file of componentFiles) {
                try {
                    const demoResponse = await githubRaw.get(`/${SHOWCASE_PATH}/${file.name}`);
                    const demoWithComments = this.addCommentsToTemplCode(demoResponse.data, `${componentName} Demo: ${file.name}`);
                    demos.push(demoWithComments);
                } catch (error) {
                    logWarning(`Failed to fetch demo file: ${file.name}`);
                }
            }

            return demos;
        } catch (error) {
            logError(`Failed to fetch demos for component "${componentName}"`, error as Error);
            throw new Error(`Demo files for component "${componentName}" not found`);
        }
    }

    /**
     * Get directory structure of components
     */
    async getComponentsList(): Promise<string[]> {
        try {
            const response = await githubApi.get(`/repos/${REPO_OWNER}/${REPO_NAME}/contents/${COMPONENTS_PATH}`);
            
            if (!response.data || !Array.isArray(response.data)) {
                throw new Error('Invalid response from GitHub API');
            }
            
            const components = response.data
                .filter((item: any) => item.type === 'dir')
                .map((item: any) => item.name);
                
            if (components.length === 0) {
                throw new Error('No components found in the repository');
            }
            
            logInfo(`Found ${components.length} components in repository`);
            return components;
        } catch (error: any) {
            logError('Error fetching components from GitHub API', error);
            throw new Error(`Failed to fetch components list: ${error.message}`);
        }
    }

    /**
     * Get the directory structure of the repository
     */
    async getDirectoryStructure(path: string = COMPONENTS_PATH): Promise<any> {
        try {
            const response = await githubApi.get(`/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`);
            return response.data;
        } catch (error) {
            logError(`Failed to fetch directory structure for path: ${path}`, error as Error);
            throw new Error(`Directory structure not found for path: ${path}`);
        }
    }

    /**
     * Add helpful comments to templ code
     */
    private addCommentsToTemplCode(code: string, componentName: string): string {
        const lines = code.split('\n');
        const commentedLines: string[] = [];
        
        // Add header comment
        commentedLines.push(`// Component: ${componentName}`);
        commentedLines.push(`// Framework: Go templ`);
        commentedLines.push(`// Source: github.com/templui/templui/internal/components`);
        commentedLines.push('//');
        
        let insideType = false;
        let insideTempl = false;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmedLine = line.trim();
            
            // Add comments for type definitions
            if (trimmedLine.startsWith('type') && trimmedLine.includes('struct')) {
                commentedLines.push(`// Props structure defining component configuration`);
                insideType = true;
            }
            
            // Add comments for templ functions
            if (trimmedLine.startsWith('templ ') && trimmedLine.includes('(')) {
                commentedLines.push(`// Main component template - renders the ${componentName} component`);
                insideTempl = true;
            }
            
            // Add comments for methods
            if (trimmedLine.startsWith('func ') && trimmedLine.includes('Classes()')) {
                commentedLines.push(`// Helper method for generating CSS classes based on component variants`);
            }
            
            commentedLines.push(line);
            
            // Add explanatory comments for key sections
            if (insideType && trimmedLine.includes('Variant')) {
                commentedLines.push('    // Visual style variant (e.g., primary, secondary, outline)');
            }
            if (insideType && trimmedLine.includes('Size')) {
                commentedLines.push('    // Component size (e.g., sm, default, lg)');
            }
            if (insideType && trimmedLine.includes('Class')) {
                commentedLines.push('    // Additional CSS classes for customization');
            }
            
            if (trimmedLine === '}' && insideType) {
                insideType = false;
            }
        }
        
        return commentedLines.join('\n');
    }

    /**
     * Add helpful comments to JavaScript code
     */
    private addCommentsToJavaScript(code: string, componentName: string): string {
        const lines = code.split('\n');
        const commentedLines: string[] = [];
        
        // Add header comment
        commentedLines.push(`// JavaScript for ${componentName} component`);
        commentedLines.push(`// Provides client-side interactivity and behavior`);
        commentedLines.push(`// Framework: Vanilla JavaScript (no dependencies)`);
        commentedLines.push('//');
        
        for (const line of lines) {
            const trimmedLine = line.trim();
            
            // Add comments for key patterns
            if (trimmedLine.includes('addEventListener')) {
                commentedLines.push('        // Event listener for user interactions');
            }
            if (trimmedLine.includes('querySelector')) {
                commentedLines.push('        // DOM element selection');
            }
            if (trimmedLine.includes('data-') && trimmedLine.includes('getAttribute')) {
                commentedLines.push('        // Reading configuration from data attributes');
            }
            
            commentedLines.push(line);
        }
        
        return commentedLines.join('\n');
    }
}