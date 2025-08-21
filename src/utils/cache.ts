import fs from 'fs';
import path from 'path';
import os from 'os';
import { logDebug, logError, logInfo } from './logger.js';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

export class Cache {
  private cacheDir: string;
  private memoryCache: Map<string, CacheEntry<any>> = new Map();
  private defaultTTL: number; // Time to live in milliseconds

  constructor(cacheDir?: string, defaultTTL: number = 30 * 60 * 1000) { // 30 minutes default
    this.cacheDir = cacheDir || path.join(os.homedir(), '.templui-mcp', 'cache');
    this.defaultTTL = defaultTTL;
    this.ensureCacheDir();
  }

  /**
   * Set reduced TTL for dynamic data
   */
  setReducedTTL(key: string): number {
    // Use shorter TTL for dynamic/live data that should be refreshed more frequently
    if (key.includes('dynamic') || key.includes('list-components') || key.includes('repository-info')) {
      return 15 * 60 * 1000; // 15 minutes for dynamic data
    }
    return this.defaultTTL; // 30 minutes for regular data
  }

  /**
   * Get cached data
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      // Check memory cache first
      const memoryCached = this.memoryCache.get(key);
      if (memoryCached && memoryCached.expiresAt > Date.now()) {
        logDebug(`Cache hit (memory): ${key}`);
        return memoryCached.data;
      }

      // Check disk cache
      const filePath = this.getFilePath(key);
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const cacheEntry: CacheEntry<T> = JSON.parse(fileContent);
        
        if (cacheEntry.expiresAt > Date.now()) {
          // Update memory cache
          this.memoryCache.set(key, cacheEntry);
          logDebug(`Cache hit (disk): ${key}`);
          return cacheEntry.data;
        } else {
          // Expired, remove file
          fs.unlinkSync(filePath);
          logDebug(`Cache expired, removed: ${key}`);
        }
      }

      logDebug(`Cache miss: ${key}`);
      return null;
    } catch (error) {
      logError(`Cache get error for key ${key}`, error as Error);
      return null;
    }
  }

  /**
   * Set cached data
   */
  async set<T>(key: string, data: T, ttl?: number): Promise<void> {
    try {
      // Use reduced TTL for dynamic data if no explicit TTL provided
      const effectiveTTL = ttl || this.setReducedTTL(key);
      const expiresAt = Date.now() + effectiveTTL;
      const cacheEntry: CacheEntry<T> = {
        data,
        timestamp: Date.now(),
        expiresAt
      };

      // Update memory cache
      this.memoryCache.set(key, cacheEntry);

      // Update disk cache
      const filePath = this.getFilePath(key);
      fs.writeFileSync(filePath, JSON.stringify(cacheEntry), 'utf-8');
      
      const ttlMinutes = Math.round(effectiveTTL / 60000);
      logDebug(`Cache set: ${key} (expires in ${ttlMinutes}min: ${new Date(expiresAt).toISOString()})`);
    } catch (error) {
      logError(`Cache set error for key ${key}`, error as Error);
    }
  }

  /**
   * Check if key exists and is not expired
   */
  async has(key: string): Promise<boolean> {
    const data = await this.get(key);
    return data !== null;
  }

  /**
   * Delete cached data
   */
  async delete(key: string): Promise<void> {
    try {
      // Remove from memory cache
      this.memoryCache.delete(key);

      // Remove from disk cache
      const filePath = this.getFilePath(key);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      
      logDebug(`Cache deleted: ${key}`);
    } catch (error) {
      logError(`Cache delete error for key ${key}`, error as Error);
    }
  }

  /**
   * Clear all cached data
   */
  async clear(): Promise<void> {
    try {
      // Clear memory cache
      this.memoryCache.clear();

      // Clear disk cache
      if (fs.existsSync(this.cacheDir)) {
        const files = fs.readdirSync(this.cacheDir);
        for (const file of files) {
          fs.unlinkSync(path.join(this.cacheDir, file));
        }
      }
      
      logInfo('Cache cleared');
    } catch (error) {
      logError('Cache clear error', error as Error);
    }
  }

  /**
   * Clean up expired entries
   */
  async cleanup(): Promise<void> {
    try {
      const now = Date.now();
      
      // Clean memory cache
      for (const [key, entry] of this.memoryCache.entries()) {
        if (entry.expiresAt <= now) {
          this.memoryCache.delete(key);
        }
      }

      // Clean disk cache
      if (fs.existsSync(this.cacheDir)) {
        const files = fs.readdirSync(this.cacheDir);
        let cleanedCount = 0;
        
        for (const file of files) {
          try {
            const filePath = path.join(this.cacheDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const cacheEntry = JSON.parse(fileContent);
            
            if (cacheEntry.expiresAt <= now) {
              fs.unlinkSync(filePath);
              cleanedCount++;
            }
          } catch (error) {
            // Invalid cache file, remove it
            fs.unlinkSync(path.join(this.cacheDir, file));
            cleanedCount++;
          }
        }
        
        if (cleanedCount > 0) {
          logInfo(`Cache cleanup: removed ${cleanedCount} expired entries`);
        }
      }
    } catch (error) {
      logError('Cache cleanup error', error as Error);
    }
  }

  /**
   * Get cache statistics
   */
  async getStats(): Promise<{ memoryEntries: number; diskEntries: number; totalSize: number }> {
    try {
      const memoryEntries = this.memoryCache.size;
      let diskEntries = 0;
      let totalSize = 0;

      if (fs.existsSync(this.cacheDir)) {
        const files = fs.readdirSync(this.cacheDir);
        diskEntries = files.length;
        
        for (const file of files) {
          const filePath = path.join(this.cacheDir, file);
          const stats = fs.statSync(filePath);
          totalSize += stats.size;
        }
      }

      return { memoryEntries, diskEntries, totalSize };
    } catch (error) {
      logError('Cache stats error', error as Error);
      return { memoryEntries: 0, diskEntries: 0, totalSize: 0 };
    }
  }

  /**
   * Ensure cache directory exists
   */
  private ensureCacheDir(): void {
    try {
      if (!fs.existsSync(this.cacheDir)) {
        fs.mkdirSync(this.cacheDir, { recursive: true });
        logInfo(`Created cache directory: ${this.cacheDir}`);
      }
    } catch (error) {
      logError('Failed to create cache directory', error as Error);
    }
  }

  /**
   * Get file path for cache key
   */
  private getFilePath(key: string): string {
    // Sanitize key for filename
    const sanitizedKey = key.replace(/[^a-zA-Z0-9-_]/g, '_');
    return path.join(this.cacheDir, `${sanitizedKey}.json`);
  }
}

// Export singleton instance
export const cache = new Cache();