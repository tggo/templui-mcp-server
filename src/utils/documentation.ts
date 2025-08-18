import fs from 'fs';
import path from 'path';
import { logError, logInfo, logDebug } from './logger.js';

export interface ComponentDocumentation {
  name: string;
  title: string;
  description: string;
  installation: string;
  examples: string[];
  apiTable?: string;
  usage?: string;
  rawContent: string;
}

export class DocumentationParser {
  private docsPath: string;

  constructor(docsPath: string = './samples/templui-site-doc') {
    this.docsPath = docsPath;
  }

  /**
   * Get documentation for a specific component
   */
  async getComponentDocs(componentName: string): Promise<ComponentDocumentation | null> {
    try {
      const docFileName = `templui.io_docs_components_${componentName.toLowerCase()}.md`;
      const docPath = path.join(this.docsPath, docFileName);

      if (!fs.existsSync(docPath)) {
        logDebug(`Documentation file not found: ${docPath}`);
        return null;
      }

      const content = fs.readFileSync(docPath, 'utf-8');
      return this.parseMarkdownContent(content, componentName);
    } catch (error) {
      logError(`Failed to read documentation for ${componentName}`, error as Error);
      return null;
    }
  }

  /**
   * Get list of all documented components
   */
  async getAvailableComponentDocs(): Promise<string[]> {
    try {
      if (!fs.existsSync(this.docsPath)) {
        logError(`Documentation directory not found: ${this.docsPath}`, new Error('Directory not found'));
        return [];
      }

      const files = fs.readdirSync(this.docsPath);
      const componentFiles = files.filter(file => 
        file.startsWith('templui.io_docs_components_') && 
        file.endsWith('.md') &&
        !file.includes('templui.io_docs_components.md') // Exclude the index file
      );

      const components = componentFiles.map(file => {
        const componentName = file
          .replace('templui.io_docs_components_', '')
          .replace('.md', '')
          .replace(/-/g, ''); // Remove hyphens for consistency
        return componentName;
      });

      logInfo(`Found documentation for ${components.length} components`);
      return components;
    } catch (error) {
      logError('Failed to read documentation directory', error as Error);
      return [];
    }
  }

  /**
   * Parse markdown content into structured documentation
   */
  private parseMarkdownContent(content: string, componentName: string): ComponentDocumentation {
    const lines = content.split('\n');
    let title = '';
    let description = '';
    let installation = '';
    const examples: string[] = [];
    let apiTable = '';
    let usage = '';

    let currentSection = '';
    let currentCodeBlock = '';
    let insideCodeBlock = false;
    let insideApiTable = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Extract title from frontmatter or main heading
      if (trimmedLine.startsWith('title:')) {
        title = trimmedLine.replace('title:', '').replace(/"/g, '').trim();
        continue;
      }

      // Main heading
      if (trimmedLine.startsWith('# ') && !title) {
        title = trimmedLine.replace('# ', '').trim();
        continue;
      }

      // Component description (usually the first paragraph after title)
      if (!description && title && trimmedLine && !trimmedLine.startsWith('#') && !trimmedLine.startsWith('---') && !trimmedLine.startsWith('[')) {
        description = trimmedLine;
        continue;
      }

      // Section headers
      if (trimmedLine.startsWith('## ')) {
        currentSection = trimmedLine.replace('## ', '').toLowerCase();
        continue;
      }

      // Installation section
      if (currentSection === 'installation' && trimmedLine.startsWith('```')) {
        if (!insideCodeBlock) {
          insideCodeBlock = true;
          currentCodeBlock = '';
        } else {
          insideCodeBlock = false;
          if (currentCodeBlock.trim().startsWith('templui add')) {
            installation = currentCodeBlock.trim();
          }
          currentCodeBlock = '';
        }
        continue;
      }

      // Code blocks for examples
      if (trimmedLine.startsWith('```')) {
        if (!insideCodeBlock) {
          insideCodeBlock = true;
          currentCodeBlock = '';
        } else {
          insideCodeBlock = false;
          if (currentCodeBlock.trim() && currentSection === 'examples') {
            examples.push(this.formatCodeExample(currentCodeBlock.trim(), componentName));
          }
          currentCodeBlock = '';
        }
        continue;
      }

      // Collect code block content
      if (insideCodeBlock) {
        currentCodeBlock += line + '\n';
        continue;
      }

      // API table detection (simple heuristic)
      if (trimmedLine.includes('|') && (trimmedLine.includes('Prop') || trimmedLine.includes('Type') || trimmedLine.includes('Default'))) {
        insideApiTable = true;
        apiTable += line + '\n';
        continue;
      }

      if (insideApiTable && trimmedLine.includes('|')) {
        apiTable += line + '\n';
        continue;
      } else if (insideApiTable) {
        insideApiTable = false;
      }

      // Usage patterns
      if (currentSection === 'usage' || currentSection === 'examples') {
        if (trimmedLine && !trimmedLine.startsWith('```')) {
          usage += line + '\n';
        }
      }
    }

    return {
      name: componentName,
      title: title || componentName,
      description: description || `${componentName} component for TemplUI`,
      installation: installation || `templui add ${componentName.toLowerCase()}`,
      examples,
      apiTable: apiTable.trim() || undefined,
      usage: usage.trim() || undefined,
      rawContent: content
    };
  }

  /**
   * Format code examples with helpful comments
   */
  private formatCodeExample(code: string, componentName: string): string {
    const lines = code.split('\n');
    const formattedLines: string[] = [];

    // Add header comment
    formattedLines.push(`// Example usage of ${componentName} component`);
    formattedLines.push('// Copy this code to your .templ file');
    formattedLines.push('');

    let insidePackageDeclaration = false;
    let insideImports = false;

    for (const line of lines) {
      const trimmedLine = line.trim();

      // Package declaration
      if (trimmedLine.startsWith('package ')) {
        formattedLines.push('// Package declaration for the showcase');
        insidePackageDeclaration = true;
      }

      // Import statements
      if (trimmedLine.startsWith('import ')) {
        if (!insideImports) {
          formattedLines.push('');
          formattedLines.push('// Import TemplUI components');
          insideImports = true;
        }
      }

      // Template function
      if (trimmedLine.startsWith('templ ')) {
        if (insideImports) {
          formattedLines.push('');
          formattedLines.push('// Template function - replace with your own function name');
          insideImports = false;
        }
      }

      // Component usage
      if (trimmedLine.includes(`@${componentName.toLowerCase()}.`)) {
        formattedLines.push(`    // ${componentName} component with configuration`);
      }

      formattedLines.push(line);

      if (insidePackageDeclaration && trimmedLine) {
        formattedLines.push('');
        insidePackageDeclaration = false;
      }
    }

    return formattedLines.join('\n');
  }

  /**
   * Extract metadata from component documentation
   */
  async getComponentMetadata(componentName: string): Promise<any> {
    const docs = await this.getComponentDocs(componentName);
    if (!docs) {
      return null;
    }

    const metadata = {
      name: docs.name,
      title: docs.title,
      description: docs.description,
      installation: docs.installation,
      hasExamples: docs.examples.length > 0,
      hasApiTable: !!docs.apiTable,
      exampleCount: docs.examples.length,
      category: this.inferCategory(docs.rawContent),
      features: this.extractFeatures(docs.rawContent)
    };

    return metadata;
  }

  /**
   * Infer component category from documentation content
   */
  private inferCategory(content: string): string {
    const lowerContent = content.toLowerCase();

    if (lowerContent.includes('form') || lowerContent.includes('input') || lowerContent.includes('button')) {
      return 'form';
    }
    if (lowerContent.includes('navigation') || lowerContent.includes('menu') || lowerContent.includes('breadcrumb')) {
      return 'navigation';
    }
    if (lowerContent.includes('overlay') || lowerContent.includes('modal') || lowerContent.includes('popup')) {
      return 'overlay';
    }
    if (lowerContent.includes('feedback') || lowerContent.includes('alert') || lowerContent.includes('toast')) {
      return 'feedback';
    }
    if (lowerContent.includes('layout') || lowerContent.includes('container') || lowerContent.includes('grid')) {
      return 'layout';
    }

    return 'display';
  }

  /**
   * Extract key features from documentation
   */
  private extractFeatures(content: string): string[] {
    const features: string[] = [];
    const lowerContent = content.toLowerCase();

    if (lowerContent.includes('accessible') || lowerContent.includes('aria')) {
      features.push('Accessibility support');
    }
    if (lowerContent.includes('responsive')) {
      features.push('Responsive design');
    }
    if (lowerContent.includes('theme') || lowerContent.includes('dark mode')) {
      features.push('Theme support');
    }
    if (lowerContent.includes('animation') || lowerContent.includes('transition')) {
      features.push('Animated transitions');
    }
    if (lowerContent.includes('keyboard')) {
      features.push('Keyboard navigation');
    }
    if (lowerContent.includes('validation')) {
      features.push('Form validation');
    }

    return features;
  }
}