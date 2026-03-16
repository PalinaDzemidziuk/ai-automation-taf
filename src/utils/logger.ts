// path: src/utils/logger.ts
/**
 * Minimal structured logger for test diagnostics.
 */
export class Logger {
  /**
   * Logs an informational message.
   */
  public info(message: string, context: Record<string, unknown> = {}): void {
    this.log('INFO', message, context);
  }

  /**
   * Logs a warning message.
   */
  public warn(message: string, context: Record<string, unknown> = {}): void {
    this.log('WARN', message, context);
  }

  /**
   * Logs an error message.
   */
  public error(message: string, context: Record<string, unknown> = {}): void {
    this.log('ERROR', message, context);
  }

  private log(level: 'INFO' | 'WARN' | 'ERROR', message: string, context: Record<string, unknown>): void {
    const payload = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...context,
    };

    console.log(JSON.stringify(payload));
  }
}

export const logger = new Logger();
