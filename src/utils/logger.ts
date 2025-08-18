import winston from 'winston';

// Create logger instance
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ timestamp, level, message, stack }) => {
      return `${timestamp} [${level.toUpperCase()}] ${message}${stack ? '\n' + stack : ''}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

export function setLogLevel(level: string): void {
  logger.level = level;
}

export function logError(message: string, error?: Error): void {
  if (error) {
    logger.error(message, { error: error.message, stack: error.stack });
  } else {
    logger.error(message);
  }
}

export function logWarning(message: string): void {
  logger.warn(message);
}

export function logInfo(message: string): void {
  logger.info(message);
}

export function logDebug(message: string, metadata?: any): void {
  if (metadata) {
    logger.debug(message, metadata);
  } else {
    logger.debug(message);
  }
}